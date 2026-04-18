import { homeFeaturedDoctors } from './doctorsContent';

export type HomeStat = {
  value: string;
  label: string;
};

export type HomeService = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type HomeDoctor = {
  slug: string;
  name: string;
  specialty: string;
  schedule: string;
  image: string;
};

export type HomeStory = {
  quote: string;
  name: string;
  detail: string;
};

export type HomeFaq = {
  question: string;
  answer: string;
};

export const homeV2Meta = {
  title: 'Femme Nest Hospital | Best Maternity Centre & Pregnancy Care in East Delhi',
  description:
    'Discover trusted maternity and pregnancy care at Femme Nest Hospital in East Delhi. Consult experienced gynecologists, fertility specialists, and maternity experts.',
  keywords:
    'Femme Nest Hospital, best maternity centre East Delhi, pregnancy care East Delhi, maternity hospital East Delhi, women health East Delhi, gynecology clinic East Delhi',
  canonical: 'https://www.femmenest.com/',
  ogImage: '/images/fn/ivf_2.png',
};

export const homeV2Stats: HomeStat[] = [
  { value: '20+', label: 'Years of Women Care' },
  { value: '15,000+', label: 'Families Supported' },
  { value: '5.0', label: 'Average Patient Rating' },
  { value: '24/7', label: 'Maternity Support' },
];

export const homeV2Services: HomeService[] = [
  {
    title: 'Maternity Care',
    description: 'Complete antenatal, delivery, and postnatal care with patient-first obstetric support.',
    image: '/images/fn/maternity.webp',
    alt: 'Mother and newborn under maternity care',
  },
  {
    title: 'Fertility & IVF Care',
    description: 'Personalized fertility evaluations and advanced IVF pathways with transparent guidance.',
    image: '/images/fn/ivf.webp',
    alt: 'Fertility specialist consultation for IVF',
  },
  {
    title: 'Gynecology',
    description: 'Preventive and clinical gynecology services for adolescents, women, and maternal health stages.',
    image: '/images/fn/gynaecology.webp',
    alt: 'Gynecology consultation room at Femme Nest',
  },
  {
    title: 'Neonatal & NICU Support',
    description: 'Specialized neonatal monitoring and NICU support for high-risk newborn care needs.',
    image: '/images/fn/ped_2.jpeg',
    alt: 'Neonatal intensive care support at hospital',
  },
];

export const homeV2Doctors: HomeDoctor[] = [
  ...homeFeaturedDoctors.map((doctor) => ({
    slug: doctor.slug,
    name: doctor.name,
    specialty: doctor.specialty.replace('&', 'and'),
    schedule: doctor.schedule ?? 'By Appointment',
    image: doctor.image,
  })),
];

export const homeV2Stories: HomeStory[] = [
  {
    quote:
      'The doctors and nursing team explained every stage clearly and made our pregnancy journey calm and confident.',
    name: 'Riya M.',
    detail: 'Maternity Care, East Delhi',
  },
  {
    quote:
      'During a high-risk phase, the team stayed available and responsive. We felt medically safe and emotionally supported.',
    name: 'Shruti A.',
    detail: 'High-Risk Pregnancy',
  },
  {
    quote:
      'From first consultation to delivery, the care felt personal, transparent, and clinically strong.',
    name: 'Neha B.',
    detail: 'First-Time Mother',
  },
];

export const homeV2Faqs: HomeFaq[] = [
  {
    question: 'Why choose Femme Nest Hospital for maternity care in East Delhi?',
    answer:
      'Femme Nest Hospital offers obstetrics, gynecology, fertility, and newborn support under one care team with clear communication and patient-focused plans.',
  },
  {
    question: 'Do you provide high-risk pregnancy management?',
    answer:
      'Yes. Our specialists support high-risk pregnancies with close monitoring, maternal-fetal assessments, and coordinated delivery planning.',
  },
  {
    question: 'Can I book consultation online for pregnancy or gynecology care?',
    answer:
      'Yes. You can book appointments through our website contact form or call directly for faster slot confirmation.',
  },
  {
    question: 'Do you support fertility consultation and IVF planning?',
    answer:
      'Yes. We provide fertility assessment, counseling, and IVF planning pathways based on your medical profile and goals.',
  },
];

export const homeV2FaqSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeV2Faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
