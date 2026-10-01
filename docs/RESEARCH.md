# Dokumen Riset: Vola Creative Landing Page

## 1. Ringkasan Projek & Tujuan
Landing page Vola Creative bertujuan memfasilitasi pengadaan merchandise acara (event organizer, korporat, komunitas) dengan antarmuka next-gen yang mengintegrasikan animasi interaktif Remotion Player langsung pada lingkungan web React/Next.js.

## 2. Riset Remotion untuk Landing Page Web
- **Pustaka Utama:** `@remotion/player` dan `remotion`.
- **Mekanisme Kerja:** Remotion Player merender komponen React biasa menggunakan loop animasi frame-by-frame (`useCurrentFrame`, `interpolate`, `spring`).
- **Kelebihan untuk Landing Page:**
  - Tanpa hosting berkas video MP4/WebM berat; seluruh grafis dihitung di sisi klien atau canvas.
  - Reaktif: props dapat diubah seketika melalui state React (misal nama acara, logo, atau palet warna langsung terproyeksi ke mockup).
  - Ringan dan resolusi tajam (vektor SVG & CSS 3D transform).
- **Aksesibilitas & Performa:**
  - Wajib mendengarkan `prefers-reduced-motion`. Jika aktif, hentikan loop animasi dan tampilkan frame poster statis.
  - Lazy load `@remotion/player` dengan `next/dynamic` (ssr: false) agar tidak membebani initial bundle First Contentful Paint (FCP).

## 3. Sistem Desain (ui-ux-pro-max)
- **Pola:** *Hero-Centric Design* dengan fokus satu aksi konversi utama.
- **Gaya:** *Vibrant Block-based* (modern, energik, kontras tinggi, cocok untuk industri kreatif & event).
- **Palet Warna:**
  - Primary: `#7C3AED` (Ungu Kreatif)
  - Secondary: `#A78BFA` (Lavender lembut)
  - Accent / CTA: `#EA580C` (Oranye aksi kuat)
  - Background: `#FAF5FF` (Putih gading lembut)
  - Foreground: `#0F172A` / `#4C1D95` (Kontras teks > 4.5:1)
  - Card: `#FFFFFF` (Border `#DDD6FE`)
- **Tipografi:**
  - Header: `Playfair Display` (Elegan & manifesto)
  - Body / UI: `Inter` (Keterbacaan tinggi)

## 4. Struktur Data & Integrasi WhatsApp
- Formulir penawaran (RFQ) mengumpulkan estimasi pesanan.
- Alur konversi: Validasi klien -> kalkulasi estimasi instan -> format pesan otomatis -> direct link ke `https://wa.me/` resmi Vola Creative.
