import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full mt-20">
      <div className="bg-white/40 backdrop-blur-2xl border-t border-white/80 shadow-[0_-10px_30px_rgba(0,0,0,0.02)] px-4 md:px-6 py-16">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                {/* CHANGED LOGO BOX GRADIENT */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4338ca] via-[#7e22ce] to-[#be185d] flex items-center justify-center shadow-md">
                  <span className="text-white font-black text-lg">V</span>
                </div>
                {/* CHANGED LOGO TEXT GRADIENT */}
                <span className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d] tracking-tight">
                  VNR Media
                </span>
              </Link>
              <p className="text-slate-600 text-base font-medium leading-relaxed max-w-sm mb-8">
                We build brands that lead industries through strategy, creativity, and performance-driven digital marketing.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram'].map((social, idx) => (
                  /* CHANGED SOCIAL ICON HOVER TO MATCH NEW THEME */
                  <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/70 border border-white flex items-center justify-center text-[#7e22ce] hover:bg-[#7e22ce] hover:text-white transition-all duration-300 shadow-sm">
                    <span className="font-bold text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div>
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] mb-6">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Services', 'Portfolio', 'Contact'].map((item, idx) => (
                  <li key={idx}>
                    {/* CHANGED LINK HOVER COLOR */}
                    <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-slate-600 hover:text-[#7e22ce] font-semibold text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] mb-6">Services</h4>
              <ul className="space-y-4">
                {['Digital Strategy', 'Performance Ads', 'Social Media', 'Web Design'].map((item, idx) => (
                  <li key={idx}>
                    {/* CHANGED LINK HOVER COLOR */}
                    <Link to="/services" className="text-slate-600 hover:text-[#7e22ce] font-semibold text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/60 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} VNR Digital Media House. All rights reserved.
            </p>
            <div className="flex gap-6">
              {/* CHANGED LINK HOVER COLOR */}
              <Link to="/" className="text-slate-500 hover:text-[#7e22ce] text-sm font-medium transition-colors">Privacy Policy</Link>
              <Link to="/" className="text-slate-500 hover:text-[#7e22ce] text-sm font-medium transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}