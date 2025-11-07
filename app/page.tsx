import { getCurrentDomain, formatPrice } from '@/lib/domain-utils';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getCurrentDomain();

  return {
    title: `${domain.name} - Premium Domain For Sale`,
    description: domain.description,
    openGraph: {
      title: `${domain.name} - For Sale`,
      description: domain.description,
      siteName: domain.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${domain.name} - For Sale`,
      description: domain.description,
    },
  };
}

export default async function Home() {
  const domain = await getCurrentDomain();

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - Full viewport focus */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-gray-950 via-black to-gray-950">
        <div className="max-w-4xl w-full mx-auto text-center space-y-8">
          {/* FOR SALE Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">
              Domain For Sale
            </span>
          </div>

          {/* Domain Name - Main Focus */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight break-all leading-tight drop-shadow-2xl">
            {domain.name}
          </h1>

          {/* Price */}
          {domain.price > 0 && (
            <div className="py-4">
              <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                {formatPrice(domain.price, domain.currency)}
              </div>
            </div>
          )}

          {/* Quick Contact Section */}
          <div className="max-w-2xl mx-auto w-full pt-8">
            <ContactForm domainName={domain.name} contactEmail={domain.contactEmail} />
          </div>

          {/* Quick Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 text-sm text-gray-400">
            {domain.highlights.memorable && (
              <span className="flex items-center gap-1 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-colors">
                ⭐ Memorable
              </span>
            )}
            {domain.highlights.shortLength && (
              <span className="flex items-center gap-1 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-colors">
                🎯 Short
              </span>
            )}
            <span className="flex items-center gap-1 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-colors">
              🌐 {domain.highlights.extension}
            </span>
            {domain.highlights.age && (
              <span className="flex items-center gap-1 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-colors">
                📅 {domain.highlights.age}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Features - Optional, below the fold */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black border-t border-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose This Domain?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {domain.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 hover:border-gray-700 transition-all">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            <a href={`mailto:${domain.contactEmail}`} className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              {domain.contactEmail}
            </a>
          </p>
          <p className="text-gray-600 text-xs mt-3">© 2024 {domain.name}</p>
        </div>
      </footer>
    </main>
  );
}
