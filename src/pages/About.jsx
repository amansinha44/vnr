import React from 'react';

export default function About() {
  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-[#5a67d8]/30 selection:text-[#1d1d1f]">
      
      {/* ================= SHARED BACKGROUND GLOW (From Home Page) ================= */}
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
      <div className="relative z-10 pt-32 pb-24 space-y-24">

        {/* --- SECTION 1: WHO WE ARE (GLASS BENTO GRID) --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="w-full bg-white/50 backdrop-blur-2xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-xl p-8 md:p-12 lg:p-14">
            
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 relative z-10">
              
              {/* Box 1: Main Text (Left Side) */}
              <div className="xl:col-span-7 bg-white/60 backdrop-blur-lg rounded-md p-8 md:p-12 border border-white shadow-sm flex flex-col justify-center relative overflow-hidden group">
                {/* Subtle Inner Glow */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#fbc2eb]/30 rounded-xl blur-[40px] group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <span className="inline-block px-5 py-2 rounded-md bg-white/80 border border-white text-[#5a67d8] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                    About Us
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1a1a2e] tracking-tight leading-[1.1] mb-6">
                    Who We Are
                  </h1>
                  <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-8">
                    VNR Digital Media House is a creative and performance-focused digital marketing agency built with a simple belief:
                  </p>
                  
                  {/* Glass Quote Box */}
                  <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-l-4 border-l-[#8a2387]">
                    {/* CHANGED TEXT GRADIENT HERE */}
                    <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d]">
                      "Every business touches human life."
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 2: Image & Role Box (Right Side) */}
              <div className="xl:col-span-5 flex flex-col gap-8">
                {/* High-End Image Container */}
                <div className="flex-grow rounded-xl overflow-hidden relative shadow-sm border border-white/60 group min-h-[300px]">
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-[#1a1a2e]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                     <h3 className="text-white text-2xl font-black mb-2">Our Role?</h3>
                     <p className="text-slate-200 text-sm md:text-base font-medium">
                       To make sure these businesses are seen, trusted, and chosen.
                     </p>
                  </div>
                </div>
                
                {/* Secondary Glass Text Box */}
                <div className="bg-white/60 backdrop-blur-lg rounded-md p-8 shadow-sm border border-white relative overflow-hidden">
                  <p className="relative z-10 text-lg md:text-xl font-bold text-slate-800 leading-relaxed">
                    We combine <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5a67d8] to-blue-500 font-black">strategy</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#8a2387] font-black">storytelling</span>, <span className="text-[#5a67d8] font-black">design</span>, and <span className="text-[#8a2387] font-black">data</span> to help brands grow with clarity and consistency.
                  </p>
                </div>
              </div>

               {/* Box 3: Industries Impact (Full Width Bottom) */}
<div className="xl:col-span-12 bg-white/60 backdrop-blur-lg rounded-xl p-6 md:p-10 border border-white shadow-sm mt-4">
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
    {[
      { text: "A hospital heals", icon: "🏥", color: "text-rose-600", glow: "shadow-[0_0_20px_rgba(225,29,72,0.3)]" },
      { text: "A school shapes futures", icon: "🎓", color: "text-amber-600", glow: "shadow-[0_0_20px_rgba(217,119,6,0.3)]" },
      { text: "Jewellery celebrates love", icon: "💎", color: "text-fuchsia-600", glow: "shadow-[0_0_20px_rgba(192,38,211,0.3)]" },
      { text: "A hotel hosts memories", icon: "🏨", color: "text-indigo-600", glow: "shadow-[0_0_20px_rgba(79,70,229,0.3)]" },
      { text: "A home builds dreams", icon: "🏠", color: "text-teal-600", glow: "shadow-[0_0_20px_rgba(13,148,136,0.3)]" },
      { text: "Technology moves us", icon: "🚗", color: "text-blue-600", glow: "shadow-[0_0_20px_rgba(37,99,235,0.3)]" },
      { text: "Solar powers tomorrow", icon: "☀️", color: "text-orange-500", glow: "shadow-[0_0_20px_rgba(249,115,22,0.3)]" }
    ].map((item, idx) => (
<div key={idx} className={`bg-white rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-4 border border-slate-100 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300 group ${item.boxHover}`}>        
        {/* === DARK TRANSLUCENT ICON WITH 1 SLOW SPINNING DOT === */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          
          

          {/* Dark, Translucent & Glowing Background Circle */}
          <div className={`absolute inset-[3px] bg-[#0ff01fb]/70 backdrop-blur-md rounded-full flex items-center justify-center z-10 border border-white/20 transition-colors ${item.glow} group-hover:bg-[#0f172a]/80`}>
            <span className="text-2xl relative z-20 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </span>
          </div>

        </div>

                      <span className={`text-xs font-bold leading-tight ${item.color}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SECTION 2: OUR PHILOSOPHY (THE LIFE TIMELINE) --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-32">
          
          <div className="text-center max-w-4xl mx-auto mb-20 relative">
            <span className="inline-block py-1.5 px-4 rounded-xl bg-white/60 backdrop-blur-md border border-white text-[#8a2387] text-[10px] font-black tracking-[0.3em] uppercase mb-6 shadow-sm">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a2e] leading-[1.1] tracking-tight mb-8">
              Because Marketing Should <br className="hidden md:block"/>
              {/* CHANGED TEXT GRADIENT HERE */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d]">Follow Life.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Look at life closely. Life moves. Needs evolve. <br className="hidden md:block"/>
              And we proudly partner with the industries that shape these moments.
            </p>
          </div>

          {/* GLASS TIMELINE CONTAINER */}
          <div className="relative w-full max-w-5xl mx-auto bg-white/40 backdrop-blur-2xl border border-white rounded-xl p-10 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            
            {/* The Central Gradient Line */}
            <div className="absolute left-[38px] md:left-1/2 top-10 bottom-10 w-1.5 bg-gradient-to-b from-[#5a67d8]/30 via-[#8a2387]/40 to-transparent md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-16 relative z-10">
              
              {/* Timeline Node 1: Birth */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right pl-20 md:pl-0 pr-0 md:pr-12">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-2 transition-colors group-hover:text-[#5a67d8]">
                    A child is born in a hospital.
                  </h3>
                </div>
                {/* Glowing Node */}
                <div className="absolute left-[-2px] md:left-1/2 top-1 md:top-1/2 w-8 h-8 bg-white border-4 border-[#5a67d8] rounded-full md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(90,103,216,0.4)] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-5/12 pl-20 md:pl-12 hidden md:block">
                  <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-white opacity-40 group-hover:opacity-100 transition-opacity">🏥</div>
                </div>
              </div>

              {/* Timeline Node 2: Education */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-right pr-12 hidden md:block flex justify-end">
                   <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-white opacity-40 group-hover:opacity-100 transition-opacity ml-auto">🎓</div>
                </div>
                <div className="absolute left-[-2px] md:left-1/2 top-1 md:top-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-5/12 pl-20 md:pl-12 text-left">
                  <h3 className="text-2xl md:text-3xl font-black text-blue-600 mb-2">
                    They step into education.
                  </h3>
                </div>
              </div>

              {/* Timeline Node 3: Relationships */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right pl-20 md:pl-0 pr-0 md:pr-12">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-2 transition-colors group-hover:text-purple-500">
                    They celebrate milestones.
                  </h3>
                  <p className="text-lg font-bold text-slate-500">They build relationships.</p>
                </div>
                <div className="absolute left-[-2px] md:left-1/2 top-1 md:top-1/2 w-8 h-8 bg-white border-4 border-purple-500 rounded-full md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-5/12 pl-20 md:pl-12 hidden md:block">
                  <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-white opacity-40 group-hover:opacity-100 transition-opacity">✨</div>
                </div>
              </div>

              {/* Timeline Node 4: Weddings */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-right pr-12 hidden md:block">
                  <div className="flex justify-end gap-3">
                     <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-white opacity-40 group-hover:opacity-100 transition-opacity">💍</div>
                     <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-white opacity-40 group-hover:opacity-100 transition-opacity">🎉</div>
                  </div>
                </div>
                <div className="absolute left-[-2px] md:left-1/2 top-1 md:top-1/2 w-8 h-8 bg-white border-4 border-[#8a2387] rounded-full md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(138,35,135,0.4)] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-5/12 pl-20 md:pl-12 text-left">
                  <h3 className="text-2xl md:text-3xl font-black text-[#8a2387] mb-2">
                    They plan weddings.
                  </h3>
                  <p className="text-lg font-bold text-slate-500">They choose jewellery.</p>
                </div>
              </div>

              {/* Timeline Node 5: The Future */}
              <div className="relative flex flex-col md:flex-row items-start justify-between group pt-8">
                <div className="md:w-5/12 text-left md:text-right pl-20 md:pl-0 pr-0 md:pr-12 pt-2">
                  <h3 className="text-xl md:text-2xl font-black text-slate-400 uppercase tracking-widest">
                    As life expands...
                  </h3>
                </div>
                
                <div className="absolute left-[-2px] md:left-1/2 top-4 w-8 h-8 bg-white border-4 border-slate-300 rounded-full md:-translate-x-1/2 shadow-sm"></div>
                
                <div className="md:w-5/12 pl-20 md:pl-12 text-left">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl md:text-2xl font-black text-slate-800 bg-white/60 w-fit px-4 py-1.5 rounded-lg shadow-sm border border-white">They host events.</span>
                    <span className="text-xl md:text-2xl font-black text-slate-800 bg-white/60 w-fit px-4 py-1.5 rounded-lg shadow-sm border border-white">They book hotels.</span>
                    <span className="text-xl md:text-2xl font-black text-slate-800 bg-white/60 w-fit px-4 py-1.5 rounded-lg shadow-sm border border-white">They buy homes.</span>
                    <span className="text-xl md:text-2xl font-black text-slate-800 bg-white/60 w-fit px-4 py-1.5 rounded-lg shadow-sm border border-white">Adopt new mobility.</span>
                    {/* CHANGED TEXT GRADIENT HERE */}
                    <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d] pt-4 mt-2 block">
                      They invest in sustainability.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SECTION 3: THE GRAND FINALE (COMPACT & DARK NEON) --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-24 mb-16 relative">
          
          <div className="relative w-full h-auto md:h-[140px] bg-[#0b101e] rounded-xl p-6 md:px-12 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,242,254,0.1)] border border-white/5">
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_right,#000_30%,transparent_100%)]"></div>
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[100px] bg-[#00f2fe]/20 blur-[50px] rounded-xl pointer-events-none"></div>

            <div className="relative z-10 text-center md:text-left mb-6 md:mb-0 w-full md:w-auto">
              <span className="block text-[#00f2fe] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(0,242,254,0.6)] mb-2">
                The Endgame
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#3b82f6] drop-shadow-[0_0_15px_rgba(0,242,254,0.4)]">Life-Cycle Brand Building?</span>
              </h2>
            </div>
            
            <div className="relative z-10 flex-shrink-0">
              <button className="px-8 py-3.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/40 text-[#00f2fe] font-bold text-sm md:text-base tracking-wide hover:bg-[#00f2fe] hover:text-[#0b101e] hover:shadow-[0_0_25px_rgba(0,242,254,0.6)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
                Start Your Journey
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}