import React, { useRef } from 'react';
import { Camera, ChevronLeft, ChevronRight, Fingerprint, Laptop, Navigation, Printer, Wrench } from 'lucide-react';
import type { ServiceItem, ServicesSection } from '../services/api';

interface ServicesProps {
  services: ServiceItem[];
  section?: ServicesSection | null;
}

export const Services: React.FC<ServicesProps> = ({ services, section }) => {
  const servicesTrackRef = useRef<HTMLDivElement>(null);
  const icons = [Camera, Wrench, Fingerprint, Navigation, Laptop, Printer];
  const fallbackServices: ServiceItem[] = [
    { id: 1, title: 'CCTV Installation', desc: 'Home, Office, Shop & Institution Setup' },
    { id: 2, title: 'CCTV Repair & Maintenance', desc: 'Troubleshooting & AMC.' },
    { id: 3, title: 'Biometric Installation', desc: 'Attendance & Access Control Setup' },
    { id: 4, title: 'GPS Installation', desc: 'Vehicle GPS Setup & Configuration' },
    { id: 5, title: 'Computer & Laptop Service', desc: 'Hardware & Software Support' },
    { id: 6, title: 'Printer & IT Setup', desc: 'Installation & Troubleshooting' },
  ];
  const displayServices = services.length > 0 ? services : fallbackServices;

  const scrollServices = (direction: 'left' | 'right') => {
    servicesTrackRef.current?.scrollBy({
      left: direction === 'right' ? servicesTrackRef.current.clientWidth : -servicesTrackRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section id="services" className="overflow-hidden border-t border-gray-100 bg-white py-12 text-left md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">Services</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{section?.heading || 'CCTV Installation & Technology Support in Madurai'}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">{section?.description || 'Selecting a product is only the first step. Proper installation, setup, configuration and relevant support help ensure that the selected technology is prepared according to the site and usage requirements.'}</p>
          <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">{section?.introduction || 'Zero Ones provides relevant installation and technical support across its core security and technology solutions.'}</p>
        </div>
        <div className="relative px-1 sm:px-10">
          <button type="button" aria-label="Previous services" onClick={() => scrollServices('left')} className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition hover:bg-blue-600 hover:text-white">
            <ChevronLeft size={20} />
          </button>
          <div ref={servicesTrackRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {displayServices.map((service, index) => {
              const Icon = icons[index % icons.length];
              return (
                <article key={service.id || index} className="flex min-w-full snap-start flex-col justify-between rounded-xl border border-blue-100 bg-white p-3 shadow-sm transition hover:shadow-md sm:min-w-[calc(50%-12px)] lg:min-w-[calc(20%-19px)]">
                  <div>
                    <div className="mb-4 flex h-24 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-600">
                      <Icon size={26} />
                    </div>
                    <h3 className="mb-1 text-center text-xs font-bold leading-tight text-gray-900">{service.title}</h3>
                    <p className="mb-4 text-center text-[10px] leading-relaxed text-gray-500">{service.desc}</p>
                  </div>
                  <a href="#contact" className="flex items-center justify-center gap-1 rounded-md bg-blue-600 px-2 py-2 text-[10px] font-semibold text-white transition hover:bg-blue-700">
                    {service.button_label || 'Book Now'} <ChevronRight size={12} />
                  </a>
                </article>
              );
            })}
          </div>
          <button type="button" aria-label="Next services" onClick={() => scrollServices('right')} className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition hover:bg-blue-600 hover:text-white">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
