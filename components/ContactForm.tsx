'use client';

import { useState } from 'react';

interface ContactFormProps {
  domainName: string;
  contactEmail: string;
}

export default function ContactForm({ domainName, contactEmail }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    offer: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission (you can replace this with actual email sending logic)
    try {
      // Create mailto link with pre-filled content
      const subject = encodeURIComponent(`Inquiry about ${domainName}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOffer: ${formData.offer ? '$' + formData.offer : 'Not specified'}\n\nMessage:\n${formData.message}`
      );

      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', offer: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="offer" className="block text-sm font-medium text-gray-700 mb-2">
            Your Offer (USD)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-3 text-gray-500">$</span>
            <input
              type="number"
              id="offer"
              name="offer"
              value={formData.offer}
              onChange={handleChange}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="5000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
            placeholder="I'm interested in purchasing this domain..."
          />
        </div>

        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            Thank you! Your email client should open with a pre-filled message.
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            Something went wrong. Please try again or contact us directly at {contactEmail}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
        </button>

        <p className="text-center text-sm text-gray-500">
          Or email us directly at{' '}
          <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">
            {contactEmail}
          </a>
        </p>
      </form>
    </div>
  );
}
