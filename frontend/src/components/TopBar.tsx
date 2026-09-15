import React from 'react';
import { MapPin, Phone, Globe, Camera, Play } from 'lucide-react';
import type { SiteSettings } from '../services/api';

interface TopBarProps {
  settings: SiteSettings | null;
}

export const TopBar: React.FC<TopBarProps> = ({ settings }) => {
  return (
    <div className="bg-[#0b1329] text-gray-300 text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-gray-800 w-full">
      <span className="flex items-center gap-1.5 text-gray-300">
        <MapPin size={13} className="text-blue-400"/> {settings?.address}
      </span>
      <div className="flex items-center space-x-6">
        <span className="flex items-center gap-1.5 font-medium text-gray-200">
          <Phone size={13} className="text-blue-400"/> {settings?.phone1} | {settings?.phone2}
        </span>
        
        {/* Social Icons matching your exact mockup */}
        <div className="flex items-center space-x-2.5">
          <a href="#" aria-label="Website" className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition"><Globe size={10}/></a>
          <a href="#" aria-label="Photos" className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition"><Camera size={10}/></a>
          <a href="#" aria-label="Videos" className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition"><Play size={10}/></a>
        </div>
      </div>
    </div>
  );
};