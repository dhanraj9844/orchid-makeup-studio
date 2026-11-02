import { FaWhatsapp } from 'react-icons/fa';
import { buildWhatsAppLink } from '../utils/whatsapp';

const SALON_WHATSAPP = '918007317574';

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(
        SALON_WHATSAPP,
        'Hello Orchid, I would like to know more about your services.'
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#1EBE5A] sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}