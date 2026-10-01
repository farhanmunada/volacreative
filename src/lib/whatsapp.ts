import type { QuotationFormState } from '../types/index.ts';
import { COMPANY_INFO } from './constants.ts';

export function createWhatsAppUrl(data: QuotationFormState): string {
  const categoryLabels: Record<string, string> = {
    corporate: '🏢 Korporat & Kantor',
    concert: '🎸 Konser & Festival',
    seminar: '🎓 Seminar & Konferensi',
    sports: '🏆 Olahraga & Komunitas',
  };

  const lines = [
    `*HALO VOLA CREATIVE, SAYA INGIN KONSULTASI PENGADAAN MERCHANDISE:*`,
    `--------------------------------------------------`,
    `👤 *Nama Kontak:* ${data.fullName}`,
    `🏢 *Perusahaan / Acara:* ${data.organization}`,
    `📞 *No. WhatsApp:* ${data.phone}`,
    `🎯 *Kategori Acara:* ${categoryLabels[data.eventType] || data.eventType}`,
    `📦 *Item Pilihan:* ${data.itemType || 'Paket Rekomendasi'}`,
    `🔢 *Estimasi Kuantitas:* ${data.quantity} pcs`,
    data.notes ? `📝 *Catatan Khusus:* ${data.notes}` : '',
    `--------------------------------------------------`,
    `Mohon kirimkan estimasi biaya resmi dan katalog detailnya. Terima kasih!`,
  ].filter(Boolean);

  const text = lines.join('\n');
  const encodedText = encodeURIComponent(text);

  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodedText}`;
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}
