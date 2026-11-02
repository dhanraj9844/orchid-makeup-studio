import { useState } from 'react';
import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { FiArrowRight, FiCheckCircle, FiSend } from 'react-icons/fi';
import { db } from '../firebase/firebaseConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

// ====== PASTE YOUR EMAILJS VALUES HERE ======
const EMAILJS_SERVICE_ID = 'service_id3k3fz'; // example: service_abc123
const EMAILJS_TEMPLATE_ID = 'template_pqahrzf'; // example: template_xyz789
const EMAILJS_PUBLIC_KEY = 'BjPOzMn06clHioF2P';
// ============================================

const SALON_WHATSAPP = '918007317574';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: 'Bridal Makeup',
  eventDate: '',
  message: '',
};

const inputClass =
  'mt-2 w-full rounded-sm border border-[#E5D8C7] bg-white/70 px-4 py-3.5 text-sm text-[#242120] outline-none transition placeholder:text-[#9A8E82] focus:border-[#C5A46D] focus:ring-2 focus:ring-[#C5A46D]/20';

const labelClass =
  'block text-sm font-medium tracking-wide text-[#54202D]';

export default function ClientEnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccess('');
    setError('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSuccess('');
    setError('');

    const name = form.name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !phone || !form.service) {
      setError('Please complete all required fields.');
      return;
    }

    if (!/^[0-9+\s()-]{7,20}$/.test(phone)) {
      setError('Please enter a valid mobile number.');
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, 'enquiries'), {
        name,
        phone,
        email,
        service: form.service,
        eventDate: form.eventDate,
        message,
        status: 'new',
        createdAt: serverTimestamp(),
      });

      // Notify admin by email. If this fails, the enquiry is still saved.
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            name,
            phone,
            email: email || '-',
            service: form.service,
            eventDate: form.eventDate || '-',
            message: message || '-',
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      } catch (mailErr) {
        console.error('Admin email failed:', mailErr);
      }

      setForm({ ...initialForm });
      setSuccess(
        'Thank you for choosing Orchid. Your enquiry has been received, and our team will be in touch.'
      );
    } catch (err) {
      console.error('Enquiry submission failed:', err);
      setError(
        'We could not submit your enquiry right now. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl overflow-hidden border border-[#DCC9AA] bg-[#FFFCF7] shadow-[0_24px_70px_rgba(84,32,45,0.08)]">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        {/* Editorial introduction */}
        <div className="relative flex flex-col justify-center overflow-hidden bg-[#54202D] px-7 py-10 text-[#FAF7F2] sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#C5A46D]/30"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#C5A46D]/20"
          />

          <p className="relative mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#DCC18E]">
            Your beauty, our artistry
          </p>

          <h2 className="relative font-display text-4xl font-normal leading-tight sm:text-5xl">
            Let's create
            <span className="mt-1 block italic text-[#DCC18E]">
              your moment.
            </span>
          </h2>

          <div className="my-7 h-px w-16 bg-[#C5A46D]" />

          <p className="relative max-w-sm text-sm leading-7 text-[#F1E5DF]/90">
            From your dream bridal look to a beauty course or a special
            occasion, tell us what you have in mind. We would love to be part
            of your journey.
          </p>

          <div className="relative mt-10 space-y-5 text-sm text-[#F1E5DF]/90">
            <div className="flex items-start gap-3">
              <FiCheckCircle className="mt-0.5 shrink-0 text-[#DCC18E]" size={18} />
              <span>Personalised beauty consultations</span>
            </div>
            <div className="flex items-start gap-3">
              <FiCheckCircle className="mt-0.5 shrink-0 text-[#DCC18E]" size={18} />
              <span>Makeup, salon and academy enquiries</span>
            </div>
            <div className="flex items-start gap-3">
              <FiCheckCircle className="mt-0.5 shrink-0 text-[#DCC18E]" size={18} />
              <span>A thoughtful experience, tailored to you</span>
            </div>
          </div>

          <p className="relative mt-12 font-display text-lg italic text-[#DCC18E]">
            The Orchid experience
          </p>
        </div>

        {/* Enquiry form */}
        <div className="px-5 py-9 sm:px-9 sm:py-12 lg:px-12 lg:py-14">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#A17D45]">
              We would love to hear from you
            </p>

            <h3 className="font-display text-3xl font-normal text-[#54202D] sm:text-4xl">
              Book an appointment
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#766A60]">
              Share a few details below and our team will get back to you.
              Fields marked * are required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                Full name *
                <input
                  className={inputClass}
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  autoComplete="name"
                  required
                />
              </label>

              <label className={labelClass}>
                Mobile number *
                <input
                  className={inputClass}
                  name="phone"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={20}
                  autoComplete="tel"
                  required
                />
              </label>
            </div>

            <label className={labelClass}>
              Email address
              <input
                className={inputClass}
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                maxLength={254}
                autoComplete="email"
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                Service required *
                <select
                  className={inputClass}
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="Bridal Makeup">Bridal Makeup</option>
                  <option value="Party Makeup">Party Makeup</option>
                  <option value="Salon Services">Salon Services</option>
                  <option value="Academy Course">Academy Course</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className={labelClass}>
                Preferred date
                <input
                  className={inputClass}
                  name="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label className={labelClass}>
              Tell us more
              <textarea
                className={`${inputClass} min-h-28 resize-y`}
                name="message"
                placeholder="Your event, preferred look, course or any questions..."
                value={form.message}
                onChange={handleChange}
                maxLength={2000}
                rows={4}
              />
            </label>

            {success && (
              <div
                role="status"
                className="flex items-start gap-3 border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
              >
                <FiCheckCircle className="mt-1 shrink-0" size={18} />
                <span>{success}</span>
              </div>
            )}

            {success && (
                  <a
                    href={buildWhatsAppLink(
                      SALON_WHATSAPP,
                      'Hello Orchid, I just submitted an enquiry on your website and would like to confirm my appointment.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#1EBE5A]"
                  >
                    <FaWhatsapp size={22} />
                    Also message us on WhatsApp
                  </a>
                )}

            {error && (
              <p
                role="alert"
                className="border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 bg-[#54202D] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#6B2B3B] focus:outline-none focus:ring-2 focus:ring-[#C5A46D] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-64"
            >
              <FiSend size={16} />
              {loading ? 'Submitting enquiry...' : 'Send my enquiry'}
              {!loading && (
                <FiArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </button>

            <p className="text-xs leading-5 text-[#8B7D71]">
              Your details will be used to respond to your enquiry.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}