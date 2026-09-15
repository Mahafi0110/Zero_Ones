import React from 'react';
import { ChevronRight, Camera, Fingerprint, Navigation, Cpu, Laptop, Printer, Network, HardDrive } from 'lucide-react';
import type { HeroSection, SiteSettings, ProductItem } from '../services/api';

interface HeroProps {
  settings: SiteSettings | null;
  section?: HeroSection | null;
  products: ProductItem[];
}

export const Hero: React.FC<HeroProps> = ({ settings, section, products: _products }) => {
  const categoryIcons = [
    <Camera size={16} />,
    <Fingerprint size={16} />,
    <Navigation size={16} />,
    <Cpu size={16} />,
    <Laptop size={16} />,
    <Printer size={16} />,
    <Network size={16} />,
    <HardDrive size={16} />
  ];

  const defaultCategories = [
    { title: 'CCTV' },
    { title: 'Biometric' },
    { title: 'GPS Tracking' },
    { title: 'Counting Machine' },
    { title: 'Computers & Laptops' },
    { title: 'Printers' },
    { title: 'Networking' },
    { title: 'IT Accessories' }
  ];

  const displayItems = defaultCategories;
  const heroTitle = section?.title || settings?.hero_title || 'CCTV & Security Solutions for Homes and Businesses in Madurai';
  const accentTitle = 'CCTV & Security Solutions';
  const titleParts = heroTitle.split(accentTitle);

  return (
    <section id="home" className="relative bg-gray-900 text-white w-full overflow-hidden">
      {/* Background office image with a lighter, brighter tone matching the mockup design */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-45 scale-100"
        style={{ backgroundImage: `url('${section?.background_image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000'}')` }}
      ></div>
      {/* Soft gradient overlay to maintain readability while keeping the background light & vibrant */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-900/60 to-gray-950/70"></div>

      {/* Main Container tailored for exact screen scale view */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center min-h-[78svh]">
        
        {/* Left Side: all components in one horizontal row */}
        <div className="lg:col-span-6 lg:self-end lg:mb-2 flex flex-nowrap justify-start gap-2 overflow-x-auto scrollbar-none pl-0 lg:pl-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {displayItems.map((item: any, idx: number) => {
            const titleText = item.title || item.name || 'Category';
            return (
              <a 
                key={item.id || idx} 
                href="#products" 
                className="flex min-h-[78px] shrink-0 w-16 flex-col items-center justify-center rounded-xl bg-gray-950/55 p-2 text-center transition group cursor-pointer border border-white/15 backdrop-blur-sm hover:bg-blue-600/90"
              >
                <div className="w-8 h-8 bg-blue-500/20 text-[#00d2ff] group-hover:bg-white group-hover:text-blue-600 rounded-lg flex items-center justify-center mb-1 transition shadow-sm">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <span className="w-full whitespace-normal text-[9px] font-medium leading-tight text-blue-100 group-hover:text-white">
                  {titleText}
                </span>
              </a>
            );
          })}
        </div>

        {/* Right Side: Typography, Subtitle, CTAs & Cursive Tagline */}
        <div className="lg:col-span-6 flex max-w-xl flex-col items-start justify-center pl-0 lg:pl-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08] text-left text-white">
            {titleParts.length > 1 ? (
              <>
                {titleParts[0]}
                <span className="text-[#00d2ff]">{accentTitle}</span>
                {titleParts.slice(1).join(accentTitle)}
              </>
            ) : heroTitle}
          </h1>

          <p className="mt-3 text-xs sm:text-sm font-semibold tracking-wider text-blue-200 uppercase">
            {section?.subtitle || 'Sales | Installation | Service | Maintenance | Support'}
          </p>
          <p className="mt-4 w-full self-start text-left text-xs leading-relaxed text-blue-100 sm:text-sm">
            {section?.description || 'CCTV cameras, biometric attendance, GPS vehicle tracking and cash counting machines for homes, shops, offices and businesses in Madurai.'}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition flex items-center gap-2 text-xs sm:text-sm group">
              {section?.primary_button_label || 'Get a Consultation'} <ChevronRight size={15} className="group-hover:translate-x-1 transition"/>
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-full font-semibold backdrop-blur transition flex items-center gap-2 text-xs sm:text-sm group">
              {section?.secondary_button_label || 'Explore Our Solutions'} <ChevronRight size={15} className="group-hover:translate-x-1 transition"/>
            </a>
          </div>

          <div className="mt-6 text-[#00d2ff] font-serif italic text-base sm:text-lg tracking-wide opacity-95">
            Secure Smarter Together...
          </div>
        </div>

      </div>
    </section>
  );
};