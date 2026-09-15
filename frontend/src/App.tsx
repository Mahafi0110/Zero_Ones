import { useEffect, useState } from 'react';
import {
  fetchSiteContent,
  type AboutSection,
  type WhyChooseSection,
  type ContactSection,
  type FooterSection,
  type HeroSection,
  type NavbarSection,
  type SiteSettings,
  type ProductItem,
  type ServiceItem,
  type ServicesSection,
  type HowItWorksSection,
  type FAQItem,
  type TestimonialItem,
  type TrustedBrandItem,
} from './services/api';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { StatsCounter } from './components/StatsCounter';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsAndBrands } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [servicesSection, setServicesSection] = useState<ServicesSection | null>(null);
  const [hero, setHero] = useState<HeroSection | null>(null);
  const [navbar, setNavbar] = useState<NavbarSection | null>(null);
  const [about, setAbout] = useState<AboutSection | null>(null);
  const [whyChoose, setWhyChoose] = useState<WhyChooseSection | null>(null);
  const [contact, setContact] = useState<ContactSection | null>(null);
  const [footer, setFooter] = useState<FooterSection | null>(null);
  const [howItWorks, setHowItWorks] = useState<HowItWorksSection | null>(null);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [brands, setBrands] = useState<TrustedBrandItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSiteContent()
      .then(data => {
        setSettings(data.settings);
        setProducts(data.products);
        setServices(data.services);
        setServicesSection(data.services_section ?? null);
        setHero(data.hero ?? null);
        setNavbar(data.navbar ?? null);
        setAbout(data.about ?? null);
        setWhyChoose(data.why_choose ?? null);
        setContact(data.contact ?? null);
        setFooter(data.footer ?? null);
        setHowItWorks(data.how_it_works ?? null);
        setFaqs(data.faqs ?? []);
        setTestimonials(data.testimonials ?? []);
        setBrands(data.brands ?? []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch from Django backend:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!settings) return;

    document.title = settings.seo_title || 'CCTV Installation & Security Solutions in Madurai | Zero Ones';
    const description = settings.seo_description || 'CCTV camera installation, security cameras, GPS vehicle tracking, biometric attendance & cash counting machines in Madurai. Explore suitable security solutions from Zero Ones.';
    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute('content', description);
  }, [settings]);

  if (loading) {
    return <div className="text-center py-20 font-bold text-gray-600">Loading Zero Ones System from Django...</div>;
  }

  return (
    <div className="w-full overflow-x-hidden">
      <div className="fixed top-0 left-0 z-50 w-full">
        <TopBar settings={settings} />
        <Navbar section={navbar} />
      </div>
      <main className="pt-24 md:pt-20">
        <Hero settings={settings} section={hero} products={products} />
        <About settings={settings} section={about} />
        <Products products={products} whatsappNumber={contact?.phone1 || settings?.phone1} />
        <Services services={services} section={servicesSection} />
        <StatsCounter />
        <WhyChooseUs section={whyChoose} />
        <TestimonialsAndBrands testimonials={testimonials} brands={brands} />
        <HowItWorks section={howItWorks} />
        <FAQ items={faqs} />
        <Contact settings={settings} section={contact} />
        <FinalCTA />
        <Footer settings={settings} section={footer} products={products} services={services} />
      </main>
    </div>
  );
}