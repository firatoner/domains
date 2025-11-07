export interface DomainInfo {
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  category: string;
  contactEmail: string;
  highlights: {
    memorable: boolean;
    shortLength: boolean;
    extension: string;
    age?: string;
  };
}

export interface DomainConfig {
  [hostname: string]: DomainInfo;
}
