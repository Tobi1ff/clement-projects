# Jobs page setup

The public route is `/jobs`. Vacancy records live in `scripts/jobs-data.mjs` in the `openings` array. Add a role only when CPS has approved it for publication. Each record should have this shape:

```js
{
  id: 'civil-technician-2026',
  title: 'Civil Technician',
  location: 'Phalaborwa, Limpopo',
  type: 'Full time',
  closingDate: '2026-12-20', // optional; ISO date
  summary: 'Short public description of the role and its requirements.'
}
```

The `id` must be unique and stable. Rebuild and deploy after editing the list. Expired vacancies are hidden from the page and rejected by the application endpoint.

## Enable online applications

The application endpoint emails the selected vacancy, applicant details and CV to Human Resources. It does not save applications in the site repository or a database. The CV must be a PDF or DOCX no larger than 3 MB.

In the Vercel project settings, add these Production environment variables:

- `RESEND_API_KEY`: API key for the CPS Resend account.
- `JOBS_FROM_EMAIL`: sender address on a domain verified in Resend, for example `CPS Careers <careers@your-verified-domain>`.
- `JOBS_EMAIL_TO`: optional recipient override. Defaults to `hr@clementprojectssolution.co.za`.

Redeploy after setting the variables. Keep the API key only in Vercel environment settings; never add it to source control. Before enabling a vacancy, submit a controlled application and confirm that HR receives the message and attachment.
