import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ExternalLink } from 'lucide-react';
import { submitContactMessage, type ContactSection, type SiteSettings } from '../services/api';

interface ContactProps {
  settings: SiteSettings | null;
  section?: ContactSection | null;
}

export const Contact: React.FC<ContactProps> = ({ settings, section }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const supportItems = (section?.support_items || 'CCTV Installation\nCCTV Setup & Configuration\nCCTV Repair & Maintenance\nBiometric Attendance\nGPS Vehicle Tracking\nCash Counting Machines\nOther Relevant Technology Requirements')
    .split('\n')
    .map(item => item.trim())
    .filter(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await submitContactMessage(formData);
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to send your message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden bg-[#0066ff] py-10 text-white md:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          
          {/* ================= LEFT SIDE: Get in Touch Info ================= */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {section?.heading || 'Find the Right Security & Technology Solution in Madurai'}
            </h2>
            <p className="mb-3 text-xs leading-relaxed text-blue-100">
              {section?.description || 'Have a requirement for CCTV, security cameras, biometric attendance, vehicle tracking or cash counting? Share your requirement with Zero Ones and our team can help you identify a suitable solution based on your needs.'}
            </p>

            <div className="mb-4 w-full">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-100">{section?.support_title || 'We Support Requirements Related To'}</h3>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {supportItems.map(item => (
                  <li key={item} className="flex items-start gap-1.5 rounded-md border border-blue-400/20 bg-blue-700/20 px-2 py-1.5 text-[10px] leading-tight text-blue-50 transition hover:border-white/60 hover:bg-blue-700/60">
                    <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-white text-[9px] font-black text-blue-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full space-y-3 text-sm">
              
              {/* Phone Numbers */}
              <div className="flex items-start gap-4 rounded-xl border border-blue-400/30 bg-blue-700/35 p-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-700/60 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-semibold text-white">{section?.phone1 || settings?.phone1 || '9360484136'}</p>
                  <p className="font-semibold text-white">{section?.phone2 || settings?.phone2 || '9894010163'}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 rounded-xl border border-blue-400/30 bg-blue-700/35 p-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-700/60 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-blue-100 break-all">{section?.email || settings?.email || 'zeroonessecurity@gmail.com'}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 rounded-xl border border-blue-400/30 bg-blue-700/35 p-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-700/60 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-blue-100 leading-relaxed">
                    {section?.address || settings?.address || '61, Indhira Nagar, Near Aavin Junction, K.K Nagar, Madurai - 20.'}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 rounded-xl border border-blue-400/30 bg-blue-700/35 p-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-700/60 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-blue-100 font-medium">{section?.working_hours || 'Monday - Saturday, 9:00 AM - 7:00 PM'}</p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= CENTER: Form Card ================= */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 md:p-8 text-gray-800 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 text-xl font-bold">✓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-xs text-gray-500 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-xs font-semibold hover:bg-blue-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    required
                    placeholder="Your Phone Number" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    required
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition resize-none"
                  ></textarea>
                </div>
                {error && <p className="text-xs font-medium text-red-600">{error}</p>}
                <button 
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 text-white py-3.5 rounded-xl font-semibold text-xs transition flex items-center justify-center gap-2 shadow-md group cursor-pointer"
                >
                  {submitting ? 'Sending...' : (section?.button_label || 'Request a Consultation')} <Send size={14} className="group-hover:translate-x-0.5 transition"/>
                </button>
              </form>
            )}
          </div>

          {/* ================= RIGHT SIDE: Map Card ================= */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-4 text-gray-800 shadow-2xl flex flex-col justify-between">
            <div className="relative w-full h-56 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 flex flex-col items-center justify-center">
              {/* Simulated Map Visual Background */}
              <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800')` }}></div>
              <div className="absolute inset-0 bg-blue-900/10"></div>
              
              {/* Floating Address Info Box on Map */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur shadow-md rounded-lg p-3 max-w-[220px] text-left border border-gray-100 z-10">
                <p className="font-bold text-[11px] text-gray-900">Zero Ones Security System</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">61, Indhira Nagar, Near Aavin Junction, K.K Nagar, Madurai - 20.</p>
              </div>

              {/* Map Marker Pin */}
              <div className="relative z-10 text-red-600 animate-bounce mt-8">
                <MapPin size={32} fill="currentColor" className="text-red-600" />
              </div>

              {/* Map Zoom Controls UI */}
              <div className="absolute bottom-3 right-3 bg-white shadow rounded flex flex-col text-xs font-bold text-gray-700 overflow-hidden border border-gray-200">
                <button className="px-2 py-1 hover:bg-gray-100 border-b border-gray-200">+</button>
                <button className="px-2 py-1 hover:bg-gray-100">-</button>
              </div>
              <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-0.5 rounded text-[10px] font-semibold text-gray-700 shadow-sm">
                Madurai
              </div>
            </div>

            {/* View on Google Maps Button */}
            <div className="mt-4">
              <a 
                href="https://maps.google.com/?q=Zero+Ones+Security+System+Madurai" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold text-xs transition flex items-center justify-center gap-2 shadow-md block text-center"
              >
                View on Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};