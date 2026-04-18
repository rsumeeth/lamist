export type GalleryCategory = 'all' | 'interior' | 'rooms' | 'care' | 'doctors';

export type GalleryFilter = {
  id: GalleryCategory;
  label: string;
};

export type GalleryItem = {
  image: string;
  alt: string;
  category: Exclude<GalleryCategory, 'all'>;
};

export const galleryMeta = {
  title: 'Gallery | Femme Nest Hospital',
  description:
    'Explore the Femme Nest Hospital gallery featuring hospital interiors, patient rooms, maternity care spaces, and our specialist doctors.',
  canonical: 'https://www.femmenest.com/gallery',
  ogImage: '/images/fn/interior-1.jpeg',
};

export const galleryHero = {
  label: 'Our Facility',
  title: 'Gallery',
  description:
    'Take a virtual tour of our world-class boutique hospital designed to make every visit feel comfortable and special.',
  image: '/images/fn/interior-1.jpeg',
};

export const galleryFilters: GalleryFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'interior', label: 'Hospital Interior' },
  { id: 'rooms', label: 'Patient Rooms' },
  { id: 'care', label: 'Maternity & Care' },
  { id: 'doctors', label: 'Our Doctors' },
];

export const galleryItems: GalleryItem[] = [
  { category: 'interior', image: '/images/fn/interior-1.jpeg', alt: 'Hospital reception area' },
  { category: 'interior', image: '/images/fn/interior-2.jpeg', alt: 'Hospital lounge' },
  { category: 'interior', image: '/images/fn/interior-5.jpeg', alt: 'Hospital corridor' },
  { category: 'interior', image: '/images/fn/interior-6.jpeg', alt: 'Hospital lobby' },
  { category: 'interior', image: '/images/fn/interior-13.jpeg', alt: 'Hospital entrance' },
  { category: 'rooms', image: '/images/fn/interior-3.jpeg', alt: 'Patient suite' },
  { category: 'rooms', image: '/images/fn/interior-4.jpeg', alt: 'Recovery room' },
  { category: 'rooms', image: '/images/fn/interior-7.jpeg', alt: 'Birthing room' },
  { category: 'rooms', image: '/images/fn/interior-8.jpeg', alt: 'Ward room' },
  { category: 'rooms', image: '/images/fn/interior-9.jpeg', alt: 'Nursery ward' },
  { category: 'rooms', image: '/images/fn/interior-14.jpeg', alt: 'Deluxe ward' },
  { category: 'care', image: '/images/fn/interior-10.jpeg', alt: 'Maternity care facility' },
  { category: 'care', image: '/images/fn/interior-11.jpeg', alt: 'Maternity clinic area' },
  { category: 'care', image: '/images/fn/interior-9.jpeg', alt: 'Nursery room' },
  { category: 'care', image: '/images/fn/interior-7.jpeg', alt: 'Birthing suite' },
  { category: 'doctors', image: '/images/fn/dr-sowjanya-aggarwal.webp', alt: 'Dr. Sowjanya Aggarwal' },
  { category: 'doctors', image: '/images/fn/dr-anita-aggarwal.webp', alt: 'Dr. Anita Aggarwal' },
  { category: 'doctors', image: '/images/fn/dr-anita-jain.webp', alt: 'Dr. Anita Jain' },
  { category: 'doctors', image: '/images/fn/dr-apoorva-reddy.webp', alt: 'Dr. Apoorva Reddy' },
  { category: 'doctors', image: '/images/fn/dr-dipti-nabh.webp', alt: 'Dr. Dipti Nabh' },
  { category: 'doctors', image: '/images/fn/dr-pooja-prasad.webp', alt: 'Dr. Pooja Prasad' },
  { category: 'doctors', image: '/images/fn/dr-ragini-gupta.webp', alt: 'Dr. Ragini Gupta' },
  { category: 'doctors', image: '/images/fn/dr-rakhi-rawat.webp', alt: 'Dr. Rakhi Rawat' },
  { category: 'doctors', image: '/images/fn/dr-reena-mehra.webp', alt: 'Dr. Reena Mehra' },
  { category: 'doctors', image: '/images/fn/dr-rekha-sarin.webp', alt: 'Dr. Rekha Sarin' },
  { category: 'doctors', image: '/images/fn/dr-rupali-gupta.webp', alt: 'Dr. Rupali Gupta' },
  { category: 'doctors', image: '/images/fn/dr-sangeeta-goel.webp', alt: 'Dr. Sangeeta Goel' },
];
