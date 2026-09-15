import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { HowItWorksSection } from '../services/api';

interface HowItWorksProps {
  section?: HowItWorksSection | null;
}

const fallbackSteps = [
  'Share Your Requirement - Tell us about your property, workplace, vehicle or business requirement.',
  'Understand Your Needs - We evaluate coverage, usage, users, vehicle type and operational requirements.',
  'Recommend a Suitable Solution - We explain relevant products and configurations for your requirement.',
  'Install & Configure - We assist with installation, configuration and basic system testing.',
  'Get Support - Guidance and support continue after setup based on your product or service.',
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ section }) => {
  const steps = section
    ? [section.step1, section.step2, section.step3, section.step4, section.step5]
    : fallbackSteps;

  return (
    <section id="how-it-works" className="border-t border-gray-100 bg-white py-16 text-left md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">How It Works</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            {section?.title || 'A Simple Process From Requirement to Installation'}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => {
            const [stepTitle, ...stepDescription] = step.split(' - ');
            return (
              <div key={stepTitle} className="group rounded-2xl border border-blue-100 bg-blue-50/40 p-5 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between text-blue-600 group-hover:text-white">
                  <span className="text-2xl font-black">{String(index + 1).padStart(2, '0')}</span>
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="mb-2 text-sm font-bold">{stepTitle}</h3>
                <p className="text-xs leading-relaxed text-gray-600 group-hover:text-blue-50">{stepDescription.join(' - ')}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
