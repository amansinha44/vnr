import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for dynamic styling
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
      {/* ================= STICKY FLOATING HEADER ================= */}
      {/* Wrapper div space lega taaki page overlap na ho */}
      <div className="sticky top-0 z-50 w-full pt-6 pb-4 px-4 bg-transparent pointer-events-none">
        
        {/* Glassmorphic Capsule - Fixed rounded-2xl aur overlap issue */}
        <header className={`mx-auto bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(90,103,216,0.15)] transition-all duration-500 flex justify-between items-center px-6 lg:px-10 pointer-events-auto rounded-2xl ${scrolled ? 'max-w-[1100px] h-20' : 'max-w-[1320px] h-24'}`}>
          
          {/* LOGO */}
          <div className="flex-shrink-0 cursor-pointer group hover:scale-105 transition-transform duration-300">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4b6cb7] to-[#8a2387] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_15px_rgba(138,35,135,0.4)] transition-all">
                <span className="text-white font-black text-lg">V</span>
              </div>
              <span className={`font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#4b6cb7] to-[#8a2387] tracking-tight transition-all duration-500 ${scrolled ? 'text-2xl' : 'text-3xl'}`}>
                VNR Media
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden xl:flex items-center space-x-2">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={index} 
                  to={item.path} 
                  className={`relative group px-6 py-3 rounded-xl text-base font-bold transition-all duration-300 ${isActive ? 'text-[#5a67d8]' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Hover Pill Background - Changed to rounded-xl to match */}
                  <div className={`absolute inset-0 bg-white rounded-xl shadow-sm scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out -z-0 ${isActive ? 'scale-100 opacity-100 bg-[#f0f4ff]' : ''}`}></div>
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE CTA BUTTON */}
          <div className="hidden xl:flex items-center">
            <Link to="/contact">
              <button className="bg-gradient-to-r from-[#4b6cb7] to-[#8a2387] text-white px-8 py-3.5 rounded-xl text-base font-black tracking-wide shadow-md hover:shadow-[0_5px_20px_rgba(138,35,135,0.4)] hover:-translate-y-0.5 transition-all duration-300">
                Let's Talk
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* ================= MOBILE OVERLAY MENU ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl xl:hidden flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-8 text-center w-full px-8">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.path} 
                className={`text-4xl font-black transition-colors ${location.pathname === item.path ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]' : 'text-gray-800 hover:text-[#5a67d8]'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-10">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-gradient-to-r from-[#4b6cb7] to-[#8a2387] text-white px-8 py-5 rounded-2xl text-2xl font-black shadow-xl">
                  Start a Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}