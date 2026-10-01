import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vola Creative — Solusi Pengadaan Merchandise & Event Kit Terpercaya",
  description:
    "Partner strategis pengadaan merchandise custom, corporate gift, seminar kit, dan festival apparel dengan visualisasi kinetik next-gen dan pengerjaan tepat waktu.",
  keywords: [
    "merchandise acara",
    "corporate gift indonesia",
    "seminar kit custom",
    "kaos sablon event",
    "lanyard custom",
    "tumbler grafir",
    "vola creative"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-[#7c3aed] selection:text-white">
        {children}
      </body>
    </html>
  );
}
