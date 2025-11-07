import { DomainConfig } from '@/types/domain';

export const DOMAINS: DomainConfig = {
  // Örnek domain 1
  'example1.com': {
    name: 'example1.com',
    price: 5000,
    currency: 'USD',
    description: 'Premium domain name for your business. Perfect for tech startups, SaaS products, or any innovative business venture.',
    features: [
      'Short and memorable',
      'Easy to spell',
      'Great for branding',
      'SEO friendly',
      'International appeal'
    ],
    category: 'Technology',
    contactEmail: 'sales@youremail.com',
    highlights: {
      memorable: true,
      shortLength: true,
      extension: '.com',
      age: '5+ years'
    }
  },

  // Örnek domain 2
  'example2.com': {
    name: 'example2.com',
    price: 3500,
    currency: 'USD',
    description: 'Excellent domain for e-commerce, retail, or service-based businesses. Stand out with this premium domain.',
    features: [
      'Professional sound',
      'Industry versatile',
      'Trust-building name',
      'Global reach potential',
      'Brandable'
    ],
    category: 'E-commerce',
    contactEmail: 'sales@youremail.com',
    highlights: {
      memorable: true,
      shortLength: true,
      extension: '.com'
    }
  },

  // Varsayılan domain (eğer hostname eşleşmezse)
  'default': {
    name: 'Premium Domain For Sale',
    price: 0,
    currency: 'USD',
    description: 'This premium domain is available for purchase. Contact us for pricing and details.',
    features: [
      'Premium domain name',
      'Professional and memorable',
      'Great investment opportunity',
      'Perfect for your business'
    ],
    category: 'General',
    contactEmail: 'sales@youremail.com',
    highlights: {
      memorable: true,
      shortLength: true,
      extension: '.com'
    }
  }
};
