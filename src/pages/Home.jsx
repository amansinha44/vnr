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
      industry: "Real Estate",
      quote: "Lead generation became predictable. VNR helped us move from random marketing to a high-converting system.",
      author: "Real Estate Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  // New Darker, Richer Gradient for Text & Buttons
  const darkGradientClass = "bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d]";
  const darkTextGradientClass = "text-transparent bg-clip-text bg-gradient-to-r from-[#4338ca] via-[#7e22ce] to-[#be185d]";
  const solidAccentColor = "text-[#7e22ce]"; // A solid rich purple for smaller tags

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-[#7e22ce]/30 selection:text-[#1d1d1f]">
      
      {/* ================= ORIGINAL BACKGROUND GLOW (RESTORED) ================= */}
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
        @keyframes scrollDesktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-300px * 4 - 24px * 4)); }
        }
        @keyframes scrollMobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-280px * 4 - 16px * 4)); }
        }
        .animate-scroll {
          animation: scrollDesktop 20s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scrollMobile 12s linear infinite;
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10 pt-32 pb-24 space-y-24 overflow-hidden">

        {/* --- HERO SECTION --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="w-full bg-white/50 backdrop-blur-2xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-2xl p-8 md:p-12">
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
              
              {/* Left Content */}
              <div className="space-y-6">
                <div className={`inline-block px-4 py-1.5 rounded-lg bg-white/80 border border-white ${solidAccentColor} text-xs font-bold tracking-widest uppercase shadow-sm`}>
                  Life-Cycle Brand Building
                </div>
                
                <h1 className="text-5xl md:text-6xl font-black text-slate-800 leading-[1.1] tracking-tight">
                  Networking <br/> Lives, <br/>
                  {/* === DARKER VIBRANT GRADIENT TEXT === */}
                  <span className={darkTextGradientClass}>Digitally.</span>
                </h1>
                
                <div className="pl-4 border-l-4 border-[#7e22ce]/40">
                  <p className="text-lg md:text-xl text-slate-700 font-semibold leading-relaxed max-w-lg">
                    We help brands connect with people through strategy, creativity, and performance-driven digital marketing.
                  </p>
                </div>
                
                <p className="text-sm md:text-base text-slate-600 font-medium max-w-lg leading-relaxed">
                  In today’s digital world, visibility is survival. Relevance is growth. Trust is everything. At VNR Digital Media House, we build marketing systems that create all three.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {/* === DARKER VIBRANT GRADIENT BUTTON === */}
                  <button className={`px-8 py-3.5 rounded-md ${darkGradientClass} text-white font-bold text-base shadow-[0_8px_20px_rgba(126,34,206,0.3)] hover:shadow-[0_12px_25px_rgba(126,34,206,0.4)] hover:-translate-y-0.5 transition-all duration-300`}>
                    Let’s Work Together
                  </button>
                </div>
              </div>

              {/* Right Image Frame */}
              <div className="relative w-full">
                <div className="bg-white/50 backdrop-blur-lg border border-white p-3 rounded-2xl shadow-sm">
                  <div className="rounded-xl overflow-hidden relative border border-white/60">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                      alt="VNR Performance" 
                      className="w-full h-[350px] md:h-[420px] object-cover hover:scale-105 transition-transform duration-[10s] ease-out" 
                    />
                    
                    {/* Glowing Floating Badge */}
                    <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-xl border border-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                      {/* === DARKER GRADIENT ICON === */}
                      <div className={`w-10 h-10 rounded-lg ${darkGradientClass} flex items-center justify-center text-white shadow-sm`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Performance</p>
                        <p className="text-sm font-black text-slate-800">Data-Driven ROI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Tags */}
            <div className="w-full relative mt-12 pt-8 border-t border-white/60">
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes flowRight {
                  0% { transform: translateX(-5px); opacity: 0; }
                  50% { transform: translateX(0px); opacity: 1; }
                  100% { transform: translateX(5px); opacity: 0; }
                }
                .animate-flow-right {
                  animation: flowRight 1.5s infinite;
                }
              `}} />
              
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 w-full">
                {[
                  { name: "Hospital", color: "text-rose-700" },
                  { name: "School", color: "text-amber-700" },
                  { name: "Wedding", color: "text-fuchsia-700" },
                  { name: "Hotel", color: "text-indigo-700" },
                  { name: "Home", color: "text-teal-700" },
                  { name: "EV", color: "text-emerald-700" },
                  { name: "Solar", color: "text-orange-700" }
                ].map((item, idx, arr) => (
                  <React.Fragment key={idx}>
                    {/* Made tag text slightly darker for better contrast */}
                    <span className={`relative px-4 py-2 rounded-lg bg-white/80 border border-white shadow-sm text-xs font-bold ${item.color} cursor-default hover:bg-white hover:shadow-md hover:scale-105 transition-all z-10`}>
                      {item.name}
                    </span>
                    {idx !== arr.length - 1 && (
                      <div className="flex items-center justify-center text-slate-400/70">
                        <svg className="w-4 h-4 animate-flow-right" style={{ animationDelay: `${idx * 0.15}s` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* --- WHY CHOOSE US --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-purple-400/20 blur-[60px] -z-10 pointer-events-none"></div>
            
            <span className={`inline-block py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-md border border-white ${solidAccentColor} text-[10px] font-black tracking-[0.3em] uppercase mb-5 shadow-sm`}>
              The VNR Advantage
            </span>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a2e] tracking-tighter leading-tight">
              Why Brands <br className="md:hidden" />
              <span className="relative inline-block mt-1 md:mt-0 md:ml-3">
                {/* Darker, richer glow behind text */}
                <span className="absolute -inset-2 bg-gradient-to-r from-[#4338ca]/30 via-[#7e22ce]/30 to-[#be185d]/30 blur-xl opacity-30"></span>
                {/* === DARKER VIBRANT GRADIENT TEXT === */}
                <span className={`relative ${darkTextGradientClass}`}>Partner With Us.</span>
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Industry-specific expertise", icon: "🎯", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { title: "Creative + performance balance", icon: "⚖️", image: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { title: "Fast execution", icon: "⚡", image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { title: "Clear communication", icon: "💬", image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { title: "Strategy-first thinking", icon: "🧠", image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { title: "Long-term brand vision", icon: "👁️", image: "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ].map((point, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-xl border border-white rounded-xl overflow-hidden flex flex-col shadow-sm hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="w-full h-48 relative overflow-hidden">
                  <img src={point.image} alt={point.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[8s] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6 flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-white border border-white/50 flex items-center justify-center text-2xl shadow-sm flex-shrink-0 relative -mt-10 z-10 group-hover:-translate-y-1 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 leading-snug">{point.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-16 relative mt-24">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-purple-400/20 blur-[60px] -z-10 pointer-events-none"></div>
            
            <span className={`inline-block py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-md border border-white ${solidAccentColor} text-[10px] font-black tracking-[0.3em] uppercase mb-5 shadow-sm`}>
              The VNR Standard
            </span>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a2e] tracking-tighter leading-tight">
              We don’t just run campaigns. <br className="md:hidden" />
              <span className="relative inline-block mt-1 md:mt-0 md:ml-3">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#4338ca]/30 via-[#7e22ce]/30 to-[#be185d]/30 blur-xl opacity-30"></span>
                {/* === DARKER VIBRANT GRADIENT TEXT === */}
                <span className={`relative ${darkTextGradientClass}`}>We build brand journeys.</span>
              </span>
            </h2>
          </div>
        </section>

        {/* --- PORTFOLIO --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="bg-white/60 backdrop-blur-xl border border-white rounded-xl p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.03)] text-center">
            
            <span className={`text-xs font-bold ${solidAccentColor} tracking-[0.3em] uppercase mb-4 block`}>Portfolio / Our Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a2e] mb-4">Our Work Speaks</h2>
            <p className="text-lg text-slate-600 font-semibold italic mb-12">"Real brands. Real challenges. Real results."</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 w-full max-w-4xl mx-auto">
              <div className="flex-1 w-full bg-white px-6 py-4 rounded-xl border border-white shadow-sm font-bold text-slate-700 text-sm">Problem</div>
              <span className="text-lg text-slate-400 rotate-90 md:rotate-0">→</span>
              <div className={`flex-1 w-full bg-white px-6 py-4 rounded-xl border border-white shadow-sm font-bold ${solidAccentColor} text-sm`}>Strategy</div>
              <span className="text-lg text-slate-400 rotate-90 md:rotate-0">→</span>
              <div className="flex-1 w-full bg-white px-6 py-4 rounded-xl border border-white shadow-sm font-bold text-[#be185d] text-sm">Creative</div>
              <span className="text-lg text-slate-400 rotate-90 md:rotate-0">→</span>
              {/* === DARKER VIBRANT GRADIENT BUTTON === */}
              <div className={`flex-1 w-full ${darkGradientClass} px-6 py-4 rounded-xl shadow-md font-bold text-white text-sm`}>Impact</div>
            </div>

          </div>
        </section>

        {/* --- TESTIMONIALS (Smooth & Fast on Mobile) --- */}
        <section className="w-full relative overflow-hidden pb-12">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 text-center mb-12 relative">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#7e22ce]/50 rounded-full"></div>
              <span className={`text-[10px] font-black ${solidAccentColor} tracking-[0.3em] uppercase bg-white/50 px-3 py-1 rounded-full border border-white`}>Social Proof</span>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#be185d]/50 rounded-full"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a2e] tracking-tighter mb-6 relative inline-block">
              What Our Clients Say
              <svg className="absolute -top-6 -right-10 w-10 h-10 text-yellow-400/80 animate-[pulse_3s_ease-in-out_infinite]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.6H22l-6 4.8 2.4 7.6-6-4.8-6 4.8 2.4-7.6-6-4.8h7.6z"/></svg>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Nothing speaks louder than the <span className="text-slate-800 font-bold border-b-2 border-[#7e22ce]/40 pb-0.5">measurable impact</span> we've delivered.
            </p>
          </div>

          {/* SEAMLESS SLIDER CONTAINER */}
          <div className="w-full max-w-[1400px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-scroll gap-4 md:gap-6 py-4 px-4 hover:cursor-grab active:cursor-grabbing">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div key={index} className="w-[280px] md:w-[300px] flex-shrink-0 bg-white/60 backdrop-blur-xl border border-white rounded-xl p-6 shadow-[0_8px_20px_rgba(0,0,0,0.03)] hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
                  {/* Using solid dark purple for better visibility on tags */}
                  <span className={`inline-block px-3 py-1 rounded-md bg-white border border-white/50 ${solidAccentColor} font-bold text-[10px] uppercase tracking-widest mb-4 shadow-sm`}>
                    {item.industry}
                  </span>
                  <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto border-t border-slate-100 pt-4">
                    <img src={item.image} alt={item.author} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-xs md:text-sm">{item.author}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}