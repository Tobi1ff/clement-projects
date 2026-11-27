import { openings } from '../site/scripts/jobs-data.mjs';

const MAX_CV_BYTES = 3 * 1024 * 1024;
const rateWindowMs = 60 * 60 * 1000;
const requestsByAddress = new Map();

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
});
const clean = (value, limit) => String(value ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, limit);

function rateLimited(request) {
  const now = Date.now();
  const address = clean(request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown', 64);
  const recent = (requestsByAddress.get(address) || []).filter(timestamp => now - timestamp < rateWindowMs);
  if (recent.length >= 8) return true;
  recent.push(now);
  requestsByAddress.set(address, recent);
  if (requestsByAddress.size > 1000) {
    for (const [key, timestamps] of requestsByAddress) {
      if (!timestamps.some(timestamp => now - timestamp < rateWindowMs)) requestsByAddress.delete(key);
    }
  }
  return false;
}

export default async function handler(request) {
    if (request.method !== 'POST') return json({ error: 'Use POST to submit an application.' }, 405);
    const origin = request.headers.get('origin');
    if (origin) {
      try {
        if (new URL(origin).host !== new URL(request.url).host) return json({ error: 'This request could not be accepted.' }, 403);
      } catch {
        return json({ error: 'This request could not be accepted.' }, 403);
      }
    }
    if (rateLimited(request)) return json({ error: 'Too many attempts. Please wait before trying again.' }, 429);
    if (!request.headers.get('content-type')?.toLowerCase().startsWith('multipart/form-data')) {
      return json({ error: 'The application form could not be read.' }, 415);
    }

    let fields;
    try {
      fields = await request.formData();
    } catch {
      return json({ error: 'The application form could not be read.' }, 400);
    }
    if (clean(fields.get('website'), 200)) return json({ received: true });

    const jobId = clean(fields.get('job_id'), 80);
    const today = new Date().toISOString().slice(0, 10);
    const job = openings.find(item => item.id === jobId && (!item.closingDate || item.closingDate >= today));
    if (!job) return json({ error: 'That vacancy is no longer open. Please refresh the jobs page.' }, 400);

    const name = clean(fields.get('name'), 120);
    const email = clean(fields.get('email'), 200);
    const phone = clean(fields.get('phone'), 40);
    const coverNote = clean(fields.get('cover_note'), 2000);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !phone || fields.get('privacy_consent') !== 'yes') {
      return json({ error: 'Check the required details and privacy acknowledgement, then try again.' }, 400);
    }

    const file = fields.get('cv');
    if (!file || typeof file.arrayBuffer !== 'function' || !file.size || file.size > MAX_CV_BYTES) {
      return json({ error: 'Attach a CV no larger than 3 MB.' }, 400);
    }
    const fileName = clean(file.name, 180).replace(/[^a-zA-Z0-9._-]/g, '_');
    const isPdf = fileName.toLowerCase().endsWith('.pdf') && file.type === 'application/pdf';
    const isDocx = fileName.toLowerCase().endsWith('.docx') && file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    if (!isPdf && !isDocx) return json({ error: 'Upload a PDF or DOCX CV.' }, 400);

    const bytes = Buffer.from(await file.arrayBuffer());
    const validPdf = isPdf && bytes.subarray(0, 5).toString('ascii') === '%PDF-';
    const validDocx = isDocx && bytes.subarray(0, 4).toString('hex') === '504b0304';
    if (!validPdf && !validDocx) return json({ error: 'The uploaded file does not match its file type.' }, 400);

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.JOBS_FROM_EMAIL;
    const to = process.env.JOBS_EMAIL_TO || 'hr@clementprojectssolution.co.za';
    if (!apiKey || !from) return json({ error: 'Online applications are temporarily unavailable. Please email Human Resources directly.' }, 503);

    const subject = `Job application | ${clean(job.title, 100)} | ${name}`.replace(/[\r\n]/g, ' ');
    const text = [
      'A website job application has been received.',
      '',
      `Vacancy: ${clean(job.title, 160)}`,
      `Applicant: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      'Cover note:',
      coverNote || '(Not provided)',
      '',
      'The applicant CV is attached.',
    ].join('\n');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject,
          text,
          attachments: [{ filename: fileName, content: bytes.toString('base64') }],
        }),
      });
      if (!response.ok) return json({ error: 'We could not send your application. Please try again or email Human Resources.' }, 502);
      return json({ received: true, message: 'Your application has been sent to CPS Human Resources.' });
    } catch {
      return json({ error: 'We could not send your application. Please try again or email Human Resources.' }, 502);
    }
}
