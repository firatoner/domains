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
        <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-2xl p-8 text-center backdrop-blur-sm">
          <div className="text-4xl mb-4">✓</div>
          <h3 className="text-xl font-bold text-emerald-400 mb-2">Email Client Opened!</h3>
          <p className="text-emerald-300/80">Please send the email from your email client.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
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
              className="w-full px-5 py-4 bg-gray-900/50 border-2 border-gray-800 rounded-xl focus:border-blue-500 focus:bg-gray-900/70 focus:outline-none transition-all text-white placeholder-gray-500 backdrop-blur-sm"
              placeholder="your@email.com"
            />
            <input
              type="text"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-900/50 border-2 border-gray-800 rounded-xl focus:border-blue-500 focus:bg-gray-900/70 focus:outline-none transition-all text-white placeholder-gray-500 backdrop-blur-sm"
              placeholder="Your offer or message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {status === 'submitting' ? 'Opening email...' : 'Contact Owner'}
          </button>

          <p className="text-center text-sm text-gray-500">
            or email directly:{' '}
            <a href={`mailto:${contactEmail}`} className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              {contactEmail}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
