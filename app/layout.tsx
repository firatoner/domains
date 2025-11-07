import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Premium Domain For Sale',
  description: 'This premium domain name is available for purchase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
