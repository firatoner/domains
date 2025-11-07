import { getCurrentDomain, formatPrice } from '@/lib/domain-utils';
import ContactForm from '@/components/ContactForm';

export default async function Home() {
  const domain = await getCurrentDomain();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Full viewport focus */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl w-full mx-auto text-center space-y-8">
          {/* FOR SALE Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
              Domain For Sale
            </span>
          </div>

          {/* Domain Name - Main Focus */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 tracking-tight break-all leading-tight">
            {domain.name}
          </h1>

          {/* Price */}
          {domain.price > 0 && (
            <div className="py-4">
              <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {formatPrice(domain.price, domain.currency)}
              </div>
            </div>
          )}

          {/* Quick Contact Section */}
          <div className="max-w-2xl mx-auto w-full pt-8">
            <ContactForm domainName={domain.name} contactEmail={domain.contactEmail} />
          </div>

          {/* Quick Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 text-sm text-gray-600">
            {domain.highlights.memorable && (
              <span className="flex items-center gap-1 px-4 py-2 bg-white rounded-full border border-gray-200">
                ⭐ Memorable
              </span>
            )}
            {domain.highlights.shortLength && (
              <span className="flex items-center gap-1 px-4 py-2 bg-white rounded-full border border-gray-200">
                🎯 Short
              </span>
            )}
            <span className="flex items-center gap-1 px-4 py-2 bg-white rounded-full border border-gray-200">
              🌐 {domain.highlights.extension}
            </span>
            {domain.highlights.age && (
              <span className="flex items-center gap-1 px-4 py-2 bg-white rounded-full border border-gray-200">
                📅 {domain.highlights.age}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Features - Optional, below the fold */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose This Domain?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {domain.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            <a href={`mailto:${domain.contactEmail}`} className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              {domain.contactEmail}
            </a>
          </p>
          <p className="text-gray-400 text-xs mt-3">© 2024 {domain.name}</p>
        </div>
      </footer>
    </main>
  );
}
