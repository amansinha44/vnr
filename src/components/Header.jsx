import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Industries", path: "/industries" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* MASTER WRAPPER: Exact same as Home sections for 100% equal width */}
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 w-full">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <header className={`w-full bg-white/50 backdrop-blur-2xl border border-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 flex justify-between items-center px-4 lg:px-6 rounded-xl ${scrolled ? 'h-16' : 'h-20'}`}>
            
            {/* LOGO */}
            <div className="flex-shrink-0 cursor-pointer group hover:scale-105 transition-transform duration-300">
              <Link to="/" className="flex items-center gap-3">
                {/* Updated Darker Vibrant Gradient */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4338ca] via-[#7e22ce] to-[#be185d] flex items-center justify-center shadow-sm">
                  <span className="text-white font-black text-sm">V</span>
                </div>
                {/* Updated Darker Vibrant Gradient Text */}
                <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d] tracking-tight text-xl">
                  VNR Media
                </span>
              </Link>
            </div>

            {/* DESKTOP MENU (WITH ACTIVE BOX) */}
            <nav className="hidden lg:flex items-center space-x-2">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path || (location.pathname === '' && item.path === '/');
                return (
                  <Link 
                    key={index} 
                    to={item.path} 
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-300 ${
                      isActive 
                        /* Updated active color to rich purple */
                        ? 'bg-white border border-white shadow-sm text-[#7e22ce]' 
                        : 'text-slate-600 hover:bg-white/60 hover:text-slate-900 border border-transparent'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA BUTTON */}
            <div className="hidden lg:flex items-center">
              <Link to="/contact">
                {/* Updated Darker Vibrant Gradient Button */}
                <button className="bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d] text-white px-6 py-2.5 rounded-md text-sm font-bold shadow-[0_4px_15px_rgba(126,34,206,0.3)] hover:shadow-[0_6px_20px_rgba(126,34,206,0.4)] hover:-translate-y-0.5 transition-all duration-300">
                  Let's Talk
                </button>
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 bg-white/80 rounded-xl border border-white flex items-center justify-center text-slate-800 shadow-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </header>

        </div>
      </div>

      {/* ================= MOBILE MENU (FLOATING LEFT, ROUNDED-MD) ================= */}
      {isMobileMenuOpen && (
        <>
          {/* Dark Blurred Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-[#0f172a]/40 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Floating Menu Card (Left Side, 10px margin, rounded-md) */}
          <div className="fixed top-[10px] left-[10px] bottom-[10px] w-[300px] max-w-[calc(100vw-20px)] bg-white/90 backdrop-blur-3xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-md z-50 flex flex-col overflow-hidden animate-[slideInLeft_0.4s_ease-out_forwards]">
            
            {/* 1. Menu Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100/60">
              {/* Updated Darker Vibrant Gradient Text */}
              <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d]">
                VNR Media
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-md flex items-center justify-center text-slate-500 transition-colors shadow-sm border border-slate-200/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* 2. Scrollable Menu Links */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <Link 
                    key={index} 
                    to={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    /* Updated active highlight to rich purple */
                    className={`group flex items-center justify-between px-4 py-3.5 rounded-md transition-all duration-300 opacity-0 animate-[menuItemSlideUp_0.4s_ease-out_forwards] ${isActive ? 'bg-[#7e22ce]/10 text-[#7e22ce]' : 'hover:bg-slate-50 text-slate-700'}`}
                  >
                    <span className={`text-lg transition-all ${isActive ? 'font-black' : 'font-bold'}`}>
                      {item.name}
                    </span>
                    {isActive && (
                      /* Updated active dot to dark magenta */
                      <span className="w-1.5 h-1.5 rounded-full bg-[#be185d] shadow-[0_0_8px_#be185d]"></span>
                    )}
                  </Link>
                );
              })}

              {/* ================= ATTRACTIVE DIVIDER LINE ================= */}
              <div className="w-full flex items-center justify-center relative pt-8 pb-4 opacity-70">
                {/* Line color matched to purple */}
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#7e22ce]/40 to-transparent"></div>
                {/* Diamond matched to dark magenta */}
                <div className="w-2 h-2 rotate-45 bg-white border border-[#be185d]/40 shadow-[0_0_8px_rgba(190,24,93,0.2)] relative z-10"></div>
              </div>

            </div>

            {/* 3. Bottom Section: Socials & CTA */}
            <div className="p-5 bg-gradient-to-b from-white/0 to-slate-50/80 border-t border-slate-100/60">
              
              {/* Social Icons (Rounded-md now) */}
              <div className="flex justify-center gap-4 mb-5">
                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-md bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-pink-600 hover:border-pink-200 hover:shadow-md transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* Twitter/X */}
                <a href="#" className="w-10 h-10 rounded-md bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-black hover:border-slate-400 hover:shadow-md transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.15H5.078z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 rounded-md bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#0a66c2] hover:border-blue-200 hover:shadow-md transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>

              {/* CTA Button (Rounded-md) */}
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                /* Updated Darker Vibrant Gradient */
                className="flex items-center justify-center w-full py-3.5 rounded-md bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d] text-white font-bold text-sm shadow-[0_8px_20px_rgba(126,34,206,0.25)] active:scale-95 transition-all"
              >
                Book a Strategy Call
              </Link>
            </div>

          </div>

          {/* ================= KEYFRAME ANIMATIONS ================= */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideInLeft {
              from { opacity: 0; transform: translateX(-100%); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes menuItemSlideUp {
              from { opacity: 0; transform: translateY(15px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}} />
        </>
      )}

    </>
  );
}
