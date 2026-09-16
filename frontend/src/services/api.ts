export interface SiteSettings {
  seo_title?: string;
  seo_description?: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  hero_title: string;
  about_text: string;
  vision_text?: string;
  mission_text?: string;
  values_text?: string;
  facebook_url?: string;
  instagram_url?: string;
  youtube_url?: string;
  whatsapp_url?: string;
}

export interface ProductItem {
  id: number;
  title: string;
  desc: string;
  details?: string;
  considerations?: string;
  button_label?: string;
  image?: string | null;
}

export interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  details?: string;
  considerations?: string;
  button_label?: string;
}

export interface ServicesSection {
  id: number;
  heading: string;
  description: string;
  introduction: string;
}

export interface ContactMessageInput {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface SiteContentResponse {
  settings: SiteSettings | null;
  hero?: HeroSection | null;
  navbar?: NavbarSection | null;
  about?: AboutSection | null;
  why_choose?: WhyChooseSection | null;
  contact?: ContactSection | null;
  footer?: FooterSection | null;
  how_it_works?: HowItWorksSection | null;
  faqs: FAQItem[];
  testimonials: TestimonialItem[];
  brands: TrustedBrandItem[];
  products: ProductItem[];
  services: ServiceItem[];
  services_section?: ServicesSection | null;
}

export interface HeroSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primary_button_label: string;
  secondary_button_label: string;
  background_image?: string | null;
}

export interface NavbarSection {
  id: number;
  brand_name: string;
  tagline: string;
  quote_label: string;
}

export interface AboutSection {
  id: number;
  heading: string;
  description: string;
  extended_description?: string;
  local_heading?: string;
  local_description?: string;
  local_cta?: string;
  vision: string;
  mission: string;
  approach?: string;
}

export interface WhyChooseSection {
  id: number;
  heading: string;
  description: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  point5: string;
  point6: string;
}

export interface ContactSection {
  id: number;
  heading: string;
  description: string;
  support_title: string;
  support_items: string;
  button_label: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  working_hours: string;
}

export interface FooterSection {
  id: number;
  description: string;
  facebook_url: string;
  instagram_url: string;
  youtube_url: string;
  whatsapp_url: string;
  copyright_text: string;
}

export interface HowItWorksSection {
  id: number;
  title: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  order: number;
}

export interface TestimonialItem {
  id?: number;
  quote: string;
  name: string;
  role: string;
  rating: number;
  order?: number;
}

export interface TrustedBrandItem {
  id?: number;
  name: string;
  style: string;
  order?: number;
  isBadge?: boolean;
  isTpLink?: boolean;
}
const API_URL = import.meta.env.VITE_API_URL;
const fallbackData: SiteContentResponse = {
  settings: {
    phone1: '9360484136',
    phone2: '9894010163',
    email: 'zeroonessecurity@gmail.com',
    address: '61, Indhira Nagar, Near Aavin Junction, K.K Nagar, Madurai - 20.',
    hero_title: 'Complete Security & IT Solutions Under One Roof',
    about_text:
      'Zero Ones Security System is a trusted provider of CCTV cameras, Biometric devices, and complete IT security solutions for homes, businesses, and institutions.',
  },
  products: [
    { id: 1, title: 'CCTV Cameras', desc: 'HD surveillance systems for homes and businesses.', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Biometric Devices', desc: 'Secure access solutions with fast verification.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Network Security', desc: 'Protection for your connected systems and data.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'GPS Tracking', desc: 'Real-time tracking solutions for vehicles and assets.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'IT Accessories', desc: 'Reliable accessories for your daily technology needs.', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80' },
  ],
  services: [
    { id: 1, title: 'Sales', desc: 'Trusted product recommendations and installation guidance.' },
    { id: 2, title: 'Installation', desc: 'Professional setup for cameras, access systems, and IT infrastructure.' },
    { id: 3, title: 'Maintenance', desc: 'Ongoing support to keep every system running reliably.' },
  ],
  faqs: [],
  testimonials: [],
  brands: [],
};

export async function fetchSiteContent(): Promise<SiteContentResponse> {
  try {
    const response = await fetch(`${API_URL}/api/site/`, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = (await response.json()) as Partial<SiteContentResponse>;

    return {
      settings: data.settings ?? fallbackData.settings,
      products: data.products ?? fallbackData.products,
      services: data.services ?? fallbackData.services,
      faqs: data.faqs ?? fallbackData.faqs,
      testimonials: data.testimonials ?? fallbackData.testimonials,
      brands: data.brands ?? fallbackData.brands,
    };
  } catch (error) {
    console.warn('Django API not available, using fallback content:', error);
    return fallbackData;
  }
}

export interface ContactSubmissionResult {
  detail: string;
  warning: boolean;
}

export async function submitContactMessage(message: ContactMessageInput): Promise<ContactSubmissionResult> {
  const response = await fetch(`${API_URL}/api/contact/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });

  const data = (await response.json().catch(() => null)) as { detail?: string; warning?: boolean } | null;

  if (!response.ok) {
    const detail = data?.detail || 'Unable to send your message.';
    throw new Error(detail);
  }

  return {
    detail: data?.detail || 'Message sent successfully.',
    warning: Boolean(data?.warning),
  };
}
