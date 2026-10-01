import assert from 'node:assert';
import { createWhatsAppUrl, formatRupiah } from '../src/lib/whatsapp.ts';
import type { QuotationFormState } from '../src/types/index.ts';

console.log('Testing WhatsApp URL Generator...');

const sampleData: QuotationFormState = {
  fullName: 'Budi Santoso',
  organization: 'Tech Fest 2026',
  phone: '081234567890',
  eventType: 'concert',
  quantity: 250,
  itemType: 'Festival Pass & VIP Bundle',
  notes: 'Butuh sebelum 15 November',
};

const url = createWhatsAppUrl(sampleData);
assert(url.startsWith('https://wa.me/6282123456789?text='), 'URL base must match official phone');
assert(url.includes(encodeURIComponent('Budi Santoso')), 'URL must encode full name');
assert(url.includes(encodeURIComponent('Tech Fest 2026')), 'URL must encode organization');
assert(url.includes(encodeURIComponent('250 pcs')), 'URL must encode quantity');

console.log('Testing Rupiah Formatter...');
const formatted = formatRupiah(85000);
assert(formatted.includes('85.000'), 'Rupiah formatter must format thousands correctly');

console.log('ALL ASSERTIONS PASSED!');
