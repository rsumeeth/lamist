export type ServiceItem = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  imageAlt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const services: ServiceItem[] = [
  {
    id: 'ivf',
    icon: 'fa-dna',
    title: 'IVF Treatment',
    desc: 'Advanced In Vitro Fertilization with cutting-edge lab technology and personalized protocols for maximum success rates.',
    imageAlt: 'IVF laboratory and embryo care setup',
  },
  {
    id: 'iui',
    icon: 'fa-heart-pulse',
    title: 'IUI Treatment',
    desc: 'Intrauterine insemination as a less invasive first-line fertility treatment for eligible couples.',
    imageAlt: 'Fertility specialist consultation for IUI planning',
  },
  {
    id: 'fertility-testing',
    icon: 'fa-microscope',
    title: 'Fertility Testing',
    desc: 'Comprehensive fertility workup including hormone panels, ultrasound scans, and semen analysis.',
    imageAlt: 'Diagnostic fertility testing and sample analysis',
  },
  {
    id: 'pcos',
    icon: 'fa-circle-nodes',
    title: 'PCOS / PCOD Care',
    desc: 'Integrated hormonal and fertility-focused care for PCOS/PCOD with long-term cycle and health management.',
    imageAlt: 'Care plan discussion for PCOS and fertility health',
  },
  {
    id: 'pregnancy-care',
    icon: 'fa-baby',
    title: 'High-Risk Pregnancy Care',
    desc: 'Maternal-fetal monitoring and specialist support from conception through delivery for high-risk pregnancies.',
    imageAlt: 'High-risk pregnancy monitoring and specialist support',
  },
  {
    id: 'gynecology',
    icon: 'fa-stethoscope',
    title: 'Gynaecology',
    desc: 'Complete women’s health services including menstrual disorders, preventive care, and minimally invasive procedures.',
    imageAlt: 'General gynecology consultation and treatment care',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What makes LAMNIST different from other fertility clinics in Delhi?',
    answer:
      'LAMNIST combines personalized fertility planning with advanced IVF protocols, transparent counselling, and close clinical follow-up so every couple receives a treatment path built for their specific case.',
  },
  {
    question: 'What is the typical IVF success rate at LAMNIST?',
    answer:
      'Success rates vary by age, ovarian reserve, embryo quality, and medical history. We provide case-specific success expectations after diagnosis and focus on evidence-based protocols to maximize outcomes.',
  },
  {
    question: 'Do you support couples after failed IVF cycles elsewhere?',
    answer:
      'Yes. We routinely evaluate recurrent IVF failures, perform deeper diagnostics, and redesign protocols with targeted interventions before the next attempt.',
  },
  {
    question: 'Can I start with consultation and testing before deciding treatment?',
    answer:
      'Absolutely. We begin with consultation and fertility assessment first, then discuss options such as lifestyle correction, IUI, IVF, or advanced procedures based on your reports.',
  },
];

export const contactDetails = {
  phone: '+91 98000 00000',
  email: 'care@lamnist.com',
  location: 'East Delhi, India',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
};

export const footerColumns = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ],
  services: services.map((service) => ({
    label: service.title,
    href: `/services#${service.id}`,
  })),
  locations: [
    { label: 'IVF Clinic in East Delhi', href: '/contact' },
    { label: 'Fertility Consultation in NCR', href: '/contact' },
    { label: 'Gynecology & IVF Care Centre', href: '/contact' },
  ],
};

