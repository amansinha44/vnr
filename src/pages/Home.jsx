import React from 'react';

export default function Home() {
  const testimonials = [
    {
      industry: "Healthcare",
      quote: "Working with VNR completely transformed our hospital’s digital presence. Everything felt structured and deeply professional.",
      author: "Hospital Management",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      industry: "Education",
      quote: "Admissions improved significantly after VNR redesigned our campaigns. They know exactly how to talk to students and parents.",
      author: "Director, Educational Institute",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop"
    },
    {
      industry: "Jewellery",
      quote: "They didn’t just promote collections. They built emotion around our brand. The creatives truly reflected our luxury identity.",
      author: "Jewellery Brand Owner",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop"
    },
    {
      industry: "Hospitality",
      quote: "Our bookings and online visibility increased noticeably. Their content strategy made our property look incredibly premium.",
      author: "Hotel Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop"
    },
    {
      industry: "Real Estate",
      quote: "Lead generation became predictable. VNR helped us move from random marketing to a high-converting system.",
      author: "Real Estate Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2069&auto=format&fit=crop"
    },
    {
      industry: "E-Mobility",
      quote: "Their campaigns clearly explained our product benefits. We saw better engagement and highly qualified enquiries.",
      author: "EV Brand Marketing Head",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-[#f8faff] min-h-screen font-sans selection:bg-[#5a67d8] selection:text-white">
      
      {/* ================= HERO SECTION (Kept the same as you liked it) ================= */}
      <section aria-label="Digital Marketing Hero Section" className="relative w-full min-h-[90vh] flex items-center justify-center p-4 md:p-8 overflow-hidden bg-gradient-to-br from-[#f4f7ff] via-white to-[#faf5ff]">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#4b6cb7] opacity-15 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8a2387] opacity-15 rounded-full blur-[100px] animate-[pulse_12s_ease-in-out_infinite]"></div>

        <div className="relative z-10 w-full max-w-[1320px] mx-auto bg-white/75 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-white p-6 md:p-10 lg:p-12 flex flex-col mt-20 md:mt-0">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-8 w-full">
               <div className="inline-block px-4 py-1.5 rounded-full bg-[#f0f4ff] border border-[#dbe4ff] text-[#5a67d8] text-sm font-bold tracking-wide uppercase">
                 Life-Cycle Brand Building
               </div>
               <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                 Networking Lives, <br/>
                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">Digitally</span>
               </h1>
               <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed border-l-4 border-[#5a67d8] pl-4">
                 We help brands connect with people through strategy, creativity, and performance-driven digital marketing.
               </h2>
               <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                 In today’s digital world, visibility is survival. Relevance is growth. Trust is everything. At VNR Digital Media House, we build marketing systems that create all three.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#5a67d8] to-[#9f7aea] text-white font-bold text-lg shadow-[0_4px_14px_0_rgba(90,103,216,0.39)] hover:shadow-[0_6px_20px_rgba(90,103,216,0.23)] hover:-translate-y-0.5 transition-all duration-300">
                   Let’s Work Together
                 </button>
                 <button className="px-8 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold text-lg shadow-sm hover:bg-gray-50 transition-all duration-300">
                   Maybe Later
                 </button>
               </div>
             </div>
             <div className="relative hidden lg:block rounded-xl overflow-hidden shadow-2xl border-[6px] border-white bg-gray-100">
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="VNR Digital Media" className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-[10s] ease-in-out" />
               <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-[#f0f4ff] flex items-center justify-center text-[#5a67d8]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-semibold uppercase">Performance</p>
                   <p className="text-lg font-extrabold text-gray-900">Data-Driven ROI</p>
                 </div>
               </div>
             </div>
           </div>

           <div className="mt-16 pt-8 border-t border-gray-100 w-full">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 text-center">Industries We Empower</p>
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6 text-sm md:text-base font-bold w-full">
                <span className="bg-rose-50 text-rose-600 px-5 py-2.5 rounded-lg border border-rose-100 shadow-sm transition-transform hover:scale-105 cursor-default">Hospital</span>
                <span className="text-gray-300">→</span>
                <span className="bg-amber-50 text-amber-600 px-5 py-2.5 rounded-lg border border-amber-100 shadow-sm transition-transform hover:scale-105 cursor-default">School</span>
                <span className="text-gray-300">→</span>
                <span className="bg-fuchsia-50 text-fuchsia-600 px-5 py-2.5 rounded-lg border border-fuchsia-100 shadow-sm transition-transform hover:scale-105 cursor-default">Wedding</span>
                <span className="text-gray-300">→</span>
                <span className="bg-indigo-50 text-indigo-600 px-5 py-2.5 rounded-lg border border-indigo-100 shadow-sm transition-transform hover:scale-105 cursor-default">Hotel</span>
                <span className="text-gray-300">→</span>
                <span className="bg-teal-50 text-teal-600 px-5 py-2.5 rounded-lg border border-teal-100 shadow-sm transition-transform hover:scale-105 cursor-default">Home</span>
                <span className="text-gray-300">→</span>
                <span className="bg-emerald-50 text-emerald-600 px-5 py-2.5 rounded-lg border border-emerald-100 shadow-sm transition-transform hover:scale-105 cursor-default">EV</span>
                <span className="text-gray-300">→</span>
                <span className="bg-yellow-50 text-yellow-600 px-5 py-2.5 rounded-lg border border-yellow-100 shadow-sm transition-transform hover:scale-105 cursor-default">Solar</span>
              </div>
           </div>
        </div>
      </section>

      {/* ================= BENTO BOX: WHY CHOOSE VNR (WOW FACTOR) ================= */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm font-black text-[#5a67d8] tracking-[0.3em] uppercase mb-4 block">The VNR Edge</span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Why Brands <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">Partner With Us.</span>
            </h2>
          </div>

          {/* NEXT-GEN BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            
            {/* Block 1: Big Image Background (Industry Specific) */}
            <div className="md:col-span-2 md:row-span-2 rounded-3xl relative overflow-hidden group shadow-xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Strategy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-white/30 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">Industry-Specific<br/>Expertise</h3>
                <p className="text-gray-300 font-medium">We don't do generic. We build deeply researched strategies tailored to your exact niche.</p>
              </div>
            </div>

            {/* Block 2: Solid Bold Accent (Strategy First) */}
            <div className="md:col-span-1 md:row-span-1 rounded-3xl bg-gradient-to-br from-[#1e1b4b] to-[#312e81] p-8 flex flex-col justify-end relative overflow-hidden group shadow-xl">
              <div className="absolute -right-6 -top-6 text-white/5 group-hover:text-white/10 transition-colors">
                <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z"/></svg>
              </div>
              <h3 className="text-2xl font-black text-white relative z-10 mb-2">Strategy-First <br/>Thinking</h3>
              <p className="text-indigo-200 text-sm font-medium relative z-10">Action without direction is noise.</p>
            </div>

            {/* Block 3: Light Glassmorphic (Creative + Performance) */}
            <div className="md:col-span-1 md:row-span-2 rounded-3xl bg-[#f0f4ff] border border-blue-100 p-8 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-[#8a2387] mb-8 z-10">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 z-10">Creative +<br/>Performance</h3>
              <p className="text-gray-600 text-sm font-medium z-10">Beautiful design meets ruthless data-driven ROI.</p>
            </div>

            {/* Block 4: Long Horizontal (Fast Execution) */}
            <div className="md:col-span-1 md:row-span-1 rounded-3xl bg-gradient-to-r from-[#8a2387] to-[#e94057] p-8 flex items-center shadow-xl group overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-1">Fast Execution</h3>
                <p className="text-white/80 text-sm font-medium">Agility wins markets.</p>
              </div>
            </div>

            {/* Block 5 & 6: Communication & Vision */}
            <div className="md:col-span-2 md:row-span-1 rounded-3xl bg-white border border-gray-100 shadow-xl p-8 flex items-center justify-between group">
               <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Clear Communication</h3>
                  <p className="text-gray-500 font-medium">Total transparency. No agency jargon.</p>
               </div>
               <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
               </div>
            </div>

            <div className="md:col-span-2 md:row-span-1 rounded-3xl bg-gray-900 p-8 flex flex-col justify-center shadow-xl relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] group-hover:bg-[#8a2387]/40 transition-colors duration-700"></div>
              <h3 className="text-3xl font-black text-white relative z-10">Long-term Brand Vision</h3>
              <p className="text-gray-400 font-medium mt-2 relative z-10">We don’t just run campaigns.<br/> <span className="text-[#5a67d8]">We build brand journeys.</span></p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DARK MODE FRAMEWORK (PORTFOLIO WOW FACTOR) ================= */}
      <section className="py-32 bg-[#0a0f24] relative overflow-hidden">
        {/* Neon Accents */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#4b6cb7]/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#8a2387]/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-sm font-black text-[#8a2387] tracking-[0.3em] uppercase mb-4 block">Portfolio / Our Work</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Speaks.</span>
            </h2>
            <p className="text-2xl text-gray-400 font-medium mt-6 italic">"Real brands. Real challenges. Real results."</p>
          </div>

          {/* Futuristic Process Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* The Connecting Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-indigo-500 to-gray-800 -translate-y-1/2 opacity-30"></div>

            {[
              { num: "01", title: "Problem", desc: "Identifying the core growth barriers.", color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/30" },
              { num: "02", title: "Strategy", desc: "Mapping the exact digital route to success.", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
              { num: "03", title: "Creative", desc: "Designing scroll-stopping visual assets.", color: "text-fuchsia-400", bg: "bg-fuchsia-400/10", border: "border-fuchsia-400/30" },
              { num: "04", title: "Impact", desc: "Delivering measurable leads and ROI.", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" }
            ].map((step, idx) => (
              <div key={idx} className="relative bg-[#111833] border border-gray-800 rounded-2xl p-8 hover:-translate-y-4 transition-transform duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                {/* Glowing border top */}
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${step.bg}`}></div>
                
                <span className={`text-6xl font-black ${step.color} opacity-20 group-hover:opacity-100 transition-opacity absolute top-6 right-6`}>{step.num}</span>
                
                <div className={`w-16 h-16 rounded-full ${step.bg} ${step.border} border-2 flex items-center justify-center mb-12 relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                  <div className={`w-3 h-3 rounded-full bg-current ${step.color} animate-ping`}></div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-400 font-medium relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* ================= MASSIVE MARQUEE (TESTIMONIALS) ================= */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-[1320px] mx-auto px-6 mb-20 text-center">
          <span className="text-sm font-black text-[#5a67d8] tracking-[0.3em] uppercase mb-4 block">Client Success</span>
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-tight">
            What Our             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">Clients Say.</span>
          </h2>
        </div>

        {/* Custom CSS for seamless slow marquee */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="flex w-[200%] animate-marquee gap-8 px-8 pb-10 items-center">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div key={index} className="w-[450px] md:w-[600px] flex-shrink-0 bg-[#f8faff] border border-blue-50 rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(90,103,216,0.15)] transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
              
              {/* Giant Background Quote Mark */}
              <div className="absolute -top-10 -left-6 text-[15rem] font-serif font-black text-[#4b6cb7]/5 group-hover:text-[#8a2387]/10 transition-colors duration-500 pointer-events-none select-none leading-none">
                "
              </div>

              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-100 text-[#5a67d8] font-bold text-sm tracking-widest uppercase mb-8 shadow-sm">
                  {item.industry}
                </span>
                <p className="text-xl md:text-xl text-gray-800 font-bold leading-relaxed mb-12">
                  {item.quote}
                </p>
                
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img src={item.image} alt={item.author} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full flex items-center justify-center text-white">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-gray-900">{item.author}</h4>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Verified Partner</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}