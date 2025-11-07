# Domain Sales Website

Multi-domain sales landing page built with Next.js 14 and Tailwind CSS. This website automatically displays different content based on which domain the visitor uses to access the site.

## Features

- **Multi-Domain Support**: Show different prices and information for each domain
- **Dynamic Content**: Automatically detects the hostname and displays relevant information
- **Responsive Design**: Beautiful UI that works on all devices
- **Contact Form**: Built-in contact form with mailto integration
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Modern styling with Tailwind CSS

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure your domains in `config/domains.ts`:
```typescript
export const DOMAINS: DomainConfig = {
  'yourdomain.com': {
    name: 'yourdomain.com',
    price: 5000,
    currency: 'USD',
    description: 'Your domain description...',
    // ... other settings
  },
  // Add more domains
};
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment on Vercel

1. Push your code to GitHub

2. Import the project on Vercel

3. Add your custom domains in Vercel:
   - Go to Project Settings > Domains
   - Add each domain you want to use
   - Update DNS settings as instructed by Vercel

4. Update `config/domains.ts` with your actual domains

## Configuration

### Adding a New Domain

Edit `config/domains.ts` and add a new entry:

```typescript
'newdomain.com': {
  name: 'newdomain.com',
  price: 3000,
  currency: 'USD',
  description: 'Premium domain for sale',
  features: [
    'Feature 1',
    'Feature 2',
  ],
  category: 'Technology',
  contactEmail: 'sales@youremail.com',
  highlights: {
    memorable: true,
    shortLength: true,
    extension: '.com',
    age: '2+ years'
  }
}
```

### Contact Email

Update the `contactEmail` field in each domain configuration to receive inquiries.

## Local Testing

To test different domains locally:

1. Edit your `/etc/hosts` file (or `C:\Windows\System32\drivers\etc\hosts` on Windows):
```
127.0.0.1 domain1.local
127.0.0.1 domain2.local
```

2. Access `http://domain1.local:3000` and `http://domain2.local:3000` to see different content

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## License

ISC
