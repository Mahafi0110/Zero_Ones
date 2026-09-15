import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../services/api';

interface FAQProps {
  items: FAQItem[];
}

const fallbackItems: FAQItem[] = [
  { id: 1, question: 'What security solutions do you provide?', answer: 'We provide CCTV, biometric, GPS tracking, networking, IT products, installation and maintenance services.', order: 1 },
  { id: 2, question: 'Do you provide installation and support?', answer: 'Yes. Our team assists with installation, configuration, testing and ongoing support based on your requirement.', order: 2 },
  { id: 3, question: 'Can you recommend the right product?', answer: 'Yes. We review your property, usage and operational needs before recommending suitable options.', order: 3 },
];

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openId, setOpenId] = useState<number | null>(null);
  const displayItems = items.length > 0 ? items : fallbackItems;

  return (
    <section id="faq" className="border-t border-gray-100 bg-gray-50 py-16 text-left md:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">FAQ</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-blue-600" />
        </div>
        <div className="space-y-3">
          {displayItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${isOpen ? 'border-blue-300 shadow-md' : 'border-gray-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md'}`}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left text-sm font-bold text-gray-900 transition hover:text-blue-600 sm:px-5"
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-serif text-xs font-bold transition ${isOpen ? 'border-blue-600 bg-blue-600 text-white' : 'border-blue-200 bg-blue-50 text-blue-600'}`}>
                    {index + 1}
                  </span>
                  <span className="flex-1">{item.question}</span>
                  <ChevronDown size={18} className={`shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
                </button>
                {isOpen && <p className="border-t border-blue-100 bg-blue-50/40 px-5 py-4 pl-[4.75rem] text-sm leading-relaxed text-gray-600">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
