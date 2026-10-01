# Dokumen Arsitektur: Vola Creative Landing Page

## 1. Ringkasan Arsitektur
Projek landing page Vola Creative dibangun menggunakan arsitektur monolitik modern berbasis **Next.js (App Router)** dan **Tailwind CSS**, dengan integrasi **Remotion Player** sebagai mesin visual gerak (motion graphics engine) interaktif langsung di sisi klien.

## 2. Pilihan Teknologi (Tech Stack)
- **Framework:** Next.js (App Router)
- **Bahasa:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (didukung CSS variables untuk token desain)
- **Motion & Video Engine:** Remotion (`remotion` & `@remotion/player`)
- **Icon Library:** Lucide Icons (`lucide-react`)
- **Validasi Data:** Zod / Native TS validation

## 3. Struktur Berkas (Project Structure)
```
rumahkita/
├── docs/
│   ├── RESEARCH.md
│   ├── PRD.md
│   └── ARCHITECTURE.md
├── public/
│   └── assets/           # Favicon, logo SVG, gambar aset
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout (Inter + Playfair Display font setup)
│   │   ├── page.tsx      # Landing page utama
│   │   └── globals.css   # Token warna dan reset CSS
│   ├── components/
│   │   ├── Navbar.tsx             # Header navigasi & sticky CTA
│   │   ├── HeroSection.tsx        # Section hero utama
│   │   ├── RemotionPlayerCard.tsx # Wrapper Dynamic Import untuk Remotion Player
│   │   ├── CategoryFilter.tsx     # Selector kategori acara
│   │   ├── CatalogSection.tsx     # Kartu paket bundling merchandise
│   │   ├── WorkflowSection.tsx    # 4 langkah alur kerja Vola
│   │   ├── QuoteCalculator.tsx    # Kalkulator biaya & form penawaran WhatsApp
│   │   └── Footer.tsx             # Informasi kontak dan legalitas
│   ├── remotion/
│   │   ├── Root.tsx               # Remotion Composition root
│   │   ├── MerchComposition.tsx   # Komposisi utama animasi merchandise (60fps)
│   │   └── mockups/
│   │       ├── TShirtMockup.tsx   # Mockup vektor kaos kinetik
│   │       ├── LanyardMockup.tsx  # Mockup lanyard & ID card festival/seminar
│   │       ├── TumblerMockup.tsx  # Mockup tumbler grafir korporat
│   │       └── ToteBagMockup.tsx  # Mockup canvas tote bag
│   ├── lib/
│   │   ├── constants.ts           # Data paket, kategori, dan kontak resmi
│   │   └── whatsapp.ts            # Logika encoding dan template pesan WA
│   └── types/
│       └── index.ts               # Definisi tipe TypeScript
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 4. Desain Komponen & Alur Data
1. **Dynamic Import Remotion:**
   Karena `@remotion/player` membutuhkan API browser (DOM/Canvas) dan perhitungan frame dinamis, komponen diimpor menggunakan `next/dynamic` dengan opsi `{ ssr: false }` dan fallback skeleton loading yang mulus.
2. **State Reaktif:**
   State kategori acara yang aktif (`corporate`, `concert`, `seminar`, `sports`) berada di parent atau store lokal ringan, kemudian diteruskan sebagai props `inputProps` ke Remotion Player. Remotion memperbarui komposisi seketika dengan animasi transisi pegas (`spring`).
3. **Generator WhatsApp Terstruktur:**
   Formulir RFQ menghitung subtotal perkiraan berdasarkan kuantitas, menghasilkan URL WhatsApp resmi berformat rapi, dan memicu navigasi aman ke WhatsApp Web/App.

## 5. Token Desain (CSS Variables di globals.css)
- `--color-primary`: `#7C3AED`
- `--color-secondary`: `#A78BFA`
- `--color-accent`: `#EA580C`
- `--color-background`: `#FAF5FF`
- `--color-foreground`: `#0F172A`
- `--color-card`: `#FFFFFF`
- `--color-border`: `#DDD6FE`

## 6. Perintah Verifikasi
- Build: `npm run build`
- Typecheck: `npx tsc --noEmit`
- Lint: `npm run lint`
- Dev server: `npm run dev`
