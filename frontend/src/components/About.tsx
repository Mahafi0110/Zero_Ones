import React from 'react';
import { Check, Eye, Target, Box } from 'lucide-react';
import type { AboutSection, SiteSettings } from '../services/api';

interface AboutProps {
  settings: SiteSettings | null;
  section?: AboutSection | null;
}

export const About: React.FC<AboutProps> = ({ settings, section }) => {
  return (
    <section id="about" className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">

          {/* ================= LEFT SIDE ================= */}
          <div className="text-left">
            <div className="mb-2">
              <span className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-blue-600">
                About Us
              </span>
            </div>

            <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              {section?.heading || 'Security & Technology Solutions Built Around Your Requirements'}
            </h2>

            <p className="mb-8 max-w-[580px] text-[15px] leading-relaxed text-gray-600">
              {section?.description || settings?.about_text ||
                'Zero Ones provides CCTV security cameras, biometric attendance systems, GPS vehicle tracking and cash counting machines for homes, shops, offices and businesses in Madurai.'}
            </p>
            {section?.extended_description && <p className="mb-6 max-w-[580px] whitespace-pre-line text-[15px] leading-relaxed text-gray-600">{section.extended_description}</p>}

            <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-left">
              <h3 className="mb-1 text-sm font-bold text-gray-900">{section?.local_heading || 'Looking for a Local Solution?'}</h3>
              <p className="text-xs leading-relaxed text-gray-600">{section?.local_description || 'Need a security or technology solution for your home or business? Zero Ones provides CCTV installation, GPS vehicle tracking, biometric and cash counting solutions in Madurai.'}</p>
              <p className="mt-2 text-xs font-semibold text-blue-600">{section?.local_cta || "Tell us your requirement. We'll help you find a suitable solution."}</p>
            </div>

            <div className="grid max-w-[480px] grid-cols-2 gap-x-6 gap-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-[14px] font-semibold text-gray-800">Quality Products</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-[14px] font-semibold text-gray-800">Expert Team</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-[14px] font-semibold text-gray-800">Affordable Pricing</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-[14px] font-semibold text-gray-800">Local Support</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE (Vision, Mission, Values Cards) ================= */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            
            {/* Vision Card */}
            <div className="flex flex-col items-center rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/40 to-white px-6 py-8 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md text-blue-600 border border-blue-50">
                <Eye size={24} strokeWidth={2} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">Our Vision</h3>
              <p className="text-[13px] leading-relaxed text-gray-600">
                {section?.vision || settings?.vision_text || 'To become a trusted technology solutions provider in Madurai.'}
              </p>
            </div>

            {/* Mission Card */}
            <div className="flex flex-col items-center rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/40 to-white px-6 py-8 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md text-blue-600 border border-blue-50">
                <Target size={24} strokeWidth={2} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">Our Mission</h3>
              <p className="text-[13px] leading-relaxed text-gray-600">
                {section?.mission || settings?.mission_text || 'To provide practical, reliable and requirement-focused security and technology solutions.'}
              </p>
            </div>

            {/* Values Card */}
            <div className="flex flex-col items-center rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/40 to-white px-6 py-8 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md text-blue-600 border border-blue-50">
                <Box size={24} strokeWidth={2} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">Our Approach</h3>
              <p className="text-[13px] leading-relaxed text-gray-600">
                {section?.approach || 'Understand → Recommend → Install → Configure → Support'}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};