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

export type SelectOption = {
  value: string;
  label: string;
};

export type HeroStatItem = {
  value: string;
  label: string;
};

export type HeroPillItem = {
  id: string;
  icon: string;
  label: string;
  value: string;
};

export type ReviewItem = {
  id: string;
  quote: string;
  name: string;
  city: string;
  rating: 5;
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

export const heroStats: HeroStatItem[] = [
  { value: '20+', label: 'Years of Care' },
  { value: '2,400+', label: 'Miracles Born' },
  { value: '5.0 ♥', label: 'Patient Love Score' },
  { value: '24/7', label: 'Care Support' },
];

export const heroPills: HeroPillItem[] = [
  {
    id: 'success-rate',
    icon: '🌸',
    label: 'Success Rate',
    value: '94% IVF Outcomes',
  },
  {
    id: 'wellness',
    icon: '🫶',
    label: 'Dedicated to',
    value: "Women's Wellness",
  },
  {
    id: 'care-support',
    icon: '✨',
    label: 'Experience',
    value: '24/7 Care Support',
  },
];

export const heroQuote = "A sanctuary where science meets the warmth of a mother's dream.";

export const reviews: ReviewItem[] = [
  {
    id: 'deenkumar',
    quote:
      'I had a wonderful experience and got positive results. The entire team was professional, kind, and supportive. Every step was explained clearly, and I always felt confident and cared for.',
    name: 'Deenkumar',
    city: 'Madurai',
    rating: 5,
  },
  {
    id: 'princiya',
    quote:
      'The doctors and nursing team treated us like family. The care, warmth, and attention throughout the process made a huge difference for us.',
    name: 'Princiya A.',
    city: 'Madurai',
    rating: 5,
  },
  {
    id: 'sunita',
    quote:
      'The doctors were transparent about costs and gave realistic expectations. We felt supported from consultation to delivery and welcomed our daughter safely.',
    name: 'Sunita K.',
    city: 'Hyderabad',
    rating: 5,
  },
  {
    id: 'ananya',
    quote:
      'I had PCOS and was struggling to conceive. The team first recommended ovulation induction and then IUI. The conservative approach was right for me and it worked.',
    name: 'Ananya B.',
    city: 'Mumbai',
    rating: 5,
  },
  {
    id: 'priya',
    quote:
      'After years of trying, we found hope again. The doctors were compassionate, explained every stage, and we welcomed our baby after our IVF cycle.',
    name: 'Priya M.',
    city: 'Chennai',
    rating: 5,
  },
];

export const contactDetails = {
  phone: '+91 98000 00000',
  email: 'care@lamnist.com',
  location: 'East Delhi, India',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
};

export const doctorOptions: SelectOption[] = [
  { value: '', label: 'Choose Doctor' },
  { value: 'dr-priya-sharma', label: 'Dr. Priya Sharma' },
  { value: 'dr-neha-mehra', label: 'Dr. Neha Mehra' },
  { value: 'dr-anuj-verma', label: 'Dr. Anuj Verma' },
];

export const departmentOptions: SelectOption[] = [
  { value: '', label: 'Choose Department' },
  { value: 'ivf', label: 'IVF & ART' },
  { value: 'iui', label: 'IUI & Fertility Support' },
  { value: 'fertility-testing', label: 'Fertility Testing' },
  { value: 'gynecology', label: 'Gynecology' },
  { value: 'high-risk-pregnancy', label: 'High-Risk Pregnancy' },
];

export const timeSlotOptions: SelectOption[] = [
  { value: '', label: 'Select Time' },
  { value: '09:00', label: '09:00 AM' },
  { value: '10:30', label: '10:30 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '16:00', label: '04:00 PM' },
  { value: '18:00', label: '06:00 PM' },
];

const whatsappMessage =
  'Hi LAMNIST, I want to book a fertility consultation. Source: website_hero_utm.';

export const whatsappLink = `https://wa.me/919800000000?text=${encodeURIComponent(whatsappMessage)}`;

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

