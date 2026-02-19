import React from 'react';

export default function About() {
  return (
    <article className="w-full bg-[#fafbfc] font-sans text-gray-900 py-12 md:py-20 px-4 sm:px-6 lg:px-8 selection:bg-[#5a67d8] selection:text-white">
      
      {/* Container updated to max-w-[1320px] */}
      <div className="max-w-[1320px] mx-auto space-y-12 md:space-y-20">

        {/* ================= SECTION 1: WHO WE ARE (PREMIUM BENTO GRID) ================= */}
        <section aria-label="Who We Are" className="bg-white rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-gray-100 relative overflow-hidden">
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 relative z-10">
            
            {/* Box 1: Main Text */}
            <div className="xl:col-span-7 bg-gradient-to-br from-[#f2f5ff] to-[#f8f5ff] rounded-[2rem] p-8 md:p-12 border border-white shadow-inner flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/60 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#dbe4ff] text-[#5a67d8] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                  About Us
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
                  Who We Are
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-6">
                  VNR Digital Media House is a creative and performance-focused digital marketing agency built with a simple belief:
                </p>
                <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#5a67d8]">
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">
                    "Every business touches human life."
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Image & Role Box */}
            <div className="xl:col-span-5 flex flex-col gap-6">
              <div className="flex-grow rounded-[2rem] overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] group min-h-[250px]">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <h3 className="text-white text-2xl font-bold mb-2">Our Role?</h3>
                   <p className="text-gray-200 text-sm md:text-base font-medium">
                     To make sure these businesses are seen, trusted, and chosen.
                   </p>
                </div>
              </div>
              
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
                <p className="relative z-10 text-lg md:text-xl font-bold text-gray-800 leading-snug">
                  We combine <span className="text-[#5a67d8]">strategy</span>, <span className="text-[#8a2387]">storytelling</span>, <span className="text-[#5a67d8]">design</span>, and <span className="text-[#8a2387]">data</span> to help brands grow with clarity and consistency.
                </p>
              </div>
            </div>

            {/* Box 3: Industries Impact (Tiny Bottom Boxes) */}
            <div className="xl:col-span-12 bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {[
                    { text: "A hospital heals", icon: "🏥", color: "bg-rose-50 text-rose-700 border-rose-100" },
                    { text: "A school shapes futures", icon: "🎓", color: "bg-amber-50 text-amber-700 border-amber-100" },
                    { text: "Jewellery celebrates love", icon: "💎", color: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100" },
                    { text: "A hotel hosts memories", icon: "🏨", color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
                    { text: "A home builds dreams", icon: "🏠", color: "bg-teal-50 text-teal-700 border-teal-100" },
                    { text: "Technology moves us", icon: "🚗", color: "bg-blue-50 text-blue-700 border-blue-100" },
                    { text: "Solar powers tomorrow", icon: "☀️", color: "bg-yellow-50 text-yellow-700 border-yellow-100" }
                  ].map((item, idx) => (
                    <div key={idx} className={`rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 border shadow-sm ${item.color} hover:-translate-y-1 transition-transform duration-300`}>
                      <span className="text-3xl bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">{item.icon}</span>
                      <span className="text-xs font-bold leading-tight">{item.text}</span>
                    </div>
                  ))}
               </div>
            </div>

          </div>
        </section>

      </div>

      {/* ================= SECTION 2: OUR PHILOSOPHY (THE LIFE TIMELINE) ================= */}
      {/* We apply my-12 to space it well with the above layout */}
      <section aria-label="Our Philosophy" className="relative py-20 md:py-32 mt-12 md:mt-20 bg-white border-y border-gray-100 overflow-hidden">
        
        {/* Soft Background Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#f2f5ff] to-transparent rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#fbfaff] to-transparent rounded-full blur-[100px] -z-10"></div>

        {/* Container updated to max-w-[1320px] */}
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
            <span className="text-[#8a2387] text-sm font-extrabold tracking-[0.2em] uppercase mb-6 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8">
              Because Marketing Should <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">Follow Life.</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Look at life closely. Life moves. Needs evolve. <br className="hidden md:block"/>
              And we proudly partner with the industries that shape these moments.
            </p>
          </div>

          {/* ============ THE TIMELINE ============ */}
          {/* Timeline text width kept at 5xl for reading optimization, but inside 1320px parent */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* The Central Line (Responsive: Left on mobile, Center on PC) */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4b6cb7]/20 via-[#8a2387]/30 to-transparent md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-16 md:space-y-24 relative z-10">
              
              {/* Timeline Node 1: Birth */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right pl-20 md:pl-0 pr-0 md:pr-12">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 transition-colors group-hover:text-[#4b6cb7]">
                    A child is born in a hospital.
                  </h3>
                </div>
                {/* Glowing Dot */}
                <div className="absolute left-[16px] md:left-1/2 top-2 md:top-1/2 w-7 h-7 bg-white border-4 border-[#4b6cb7] rounded-full md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(75,108,183,0.4)] group-hover:scale-125 transition-transform duration-300 flex items-center justify-center"></div>
                <div className="md:w-5/12 pl-20 md:pl-12 hidden md:block">
                  <span className="text-5xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">🏥</span>
                </div>
              </div>

              {/* Timeline Node 2: Education */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-right pr-12 hidden md:block">
                  <span className="text-5xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">🎓</span>
                </div>
                <div className="absolute left-[16px] md:left-1/2 top-2 md:top-1/2 w-7 h-7 bg-white border-4 border-[#5a67d8] rounded-full md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(90,103,216,0.4)] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-5/12 pl-20 md:pl-12 text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#5a67d8] mb-2">
                    They step into education.
                  </h3>
                </div>
              </div>

              {/* Timeline Node 3: Milestones & Relationships */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right pl-20 md:pl-0 pr-0 md:pr-12">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 transition-colors group-hover:text-[#8a2387]">
                    They celebrate milestones.
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-gray-500">They build relationships.</p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 top-2 md:top-1/2 w-7 h-7 bg-white border-4 border-[#8a2387] rounded-full md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(138,35,135,0.4)] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-5/12 pl-20 md:pl-12 hidden md:block">
                  <span className="text-5xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">✨</span>
                </div>
              </div>

              {/* Timeline Node 4: Weddings */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-right pr-12 hidden md:block">
                  <div className="flex justify-end gap-4">
                     <span className="text-5xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">💍</span>
                     <span className="text-5xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">🎉</span>
                  </div>
                </div>
                <div className="absolute left-[16px] md:left-1/2 top-2 md:top-1/2 w-7 h-7 bg-white border-4 border-[#9f7aea] rounded-full md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(159,122,234,0.4)] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-5/12 pl-20 md:pl-12 text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#9f7aea] mb-2">
                    They plan weddings.
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-gray-500">They choose jewellery.</p>
                </div>
              </div>

              {/* Timeline Node 5: Expansion (The future) */}
              <div className="relative flex flex-col md:flex-row items-start justify-between group pt-8">
                <div className="md:w-5/12 text-left md:text-right pl-20 md:pl-0 pr-0 md:pr-12 pt-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-400 uppercase tracking-widest">
                    As life expands...
                  </h3>
                </div>
                
                <div className="absolute left-[16px] md:left-1/2 top-2 w-7 h-7 bg-white border-4 border-gray-300 rounded-full md:-translate-x-1/2 shadow-[0_0_15px_rgba(0,0,0,0.1)]"></div>
                
                {/* Final step contains all the tags */}
                <div className="md:w-5/12 pl-20 md:pl-12 text-left">
                  <div className="flex flex-col gap-4">
                    <span className="text-2xl md:text-3xl font-extrabold text-gray-800">They host events.</span>
                    <span className="text-2xl md:text-3xl font-extrabold text-gray-800">They book hotels.</span>
                    <span className="text-2xl md:text-3xl font-extrabold text-gray-800">They buy homes.</span>
                    <span className="text-2xl md:text-3xl font-extrabold text-gray-800">They adopt new mobility.</span>
                    <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5a67d8] to-[#8a2387] pt-4 border-t border-gray-100 mt-2 block">
                      They invest in sustainability.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: FULL WIDTH CLOSING LINE ================= */}
      <section className="w-full bg-gradient-to-r from-[#5a67d8] via-[#7b4397] to-[#8a2387] py-15 md:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        
        {/* Container updated to max-w-[1320px] inside full-width section */}
        <div className="relative z-10 max-w-[1320px] mx-auto space-y-8">
          <p className="text-xl md:text-3xl text-white/80 font-bold tracking-[0.2em] uppercase">
            This is not just marketing.
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[1.1] tracking-tight drop-shadow-xl">
            This is Life-Cycle <br className="hidden md:block" /> Brand Building.
          </h2>
        </div>
      </section>

    </article>
  );
}