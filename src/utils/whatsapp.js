export function buildWhatsAppLink(phone, text) {
  let digits = String(phone).replace(/\D/g, '');
  if (digits.length === 10) digits = '91' + digits; // India country code
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

