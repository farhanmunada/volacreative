import type { EventCategory, ProductItem } from '../types/index.ts';

export const COMPANY_INFO = {
  name: 'Vola Creative',
  tagline: 'Crafting Memorable Event Experiences',
  phoneDisplay: '+62 821-2345-6789',
  phoneRaw: '6282123456789',
  email: 'halo@volacreative.id',
  city: 'Jakarta Selatan, Indonesia',
  operatingHours: 'Senin - Sabtu: 08.30 - 18.00 WIB',
};

export const EVENT_CATEGORIES: { id: EventCategory; title: string; subtitle: string; icon: string }[] = [
  {
    id: 'corporate',
    title: 'Korporat & Kantor',
    subtitle: 'Onboarding kit, corporate gift, seminar eksekutif',
    icon: 'Building2',
  },
  {
    id: 'concert',
    title: 'Konser & Festival',
    subtitle: 'Lanyard VIP, wristband RFID, t-shirt tour resmi',
    icon: 'Music',
  },
  {
    id: 'seminar',
    title: 'Seminar & Konferensi',
    subtitle: 'Tote bag kanvas, buku catatan, pulpen ramah lingkungan',
    icon: 'GraduationCap',
  },
  {
    id: 'sports',
    title: 'Olahraga & Komunitas',
    subtitle: 'Jersey dry-fit, medali custom, tumbler sport',
    icon: 'Trophy',
  },
];

export const CATALOG_PRODUCTS: ProductItem[] = [
  {
    id: 'corp-executive-box',
    name: 'Executive Onboarding Box',
    category: 'corporate',
    tagline: 'Kesan pertama prestisius untuk karyawan baru & mitra VIP',
    minOrder: 30,
    leadTime: '5-7 Hari Kerja',
    basePrice: 175000,
    highlightSpecs: [
      'Hardbox magnetic custom foil emas/perak',
      'Vacuum tumbler stainless 500ml grafir laser',
      'Leather notebook A5 embossed logo',
      'Metal ballpoint pen dengan laser branding',
    ],
    badge: 'Terlaris B2B',
  },
  {
    id: 'fest-wristband-lanyard',
    name: 'Festival Pass & VIP Bundle',
    category: 'concert',
    tagline: 'Aksesoris event anti-palsu dengan durabilitas tinggi',
    minOrder: 100,
    leadTime: '3-5 Hari Kerja',
    basePrice: 28000,
    highlightSpecs: [
      'Lanyard tissue 2.5cm full color double side',
      'Kait lobster tebal & stopper slider',
      'Woven wristband festival dengan barcode/RFID',
      'ID Card PVC tebal kartu ATM tahan air',
    ],
    badge: 'Paling Dicari',
  },
  {
    id: 'apparel-cotton-tshirt',
    name: 'Event Apparel Heavyweight T-Shirt',
    category: 'concert',
    tagline: 'Kaos acara premium nyaman dipakai seharian',
    minOrder: 50,
    leadTime: '7-10 Hari Kerja',
    basePrice: 85000,
    highlightSpecs: [
      'Cotton Combed 24s/16s Reactive super soft',
      'Sablon Plastisol / DTF High-Density tajam',
      'Jahitan rantai standar distro kualitas ekspor',
      'Label leher custom woven brand acara',
    ],
    badge: 'Kualitas Premium',
  },
  {
    id: 'seminar-eco-kit',
    name: 'Eco Green Seminar Kit',
    category: 'seminar',
    tagline: 'Solusi ramah lingkungan untuk konferensi modern',
    minOrder: 50,
    leadTime: '4-6 Hari Kerja',
    basePrice: 45000,
    highlightSpecs: [
      'Tote bag kanvas blacu premium tebal 10oz',
      'Buku catatan kertas daur ulang kraft A5',
      'Pulpen jerami gandum biodegradable',
      'Pin enamel atau gantungan kunci akrilik UV',
    ],
  },
  {
    id: 'drinkware-matte-tumbler',
    name: 'Matte Powder Tumbler 600ml',
    category: 'corporate',
    tagline: 'Tahan dingin 24 jam & panas 12 jam dengan grafir presisi',
    minOrder: 50,
    leadTime: '4-7 Hari Kerja',
    basePrice: 65000,
    highlightSpecs: [
      'Double wall stainless steel food grade SUS304',
      'Finishing powder coating anti-gores',
      'Grafir laser nama individu / logo instansi',
      'BPA Free dengan kemasan silinder box elegan',
    ],
  },
  {
    id: 'sports-jersey-set',
    name: 'Activewear Sport & Fun Run Jersey',
    category: 'sports',
    tagline: 'Jersey ultra-breathable untuk turnamen & fun run maraton',
    minOrder: 40,
    leadTime: '7-10 Hari Kerja',
    basePrice: 95000,
    highlightSpecs: [
      'Bahan Milano / Drifit Benzema cepat kering',
      'Printing sublimasi full body warna hidup',
      'Pola aerodinamis pria & wanita',
      'Nomor dada / barcode peserta terintegrasi',
    ],
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Konsultasi & Briefing',
    desc: 'Ceritakan tema acara, kuantitas, estimasi anggaran, dan deadline Anda kepada tim kami.',
  },
  {
    step: '02',
    title: 'Mockup 3D & Sampel',
    desc: 'Kami buatkan preview visual realistis gratis sebelum produksi massal dimulai.',
  },
  {
    step: '03',
    title: 'Produksi Presisi',
    desc: 'Dikerjakan di workshop sendiri dengan kontrol mutu berlapis di setiap tahap sablon/grafir.',
  },
  {
    step: '04',
    title: 'Quality Check & Kirim',
    desc: 'Packing rapi berlabel per divisi/size dan pengiriman bergaransi tepat waktu ke lokasi Anda.',
  },
];
