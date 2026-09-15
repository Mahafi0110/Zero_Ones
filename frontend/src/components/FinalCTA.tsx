import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="border-t border-blue-100 bg-blue-50 px-6 py-16 text-gray-900 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 border-l-4 border-blue-600 pl-6 text-left md:flex-row md:items-center md:pl-10">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">The Right Solution Starts Here</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Better Security &amp; Technology Starts With the Right Solution</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Choose a solution based on your actual requirement - not just the product name.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Zero Ones helps homes, workplaces and businesses evaluate, install and support practical CCTV, security camera, GPS tracking, biometric and cash counting solutions in Madurai.
          </p>
        </div>
        <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg">
          Talk to Our Team <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
};
