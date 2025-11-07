'use client';

import { useState } from 'react';

interface ContactFormProps {
  domainName: string;
  contactEmail: string;
}

export default function ContactForm({ domainName, contactEmail }: ContactFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Create mailto link with pre-filled content
      const subject = encodeURIComponent(`Interested in ${domainName}`);
      const body = encodeURIComponent(
        `From: ${formData.email}\n\n${formData.message}`
      );

      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setStatus('success');
      }, 500);
    } catch (error) {
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      {status === 'success' ? (
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">✓</div>
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Email Client Opened!</h3>
          <p className="text-emerald-700">Please send the email from your email client.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 text-emerald-600 hover:text-emerald-700 text-sm font-medium"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
              placeholder="your@email.com"
            />
            <input
              type="text"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
              placeholder="Your offer or message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {status === 'submitting' ? 'Opening email...' : 'Contact Owner'}
          </button>

          <p className="text-center text-sm text-gray-500">
            or email directly:{' '}
            <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              {contactEmail}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
