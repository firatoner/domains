import { getCurrentDomain, formatPrice } from '@/lib/domain-utils';
import ContactForm from '@/components/ContactForm';

export default async function Home() {
  const domain = await getCurrentDomain();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Premium Domain For Sale
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            {domain.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {domain.description}
          </p>

          {domain.price > 0 && (
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-2">Price</div>
              <div className="text-5xl md:text-6xl font-bold text-blue-600">
                {formatPrice(domain.price, domain.currency)}
              </div>
            </div>
          )}

          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Make an Offer
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {domain.highlights.memorable && (
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="font-semibold text-gray-900">Memorable</div>
              </div>
            )}
            {domain.highlights.shortLength && (
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold text-gray-900">Short</div>
              </div>
            )}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🌐</div>
              <div className="font-semibold text-gray-900">{domain.highlights.extension}</div>
            </div>
            {domain.highlights.age && (
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-2">📅</div>
                <div className="font-semibold text-gray-900">{domain.highlights.age}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why This Domain?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {domain.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-gray-700 font-medium">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Badge */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-purple-100 text-purple-800 rounded-full font-semibold">
            Category: {domain.category}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Interested? Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <ContactForm domainName={domain.name} contactEmail={domain.contactEmail} />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>© 2024 {domain.name} - All rights reserved</p>
          <p className="mt-2 text-sm">
            Contact: <a href={`mailto:${domain.contactEmail}`} className="text-blue-600 hover:underline">
              {domain.contactEmail}
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
