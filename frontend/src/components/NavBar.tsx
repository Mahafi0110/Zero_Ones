import React, { useEffect, useState } from 'react';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';
import type { NavbarSection } from '../services/api';

interface NavbarProps {
  section?: NavbarSection | null;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'why-choose-us', label: 'Why Choose Us' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ section }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      entries => {
        const visibleSection = entries
          .filter(entry => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach(sectionElement => observer.observe(sectionElement));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    activeSection === id
      ? 'text-blue-600 hover:text-blue-700 transition'
      : 'hover:text-blue-600 transition';

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex justify-between items-center">
        
        {/* Logo match */}
     <div className="flex items-center space-x-2.5">
      <div className="bg-blue-600 text-white p-2 rounded-xl font-bold flex items-center shadow-md">
        <Shield size={22} />
      </div>
      <div className="text-left">
        <div className="text-xl font-black tracking-tight text-gray-900 leading-none">
            {section?.brand_name || 'ZERONES'}
        </div>
        <div className="text-[9px] uppercase font-bold tracking-wider text-gray-500 mt-0.5">
          {section?.tagline || 'SECURITY SYSTEM Madurai'}
        </div>
      </div>
    </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-700">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)} aria-current={activeSection === item.id ? 'page' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Quote Button */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md transition flex items-center gap-2 group">
            {section?.quote_label || 'Get a Quote'} <ChevronRight size={16} className="group-hover:translate-x-1 transition"/>
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
            {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b px-6 py-4 space-y-3 font-medium text-left shadow-lg">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMobileMenuOpen(false)} className={`block py-1 ${activeSection === item.id ? 'text-blue-600' : ''}`} aria-current={activeSection === item.id ? 'page' : undefined}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};