'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const CONTACT_EMAIL = 'layo@lomediahouse.com';

const inputClass =
  'w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all';

/**
 * Contact form. There is no email backend yet, so submitting opens the
 * visitor's email app with the message pre-filled (instead of pretending the
 * message was sent). Swap `handleSubmit` for an API call once one exists.
 */
export default function ContactForm() {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${data.get('subject')}: ${data.get('name')}`;
    const body = [
      String(data.get('message') || ''),
      '',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      data.get('phone') ? `Phone: ${data.get('phone')}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required className={inputClass} placeholder="Full Name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required className={inputClass} placeholder="you@example.com" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="Your phone number" />
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-medium text-gray-700 mb-1">Subject</label>
        <select id="contact-subject" name="subject" className={inputClass}>
          <option>General Inquiry</option>
          <option>Project Collaboration</option>
          <option>Media Partnership</option>
          <option>Careers</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-medium text-gray-700 mb-1">Message</label>
        <textarea id="contact-message" name="message" rows={4} required className={inputClass} placeholder="Tell us about your project or idea..." />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 bg-gray-900 text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
      >
        Send Message
        <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </button>

      {opened && (
        <p role="status" className="flex items-start gap-2 text-xs text-gray-600">
          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" aria-hidden="true" />
          Your email app should now be open with your message ready to send. If it didn&apos;t open, email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-red-600 underline">{CONTACT_EMAIL}</a>.
        </p>
      )}
    </form>
  );
}
