// Transcribed from clemet-project-solutions.pdf, printed page 6 (PDF page 7).
// Preserve the listed model pairings; these are references, not fit guarantees.
export const pumpFamilies = [
  { id: 'ah', label: 'AH / AHR', pairs: [
    ['1.5/1B-AH', '1.5/1B-AM'], ['1.5/1B-AHR', '1.5/1B-AMR'],
    ['2/1.5B-AH', '2/1.5B-AM'], ['2/1.5B-AHR', '2/1.5B-AMR'],
    ['3/2C-AH', '3/2C-AM'], ['3/2C-AHR', '3/2C-AMR'],
    ['4/3C-AH', '4/3C-AM'], ['4/3C-AHR', '4/3C-AMR'],
    ['6/4D-AH', '6/4D-AM'], ['6/4D-AHR', '6/4D-AMR'],
    ['6/4E-AH', '6/4E-AM'], ['6/4E-AHR', '6/4E-AMR'],
    ['8/6E-AH', '8/6E-AM'], ['8/6E-AHR', '8/6E-AMR'],
    ['10/8F-AH', '10/8F-AM'], ['10/8F-AHR', '10/8F-AMR'],
    ['12/10ST-AH', '12/10ST-AM'], ['12/10ST-AHR', '12/10ST-AMR'],
    ['14/12ST-AH', '14/12ST-AM'], ['14/12ST-AHR', '14/12ST-AMR'],
    ['16/14TU-AH', '16/14TU-AM'], ['16/14TU-AHR', '16/14TU-AMR'],
  ] },
  { id: 'hh', label: 'HH', pairs: [
    ['1.5/1C-HH', '1.5/1C-AMH'], ['3/2D-HH', '3/2D-AMH'],
    ['4/3E-HH', '4/3E-AMH'], ['6/4F-HH', '6/4F-AMH'],
  ] },
  { id: 'l', label: 'L / L(R)', pairs: [
    ['20A-L', '20A-AML'], ['50B-L', '50B-AML'], ['50B-L(R)', '50B-AMLR'],
    ['75C-L', '75C-AML'], ['100D-L', '100D-AML'],
    ['150E-L', '150E-AML'], ['300S-L', '300S-AML'],
  ] },
  { id: 'm', label: 'M', pairs: [
    ['10/8R-M', '10/8R-AMM'], ['10/8E-M', '10/8E-AMM'],
  ] },
  { id: 'g', label: 'G', pairs: [
    ['6/4D-G', '6/4D-AMG'], ['8/6E-G', '8/6E-AMG'],
    ['10/8F-G', '10/8F-AMG'], ['12/10G-G', '12/10G-AMG'],
    ['14/12G-G', '14/12G-AMG'],
  ] },
];
