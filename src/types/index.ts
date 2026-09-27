export interface ChatMessage {
  id: string;
  sender: 'client' | 'ai';
  text: string;
  time: string;
  badge?: string;
}

export interface BusinessPreset {
  id: string;
  name: string;
  category: string;
  location: string;
  avatar: string;
  initialMessages: ChatMessage[];
  quickPrompts: string[];
  isCustom?: boolean;
}

export interface CustomBusinessConfig {
  name: string;
  category: string;
  location: string;
  primaryService: string;
  baseRate: number;
  callOutFee: number;
  emergencySurcharge: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  business: string;
  location: string;
  metrics: string;
  metricLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
