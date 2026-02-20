import React from 'react';

export default function Contact() {
  const indiaLocations = ["Lucknow", "Kanpur", "Gorakhpur", "Bareilly", "Delhi", "Punjab", "Bihar"];
  const globalLocations = ["Dubai", "Canada"];

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-[#7e22ce]/30 selection:text-[#1d1d1f] pb-20">
      
      {/* ================= BACKGROUND GLOW (Consistent Theme) ================= */}
      <div className="fixed inset-0 z-0 bg-[#f4f8fb] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#fbc2eb]/60 rounded-full blur-[140px] animate-slow-pan"></div>
        <div className="absolute top-[0%] right-[-10%] w-[50vw] h-[50vw] bg-[#a6c1ee]/60 rounded-full blur-[140px] animate-slow-pan" style={{animationDelay: '-5s'}}></div>
        <div className="absolute bottom-[-15%] left-[20%] w-[60vw] h-[60vw] bg-[#e0c3fc]/50 rounded-full blur-[150px] animate-slow-pan" style={{animationDelay: '-10s'}}></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slowPan {
          0% { transform: translate(-2%, -2%) scale(1); }
          50% { transform: translate(2%, 2%) scale(1.05); }
          100% { transform: translate(-2%, -2%) scale(1); }
        }
        .animate-slow-pan {
          animation: slowPan 15s ease-in-out infinite;
        }
      `}} />

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10 pt-32 space-y-24">

        {/* --- PRESENCE & LOCATIONS HERO --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 text-center relative">
          {/* CHANGED TEXT COLOR TO MATCH THEME */}
          <span className="inline-block py-1.5 px-4 rounded-md bg-white/60 backdrop-blur-md border border-white text-[#7e22ce] text-[10px] font-black tracking-[0.3em] uppercase mb-6 shadow-sm">
            Our Global Footprint
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#1a1a2e] leading-[1.1] tracking-tight mb-6">
            Growing Brands <br className="hidden md:block"/>
            {/* CHANGED TEXT GRADIENT HERE */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d]">Across Borders.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            From local businesses to international collaborations, our work travels.
          </p>

          {/* The Emotional Quote (Glassmorphic) */}
          <div className="mt-16 mb-20 relative w-full max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <h2 className="text-[8rem] md:text-[12rem] font-black text-[#7e22ce]/5 leading-none select-none">VNR</h2>
            </div>
            <div className="bg-white/40 backdrop-blur-xl border border-white/80 p-6 md:p-10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.03)] inline-block">
              {/* CHANGED TEXT GRADIENT HERE */}
              <p className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d] italic">
                "Because great ideas have no boundaries."
              </p>
            </div>
          </div>

          {/* Location Grids (Glass Cards) */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            
            {/* India Presence */}
            <div className="bg-white/50 backdrop-blur-2xl border border-white/80 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <h3 className="text-2xl font-black text-[#1a1a2e] mb-2 flex items-center justify-center gap-3">
                <span className="text-3xl drop-shadow-sm">📍</span> India Presence
              </h3>
              <p className="text-slate-600 mb-8 font-medium">We proudly serve clients across multiple cities and states.</p>
              <div className="flex flex-wrap justify-center gap-3 relative z-10">
                {indiaLocations.map((city, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-white text-blue-700 font-bold rounded-md shadow-sm hover:-translate-y-0.5 hover:shadow transition-all cursor-default">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Overseas Presence */}
            <div className="bg-white/50 backdrop-blur-2xl border border-white/80 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <h3 className="text-2xl font-black text-[#1a1a2e] mb-2 flex items-center justify-center gap-3">
                <span className="text-3xl drop-shadow-sm">🌎</span> Overseas Presence
              </h3>
              <p className="text-slate-600 mb-8 font-medium">Extending our creativity and strategies to global markets.</p>
              <div className="flex flex-wrap justify-center gap-3 relative z-10">
                {globalLocations.map((city, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-white text-purple-700 font-bold rounded-md shadow-sm hover:-translate-y-0.5 hover:shadow transition-all cursor-default">
                    {city}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* --- CONTACT FORM & INFO SECTION (Glassmorphic UI) --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="bg-white/50 backdrop-blur-2xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Side: Contact Form */}
            <div className="w-full lg:w-3/5 p-8 md:p-12 relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a2e] mb-2">Drop us a line</h2>
              <p className="text-slate-500 mb-10 font-bold uppercase tracking-wider text-sm">We usually respond within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/80 border border-white text-slate-800 px-5 py-3.5 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7e22ce] transition-all placeholder:text-slate-400 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Email Address</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-white/80 border border-white text-slate-800 px-5 py-3.5 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7e22ce] transition-all placeholder:text-slate-400 font-medium" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full bg-white/80 border border-white text-slate-800 px-5 py-3.5 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7e22ce] transition-all placeholder:text-slate-400 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Service</label>
                    <select className="w-full bg-white/80 border border-white text-slate-800 px-5 py-3.5 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7e22ce] transition-all appearance-none font-medium">
                      <option>Digital Strategy</option>
                      <option>Performance Ads</option>
                      <option>Social Media</option>
                      <option>Video & Reels</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Your Message</label>
                  <textarea rows="4" placeholder="Tell us about your brand and goals..." className="w-full bg-white/80 border border-white text-slate-800 px-5 py-3.5 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7e22ce] transition-all resize-none placeholder:text-slate-400 font-medium"></textarea>
                </div>

                {/* CHANGED BUTTON GRADIENT HERE */}
                <button type="button" className="w-full py-4 rounded-md bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d] text-white font-bold text-lg shadow-[0_8px_20px_rgba(126,34,206,0.3)] hover:shadow-[0_12px_25px_rgba(126,34,206,0.4)] hover:-translate-y-0.5 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side: Contact Info Cards */}
            {/* CHANGED BACKGROUND GRADIENT TO MATCH THE THEME */}
            <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#4338ca] to-[#be185d] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
              
              <h3 className="text-3xl font-black mb-10 relative z-10 drop-shadow-sm">Reach Out Directly</h3>
              
              <div className="space-y-8 relative z-10">
                {/* Phone Card */}
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#4338ca] transition-colors shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-white/70 font-black text-[10px] uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-xl font-bold tracking-wide">+91 98765 XXXXX</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#7e22ce] transition-colors shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-white/70 font-black text-[10px] uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-bold tracking-wide">hello@vnrmedia.com</p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#be185d] transition-colors shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-white/70 font-black text-[10px] uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="text-base font-medium leading-relaxed">VNR Digital Media House<br/>Lucknow, UP, India</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* --- SECTION: THE GRAND FINALE (DEEP SEA BLUE THEME) --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-32 mb-16 relative">
          <div className="relative w-full h-auto md:h-[140px] bg-gradient-to-r from-[#0369a1] to-[#0ea5e9] rounded-md p-6 md:px-12 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-[0_15px_40px_rgba(14,165,233,0.3)] group">
            
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_right,#000_30%,transparent_100%)]"></div>

            {/* Glowing Deep Blue Aura */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[100px] bg-white/20 blur-[40px] rounded-md pointer-events-none group-hover:bg-white/30 transition-colors duration-500"></div>

            {/* Left Side: Text Content */}
            <div className="relative z-10 text-center md:text-left mb-6 md:mb-0 w-full md:w-auto flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-none mb-2">
                Let's Grow Your Brand
              </h2>
              <p className="text-white/90 text-sm md:text-base font-medium drop-shadow-sm">
                Whether you’re building trust, attracting customers, or launching something new, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-100 to-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">we’re ready.</span>
              </p>
            </div>
            
            {/* Right Side: Button */}
            <div className="relative z-10 flex-shrink-0 md:ml-8">
              <button className="px-8 py-3.5 rounded-md bg-[#082f49] border border-[#082f49] text-sky-400 font-bold text-sm md:text-base tracking-wide hover:bg-[#0c4a6e] hover:border-[#0c4a6e] hover:text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
                Start a Conversation
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}