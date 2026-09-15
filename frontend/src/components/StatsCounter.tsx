import React from 'react';
import { Camera, Users, ShieldCheck, Clock } from 'lucide-react';

const statistics = [
  { value: '500+', label: 'Happy Customers', icon: Users },
  { value: '1000+', label: 'Installations', icon: Camera },
  { value: '5+', label: 'Years of Experience', icon: ShieldCheck },
  { value: '24/7', label: 'Customer Support', icon: Clock },
];

export const StatsCounter: React.FC = () => {
  return (
    <section className="border-y border-gray-800 bg-[#071a35] py-8 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0">
          {statistics.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 border-gray-700 px-2 py-2 lg:border-r lg:px-8 first:lg:pl-0 last:lg:border-r-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-500/70 text-cyan-400">
                <Icon size={24} />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  {value}
                </div>
                <div className="text-xs font-medium text-gray-400">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};