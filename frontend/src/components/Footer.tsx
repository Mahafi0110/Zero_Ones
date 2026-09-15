import React from 'react';
import type { FooterSection, SiteSettings, ProductItem, ServiceItem } from '../services/api';

interface FooterProps {
  settings: SiteSettings | null;
  section?: FooterSection | null;
  products?: ProductItem[];
  services?: ServiceItem[];
}

export const Footer: React.FC<FooterProps> = ({ settings, section, products = [], services = [] }) => {
  return (
    <footer id="contact" className="bg-[#0b1329] text-gray-400 pt-16 pb-8 text-xs border-t border-gray-800 text-left">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/80">
        
        {/* Column 1: Brand Info & Logo */}
        <div className="lg:col-span-1 flex flex-col items-start">
          <div className="bg-white px-3 py-2 rounded-lg shadow-sm mb-4 inline-block">
            <span className="font-black text-blue-600 text-lg tracking-tight">ZERONES</span>
          </div>
          <p className="text-[13px] leading-relaxed text-gray-400">
            {section?.description || settings?.about_text || 'Your trusted partner for complete security and IT solutions in Madurai.'}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <p className="font-bold text-white text-xs uppercase tracking-wider mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-[13px]">
            <li><a href="#home" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition flex items-center gap-1.5">→ About Us</a></li>
            <li><a href="#products" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Products</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Services</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Our Products */}
        <div>
          <p className="font-bold text-white text-xs uppercase tracking-wider mb-4">Our Products</p>
          <ul className="space-y-2.5 text-[13px]">
            {products.length > 0 ? (
              products.slice(0, 6).map((prod, idx) => (
                <li key={prod.id || idx}>
                  <a href="#products" className="hover:text-blue-400 transition flex items-center gap-1.5 truncate">
                    → {prod.title}
                  </a>
                </li>
              ))
            ) : (
              <>
                <li><a href="#products" className="hover:text-blue-400 transition flex items-center gap-1.5">→ CCTV Cameras</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Biometric Devices</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition flex items-center gap-1.5">→ GPS Tracking</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Counting Machines</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Computers & Laptops</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Printers & Accessories</a></li>
              </>
            )}
          </ul>
        </div>

        {/* Column 4: Our Services */}
        <div>
          <p className="font-bold text-white text-xs uppercase tracking-wider mb-4">Our Services</p>
          <ul className="space-y-2.5 text-[13px]">
            {services.length > 0 ? (
              services.slice(0, 6).map((serv, idx) => (
                <li key={serv.id || idx}>
                  <a href="#services" className="hover:text-blue-400 transition flex items-center gap-1.5 truncate">
                    → {serv.title}
                  </a>
                </li>
              ))
            ) : (
              <>
                <li><a href="#services" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Installation</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Repair & Maintenance</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition flex items-center gap-1.5">→ AMC Services</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition flex items-center gap-1.5">→ IT Support</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Networking</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition flex items-center gap-1.5">→ Technical Support</a></li>
              </>
            )}
          </ul>
        </div>

        {/* Column 5: Follow Us & Cursive Tagline */}
        <div className="lg:col-span-1 flex flex-col items-start">
          <p className="font-bold text-white text-xs uppercase tracking-wider mb-4">Follow Us</p>
          <div className="flex gap-2.5 mb-6">
            <a href={section?.facebook_url || settings?.facebook_url || "#"} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold hover:bg-blue-700 transition">f</a>
            <a href={section?.instagram_url || settings?.instagram_url || "#"} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white flex items-center justify-center text-xs font-bold hover:opacity-90 transition">ig</a>
            <a href={section?.youtube_url || settings?.youtube_url || "#"} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold hover:bg-red-700 transition">yt</a>
            <a href={section?.whatsapp_url || settings?.whatsapp_url || "#"} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold hover:bg-emerald-700 transition">wa</a>
          </div>
          
          {/* Cursive Tagline Matching Screenshot */}
          <div className="text-[#00d2ff] font-serif italic text-base sm:text-lg tracking-wide opacity-95 leading-snug">
            Secure<br/>
            Smarter<br/>
            Together...
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-[11px]">
        <p>© {new Date().getFullYear()} Zero Ones Security System. All Rights Reserved.</p>
        <p className="mt-2 sm:mt-0">
          Managed via <a href="http://localhost:8000/admin/" target="_blank" rel="noreferrer" className="text-blue-400 underline">Django Admin Panel</a>
        </p>
      </div>
    </footer>
  );
};