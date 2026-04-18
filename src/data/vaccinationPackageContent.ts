export type VaccinationScheduleRow = {
  month: string;
  vaccines: string;
};

export type VaccinationPricing = {
  packagePrice: string;
  ourPrice: string;
};

export type VaccinationHighlight = {
  title: string;
  description: string;
};

export const vaccinationPackageMeta = {
  title: 'Vaccination Package | Femme Nest Hospital',
  description:
    'Explore Femme Nest Hospital\'s Vaccination Package with complete baby immunization schedule, package pricing, and appointment support.',
  canonical: 'https://www.femmenest.com/special-packages/vaccination',
  ogImage: '/images/fn/vaccination.jpg',
};

export const vaccinationPackageHero = {
  label: 'Special Package',
  title: 'Vaccination Package',
  subtitle: 'A Healthy Beginning for Your Little One.',
  image: '/images/fn/vaccination.jpg',
};

export const vaccinationPackagePricing: VaccinationPricing = {
  packagePrice: '46000',
  ourPrice: '34000',
};

export const vaccinationScheduleRows: VaccinationScheduleRow[] = [
  { month: '1½', vaccines: 'DTPW/DTaP, HiB, Hep B, IPV, Pneumococcal' },
  { month: '2½', vaccines: 'DTPW/DTaP, HiB, Hep B (+/-), IPV, Pneumococcal, Rotaviral' },
  { month: '3½', vaccines: 'DTPW/DTaP, HiB, Hep B (+/-), IPV, Pneumococcal, Rotaviral' },
  { month: '6', vaccines: 'Influenza, Hep B (+/-), IPV (+/-), Discuss Dental Care' },
  { month: '7', vaccines: 'Influenza, Typhoid Conjugate, Vaccine1' },
  { month: '9', vaccines: 'MMR, Meningococcal, Discuss Oral Hygiene' },
  { month: '12', vaccines: 'Hepatitis A Vaccine -1st dose, JE (endemic areas), PCV Booster' },
];

export const vaccinationPackageNote =
  'This package includes all the mandatory vaccines, providing essential protection right from the start.';

export const vaccinationPackageContactNumbers = ['9218072465', '9218072466'];

export const vaccinationIntro =
  'Our vaccination package is designed to support your baby\'s immunity milestones from the very beginning. The schedule blends mandatory immunizations with preventive guidance so families stay informed at every step.';

export const vaccinationHighlights: VaccinationHighlight[] = [
  {
    title: 'Structured Milestone Tracking',
    description: 'Month-wise vaccine planning helps parents stay on schedule with confidence.',
  },
  {
    title: 'Mandatory Coverage Focus',
    description: 'Includes core vaccines needed for essential early childhood protection.',
  },
  {
    title: 'Doctor-Guided Discussions',
    description: 'Consultation touchpoints include oral hygiene and dental-care guidance.',
  },
];

export const vaccinationDetailSection = {
  title: 'Comprehensive Protection Plan',
  paragraphs: [
    'From the 1½-month series through 12-month boosters, the package is organized for practical follow-through and continuity of care.',
    'Our pediatric support team ensures each visit is clear, calm, and parent-friendly, with reminders and guidance tailored to your child\'s stage.',
  ],
  image: '/images/fn/vaccination_detail_small.png',
  imageAlt: 'Baby vaccination care at Femme Nest Hospital',
  imageCaption: 'Safe, timely immunization with compassionate pediatric support.',
};

export const vaccinationChecklist = [
  'Age-based vaccination schedule from 1½ months to 12 months',
  'Coverage of core mandatory immunizations',
  'Consultation support for oral hygiene and preventive care',
  'Clear appointment flow and parent guidance at every milestone',
];
