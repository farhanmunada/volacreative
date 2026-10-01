# Product Requirements Document (PRD): Vola Creative Landing Page

## 1. Problem Statement
Penyelenggara acara (event organizer, korporat, komunitas kampus/publik) sering kesulitan memvisualisasikan paket merchandise custom secara cepat dan transparan. Proses pengadaan tradisional lambat, visual statis/kaku, dan estimasi biaya tidak jelas di awal. Vola Creative membutuhkan landing page interaktif tingkat lanjut (next-gen motion) berbahasa Indonesia untuk memamerkan portofolio merchandise dan mempercepat alur penawaran (RFQ) ke tim penjualan.

## 2. Target Goals & Non-Goals
- **Goals (In-Scope):**
  1. Landing page interaktif berbahasa Indonesia dengan performa tinggi berbasis Next.js dan Tailwind CSS.
  2. Hero Section interaktif kinetik menggunakan Remotion Player (`@remotion/player`) yang mendemonstrasikan variasi merchandise dalam transisi 60fps.
  3. Interactive Event Merch Customizer: Pengunjung dapat memilih kategori event (Korporat, Konser Musik, Seminar/Workshop) dan melihat paket merchandise berubah secara real-time.
  4. Katalog Paket Bundling & Produk Unggulan (Apparel/Kaos/Hoodie, Tumbler/Drinkware, Seminar Kit, Lanyard & ID Card, Wristband).
  5. Kalkulator Estimasi & Generator Penawaran (RFQ Form) yang langsung memvalidasi input dan membuka obrolan WhatsApp bisnis dengan template pesan otomatis terstruktur.
  6. Skor performa Web Vitals: LCP < 2.5s, CLS < 0.1, FID/INP < 100ms. Aksesibilitas WCAG 2.1 AA.
- **Non-Goals (Out-of-Scope):**
  1. Payment gateway checkout langsung (fokus pada skema penawaran B2B kustom).
  2. Sistem autentikasi pengguna atau dashboard login klien.
  3. Sistem pelacakan ekspedisi logistik secara real-time.

## 3. User Stories & Kriteria Penerimaan (Format GIVEN/WHEN/THEN)
- **Story 1: Demonstrasi Visual Merchandise Kinetik**
  - Sebagai pengunjung situs, saya ingin melihat animasi mockup merchandise yang dinamis di bagian atas halaman agar saya langsung memahami kualitas visual dan kapabilitas Vola Creative.
  - **Kriteria Penerimaan 1.1:**
    - GIVEN: Pengunjung mengakses landing page pada perangkat desktop atau mobile.
    - WHEN: Halaman selesai dimuat di viewport hero.
    - THEN: Remotion Player memutar animasi mockup produk secara mulus tanpa layout shift (CLS < 0.1) dan menyertakan kontrol jeda/putar otomatis yang menghormati preferensi `prefers-reduced-motion`.
- **Story 2: Pemilihan Kategori Acara**
  - Sebagai penyelenggara acara, saya ingin memfilter tampilan paket merchandise berdasarkan jenis acara saya (Korporat, Konser, Seminar) agar saya mendapatkan rekomendasi yang relevan.
  - **Kriteria Penerimaan 2.1:**
    - GIVEN: Pengunjung berada di bagian customizer merchandise.
    - WHEN: Pengunjung memilih tab kategori "Konser Musik".
    - THEN: State komponen memperbarui visual preview Remotion ke aset bertema festival (wristband, kaos sablon, lanyard) dalam waktu kurang dari 150ms.
- **Story 3: Permintaan Penawaran Cepat via WhatsApp**
  - Sebagai klien potensial, saya ingin menghitung perkiraan biaya dan langsung mengirimkan spesifikasi acara saya ke tim Vola Creative melalui WhatsApp tanpa harus membuat akun.
  - **Kriteria Penerimaan 3.1:**
    - GIVEN: Pengunjung mengisi formulir penawaran (Nama, Nama Acara/Organisasi, Nomor WhatsApp, Kategori Acara, Estimasi Kuantitas).
    - WHEN: Tombol "Dapatkan Estimasi & Chat WhatsApp" diklik.
    - THEN: Sistem memvalidasi data tanpa refresh halaman. Jika valid, membuka tab baru ke WhatsApp API dengan format pesan siap kirim; jika tidak valid, menampilkan pesan kesalahan inline yang jelas.

## 4. Batasan Teknis & Keamanan (Technical & Security Constraints)
- **Performa:** Remotion Player diimpor secara dinamis (`next/dynamic` dengan `ssr: false`) agar tidak menghambat First Contentful Paint.
- **Aksesibilitas:** Rasio kontras teks minimum 4.5:1 untuk teks normal dan 3:1 untuk teks besar. Dukungan navigasi keyboard penuh dengan visible focus ring.
- **Keamanan:** Sanitasi ketat terhadap input formulir untuk mencegah serangan Cross-Site Scripting (XSS) dan pemformatan URL encoding yang aman untuk URL WhatsApp.

## 5. Definition of Done (DoD)
- Semua komponen landing page berbahasa Indonesia dengan tata bahasa yang profesional dan persuasif.
- Seluruh kriteria penerimaan terverifikasi dan lulus uji fungsional.
- Zero error pada TypeScript compiler (`npx tsc --noEmit`).
- Zero linting warning/error (`npm run lint`).
- Build produksi Next.js berhasil (`npm run build`).

## 6. Spesifikasi Antarmuka Frontend
- **Halaman Utama (`/`):**
  - **Header / Navigation:** Logo Vola Creative, navigasi cepat (#fitur, #katalog, #alur, #kalkulator), tombol CTA "Konsultasi Gratis".
  - **Hero Section:** Headline kuat, sub-headline, tombol CTA ganda, dan wadah interaktif Remotion Player.
  - **Event Category Showcase:** Tab pilihan (Korporat, Festival Musik, Edukasi/Seminar, Olahraga/Komunitas).
  - **Katalog Bundling:** Kartu produk dengan detail spesifikasi bahan, minimum order, dan estimasi waktu pengerjaan.
  - **Alur Kerja (4 Langkah):** Konsultasi Desain -> Persetujuan Sampel -> Produksi Massal -> Distribusi Tepat Waktu.
  - **Kalkulator & Form RFQ:** Input interaktif kuantitas, slider estimasi, dan trigger WhatsApp.
  - **Footer:** Legalitas, jam operasional, kontak, dan tautan sosial media.

## 7. Spesifikasi Kontrak Data (Formulir RFQ)
- **Tipe Data Input:**
  ```typescript
  interface QuotationRequest {
    fullName: string;
    organization: string;
    phone: string;
    eventType: 'corporate' | 'concert' | 'seminar' | 'sports';
    quantity: number;
    budgetRange?: string;
    notes?: string;
  }
  ```
- **Generator Tautan WhatsApp:**
  - Endpoint target: `https://wa.me/{nomor_resmi}?text={encoded_message}`
  - Format pesan:
    ```text
    Halo Vola Creative! Saya ingin konsultasi pengadaan merchandise acara:
    - Nama: [fullName]
    - Acara/Organisasi: [organization]
    - Jenis Acara: [eventType]
    - Estimasi Kuantitas: [quantity] pcs
    - Catatan Khusus: [notes]
    Mohon info ketersediaan dan penawaran resminya. Terima kasih!
    ```
