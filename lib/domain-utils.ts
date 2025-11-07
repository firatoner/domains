import { headers } from 'next/headers';
import { DOMAINS } from '@/config/domains';
import { DomainInfo } from '@/types/domain';

export async function getCurrentDomain(): Promise<DomainInfo> {
  const headersList = await headers();
  const hostname = headersList.get('host') || '';

  // Remove port if present (for local development)
  const cleanHostname = hostname.split(':')[0];

  // Check if we have config for this hostname
  if (DOMAINS[cleanHostname]) {
    return DOMAINS[cleanHostname];
  }

  // Return default config
  return DOMAINS['default'];
}

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
