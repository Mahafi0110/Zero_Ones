import React from 'react';
import { ShieldCheck, Settings, Users, Tag, Zap, Heart, ChevronRight } from 'lucide-react';
import type { WhyChooseSection } from '../services/api';

interface WhyChooseProps { section?: WhyChooseSection | null; }

export const WhyChooseUs: React.FC<WhyChooseProps> = ({ section }) => {
  const icons = [ShieldCheck, Settings, Users, Tag, Zap, Heart];
  const fallbackPoints = [
    'Requirement First — We start by understanding your actual requirement before recommending a product or system.',
    'Suitable Product Guidance — Different homes, workplaces, vehicles and businesses require different specifications. We help you understand relevant options before planning.',
    'Professional Installation — Our support extends beyond product selection to installation, configuration and basic system testing where applicable.',
    'Multiple Technology Solutions — CCTV, biometric attendance, GPS tracking and cash counting requirements can be addressed through one technology solutions provider.',
    'Clear Communication — We explain relevant product features, setup requirements and service considerations in a straightforward way.',
    'Ongoing Support — When a system requires assistance after installation, we can help identify the appropriate service or maintenance requirement.',
  ];
  const points = section ? [section.point1, section.point2, section.point3, section.point4, section.point5, section.point6] : fallbackPoints;

  return (
    <section id="why-choose-us" className="bg-gray-50/50 py-16 md:py-24 text-left border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Why Choose <span className="text-blue-600">Zero Ones?</span>
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">{section?.heading || 'A Practical Approach to Security & Technology Solutions'}</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">{section?.description || 'Zero Ones focuses on understanding the requirement first, recommending a suitable solution and providing relevant installation, configuration and support.'}</p>
        </div>

        {/* Grid Layout: 6 Feature Cards + 1 Gradient Safety Banner Card */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 items-center">
          
          {/* Map through the 6 feature items (occupying 4 columns on large screens) */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {points.map((point, idx) => {
              const IconComponent = icons[idx];
              const [title, ...description] = point.split(' — ');
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-gray-200/80 p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all group min-h-[150px]"
                >
                  <div className="w-12 h-12 rounded-full border border-blue-500 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                    <IconComponent size={22} strokeWidth={2} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                    {title}
                  </span>
                  <p className="mt-2 text-[11px] leading-relaxed text-gray-500">{description.join(' — ')}</p>
                </div>
              );
            })}
          </div>

          {/* Right Side: Vibrant Blue Safety Banner Card (occupying 3 columns on large screens) */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-3 bg-gradient-to-r from-blue-600 to-[#00d2ff] rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-blue-100 mb-1">
                Your Safety
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
                Our Priority
              </h3>
              <a 
                href="#contact" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm shadow-md transition inline-flex items-center gap-2 group"
              >
                Get a Quote <ChevronRight size={15} className="group-hover:translate-x-1 transition"/>
              </a>
            </div>

            {/* Graphic Lens / Radar Element in bottom/right corner matching mockup */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full border-4 border-white/20 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 rounded-full border-4 border-white/30 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gray-950 flex items-center justify-center shadow-inner relative">
                  <div className="w-6 h-6 rounded-full bg-blue-500 animate-ping absolute"></div>
                  <div className="w-6 h-6 rounded-full bg-blue-600 z-10"></div>
                  <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-red-500"></span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};