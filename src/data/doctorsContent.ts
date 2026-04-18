export type DoctorCategory = 'team' | 'visiting';

export type DoctorProfile = {
  id: number;
  slug: string;
  name: string;
  specialty: string;
  degree: string;
  image: string;
  category: DoctorCategory;
  schedule?: string;
  phone?: string;
  featuredOnHome?: boolean;
  about?: string;
  expertise?: string[];
  qualifications?: string[];
};

export const hospitalPhone = '+91 98000 00000';

export const phoneToTelHref = (phone: string) => {
  const digitsOnly = phone.replace(/\D/g, '');
  const normalized = digitsOnly.length === 10 ? `91${digitsOnly}` : digitsOnly;
  return `tel:+${normalized}`;
};

export const doctorDetailDefaults = {
  about:
    'A highly experienced specialist at Femme Nest Hospital, dedicated to compassionate and evidence-based women\'s healthcare. With a patient-first philosophy, every consultation is personalized for safety, comfort, and long-term wellness.',
  expertise: [
    'High-risk pregnancy management',
    'Antenatal and postnatal care',
    'Menstrual and hormonal disorder management',
    'PCOS and endometriosis care',
    'Preventive women\'s health screening',
    'Gynecological procedure planning',
  ],
  qualifications: [
    'MBBS from an accredited medical institution',
    'Postgraduate training in Obstetrics and Gynaecology',
    'Clinical experience in women and maternal care',
    'Evidence-based treatment and patient counseling',
    'Ongoing professional development in gynecology and obstetrics',
  ],
};

export const doctors: DoctorProfile[] = [
  {
    id: 0,
    slug: 'dr-sowjanya-aggarwal',
    name: 'Dr. Sowjanya Aggarwal',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, MS (OBG), Fellowship in Reproductive Medicine',
    image: '/images/fn/dr-sowjanya-aggarwal.webp',
    category: 'team',
    schedule: 'Mon - Sat | By Appointment',
    phone: hospitalPhone,
    featuredOnHome: true,
  },
  {
    id: 3,
    slug: 'dr-apoorva-reddy',
    name: 'Dr. Apoorva Reddy',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, DNB (OBG), MRCOG',
    image: '/images/fn/dr-apoorva-reddy.webp',
    category: 'team',
    schedule: 'Tue - Sat | 10:00 AM - 12:00 PM',
    phone: hospitalPhone,
    featuredOnHome: true,
  },
  {
    id: 7,
    slug: 'dr-rakhi-rawat',
    name: 'Dr. Rakhi Rawat',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, MS (OBG), FICOG',
    image: '/images/fn/dr-rakhi-rawat.webp',
    category: 'team',
    schedule: 'Mon - Sat | 11:00 AM - 1:00 PM',
    phone: hospitalPhone,
    featuredOnHome: true,
  },
  {
    id: 10,
    slug: 'dr-rupali-gupta',
    name: 'Dr. Rupali Gupta',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, MD (OBG), Fellowship in IVF',
    image: '/images/fn/dr-rupali-gupta.webp',
    category: 'team',
    schedule: 'Mon - Sat | 3:00 PM - 5:00 PM',
    phone: hospitalPhone,
  },
  {
    id: 11,
    slug: 'dr-sangeeta-goel',
    name: 'Dr. Sangeeta Goel',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, MS (OBG), DGO',
    image: '/images/fn/dr-sangeeta-goel.webp',
    category: 'team',
    schedule: 'Tue - Sat | 9:00 AM - 11:00 AM',
    phone: '9810233889',
  },
  {
    id: 6,
    slug: 'dr-ragini-gupta',
    name: 'Dr. Ragini Gupta',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, DNB (OBG), Diploma in Laparoscopy',
    image: '/images/fn/dr-ragini-gupta.webp',
    category: 'team',
    schedule: 'Tue / Thu / Sat | 11:00 AM - 1:00 PM',
    phone: '9650246765',
  },
  {
    id: 5,
    slug: 'dr-pooja-prasad',
    name: 'Dr. Pooja Prasad',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, MS (OBG)',
    image: '/images/fn/dr-pooja-prasad.webp',
    category: 'team',
    schedule: 'Mon & Thu | 9:00 AM - 11:00 AM',
    phone: '9546885088',
  },
  {
    id: 1,
    slug: 'dr-anita-aggarwal',
    name: 'Dr. Anita Aggarwal',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, MD (OBG), FICOG, FMAS',
    image: '/images/fn/dr-anita-aggarwal.webp',
    category: 'visiting',
    phone: '98112 28325',
    featuredOnHome: true,
  },
  {
    id: 2,
    slug: 'dr-anita-jain',
    name: 'Dr. Anita Jain',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, MS (OBG), Fellowship in Fetal Medicine',
    image: '/images/fn/dr-anita-jain.webp',
    category: 'visiting',
    phone: '9810262229',
  },
  {
    id: 4,
    slug: 'dr-dipti-nabh',
    name: 'Dr. Dipti Nabh',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, DNB (OBG), MNAMS',
    image: '/images/fn/dr-dipti-nabh.webp',
    category: 'visiting',
    phone: '9810212166',
  },
  {
    id: 8,
    slug: 'dr-reena-mehra',
    name: 'Dr. Reena Mehra',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, MD (OBG), DGO',
    image: '/images/fn/dr-reena-mehra.webp',
    category: 'visiting',
    phone: '9810721288',
  },
  {
    id: 9,
    slug: 'dr-rekha-sarin',
    name: 'Dr. Rekha Sarin',
    specialty: 'Obstetrician & Gynaecologist',
    degree: 'MBBS, MS (OBG), Diploma in Endoscopy',
    image: '/images/fn/dr-rekha-sarin.webp',
    category: 'visiting',
    phone: '98180 88114',
  },
];

export const teamConsultants = doctors.filter((doctor) => doctor.category === 'team');
export const visitingConsultants = doctors.filter((doctor) => doctor.category === 'visiting');
export const homeFeaturedDoctors = doctors.filter((doctor) => doctor.featuredOnHome);
export const allDoctorSlugs = doctors.map((doctor) => doctor.slug);
export const getDoctorBySlug = (slug: string) => doctors.find((doctor) => doctor.slug === slug);
