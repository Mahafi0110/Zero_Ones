import React from 'react';
import { Star } from 'lucide-react';
import type { TestimonialItem, TrustedBrandItem } from '../services/api';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  brands: TrustedBrandItem[];
}

export const TestimonialsAndBrands: React.FC<TestimonialsProps> = ({ testimonials: dynamicTestimonials, brands: dynamicBrands }) => {
  const fallbackTestimonials: TestimonialItem[] = [
    {
      quote: "Excellent service and professional installation. Highly recommended for CCTV systems!",
      name: "Ramesh K.",
      role: "Shop Owner, Madurai",
      rating: 5,
    },
    {
      quote: "Very good support and affordable pricing. Biometric system works perfectly for our office.",
      name: "Priya S.",
      role: "Office Admin",
      rating: 5,
    },
    {
      quote: "Installed GPS tracking for our fleet. Great service and quick response from the team.",
      name: "Karthik M.",
      role: "Transport Business",
      rating: 5,
    },
  ];

  const fallbackBrands: TrustedBrandItem[] = [
    { name: 'HIKVISION', style: 'text-[#d71920] font-black tracking-wider' },
    { name: 'CP PLUS', style: 'text-[#e31b23] font-bold tracking-tight' },
    { name: 'alhua', style: 'text-gray-950 font-extrabold tracking-tighter lowercase' },
    { name: 'ZKTECO', style: 'text-[#00965e] font-black tracking-widest' },
    { name: 'TVS', style: 'text-[#002b80] font-black tracking-widest' },
    { name: 'DELL', style: 'text-[#007db8] font-black tracking-widest' },
    { 
      name: 'hp', 
      isBadge: true, 
      style: 'w-8 h-8 rounded-full bg-[#0096d6] text-white font-bold flex items-center justify-center text-xs tracking-tighter shadow-sm' 
    },
    { name: 'Canon', style: 'text-[#cc0000] font-serif font-bold tracking-tight' },
    { name: 'EPSON', style: 'text-[#002255] font-black tracking-widest' },
    { 
      name: 'tp-link', 
      isTpLink: true, 
      style: 'text-[#009982] font-bold tracking-tight flex items-center gap-1 text-sm' 
    },
  ];

  const testimonials = dynamicTestimonials.length > 0 ? dynamicTestimonials : fallbackTestimonials;
  const brands = dynamicBrands.length > 0 ? dynamicBrands : fallbackBrands;

  return (
    <section className="bg-white py-16 md:py-24 text-left border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid & Right Cursive Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* 3 Review Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50/50 rounded-2xl border border-gray-200/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all min-h-[220px]"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                    "{item.quote}"
                  </p>
                </div>

                <div className="border-t border-gray-200/60 pt-4">
                  <p className="text-xs font-bold text-gray-900">— {item.name}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Cursive Tagline Banner */}
          <div className="lg:col-span-3 flex flex-col items-start justify-center pl-0 lg:pl-6">
            <div className="text-blue-600 font-serif italic text-2xl sm:text-3xl tracking-wide leading-tight">
              Happy<br />
              Customers
            </div>
            <div className="text-gray-900 font-serif italic text-2xl sm:text-3xl tracking-wide leading-tight mt-1">
              Stronger<br />
              Together...
            </div>
          </div>

        </div>

        {/* ================= OUR TRUSTED BRANDS SECTION ================= */}
        <div className="pt-10 border-t border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-gray-500">
              Our Trusted Brands
            </h3>
          </div>

          {/* Exact Brand Color Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-6 items-center justify-items-center">
            {brands.map((brand, idx) => (
              <div key={idx} className="p-2 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                {brand.isBadge ? (
                  <div className={brand.style}>
                    {brand.name}
                  </div>
                ) : brand.isTpLink ? (
                  <div className={brand.style}>
                    <span className="w-4 h-4 rounded-full bg-[#009982] text-white flex items-center justify-center text-[10px] font-bold">!</span>
                    <span>{brand.name}</span>
                  </div>
                ) : (
                  <span className={`text-sm sm:text-base ${brand.style}`}>
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};