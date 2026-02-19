import React from 'react';

export default function Industries() {
  const industries = [
    {
      id: "healthcare",
      icon: "🏥",
      year: "THE BEGINNING",
      title: "Hospitals & Healthcare Marketing",
      headline: "Building Trust Where It Matters Most",
      content: "In healthcare, marketing is not about promotion. It is about reassurance, credibility, and clarity.",
      helpList: ["Hospital branding", "Doctor profile building", "Reputation & review management", "Patient acquisition campaigns", "Health awareness creatives", "Local SEO for hospitals"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
      side: "left",
      theme: "from-[#f0f7ff]/60 to-[#f8f5ff]/60" // Made translucent for Glass effect
    },
    {
      id: "education",
      icon: "🎓",
      year: "GROWTH",
      title: "Education & Institutes Marketing",
      headline: "Inspiring Futures. Driving Admissions.",
      content: "We help schools, colleges, and institutes attract students through meaningful communication and smart digital campaigns.",
      helpList: ["Admission campaigns", "Institute branding", "Social media engagement", "Student reels & videos", "Performance ads", "Website & landing pages"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      side: "right",
      theme: "from-[#fdf4ff]/60 to-[#f0f4ff]/60"
    },
    {
      id: "jewellery",
      icon: "💎",
      year: "ELEGANCE",
      title: "Jewellery Industry Marketing",
      headline: "Where Emotion Meets Elegance",
      content: "Jewellery is not just a product. It is memory, celebration, and identity.",
      helpList: ["Bridal & festive campaigns", "Collection launches", "Luxury branding", "Influencer collaborations", "High-end creatives", "Reels & visual storytelling"],
      badge: "Upcoming Major Focus",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop",
      side: "left",
      theme: "from-[#f5f3ff]/60 to-[#fdf4ff]/60"
    },
    {
      id: "solar",
      icon: "☀️",
      year: "SUSTAINABILITY",
      title: "Solar & Sustainability Brands",
      headline: "Marketing for a Greener Tomorrow",
      content: "We help solar and sustainability brands communicate value, savings, and long-term impact.",
      helpList: ["Lead generation", "Explainer campaigns", "ROI-focused ads", "Educational content"],
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
      side: "right",
      theme: "from-[#f0fdf4]/60 to-[#f0f7ff]/60"
    },
    {
      id: "ev",
      icon: "🚗",
      year: "MOVEMENT",
      title: "EV / E-Mobility Brands",
      headline: "Powering the Future of Movement",
      content: "EV brands are shaping the future of transportation. We help brands communicate innovation, reliability, and real-world benefits.",
      helpList: ["EV brand positioning", "Product launch campaigns", "Dealer & showroom marketing", "Performance ads", "Explainer videos", "Lead generation funnels"],
      quote: "Because the future deserves visibility.",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop", 
      side: "left",
      theme: "from-[#eff6ff]/60 to-[#f5f3ff]/60"
    },
    {
      id: "hotels",
      icon: "🏨",
      year: "EXPERIENCES",
      title: "Hotels & Hospitality",
      headline: "Creating Experiences Before Guests Even Arrive",
      content: "In hospitality, perception is everything. We help hotels attract guests through compelling visuals and reputation management.",
      helpList: ["Hotel branding & identity", "Social media management", "Room & property promotions", "Reputation & review management", "Booking-driven campaigns", "Website optimisation"],
      quote: "Because every stay is a story waiting to happen.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      side: "right",
      theme: "from-[#fdf2f8]/60 to-[#f0f7ff]/60"
    },
    {
      id: "marriage",
      icon: "💍",
      year: "MEMORIES",
      title: "Marriage Lawns & Event Venues",
      headline: "Where Memories Begin",
      content: "Weddings are once-in-a-lifetime moments. We help venues attract the right audience through visual storytelling.",
      helpList: ["Venue branding", "Wedding & event campaigns", "Lead generation ads", "Reels & cinematic videos", "Festive promotions", "Google & local SEO"],
      quote: "Because your venue hosts someone’s most special day.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
      side: "left",
      theme: "from-[#fff1f2]/60 to-[#f5f3ff]/60"
    },
    {
      id: "realestate",
      icon: "🏠",
      year: "DREAMS",
      title: "Real Estate & Homes",
      headline: "Selling More Than Property. Selling Dreams.",
      content: "A home is aspiration, security, and identity. We help developers generate leads and build trust through strategy-led marketing.",
      helpList: ["Real estate branding", "Project launch campaigns", "Lead generation ads", "Property videos & walkthroughs", "Social media marketing", "Local SEO & Google Ads"],
      quote: "Because every home begins as a dream.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      side: "right",
      theme: "from-[#f0f9ff]/60 to-[#fdf4ff]/60"
    }
  ];

  const tagStyles = [
    "bg-[#5a67d8]/90 backdrop-blur-sm shadow-[0_4px_12px_rgba(90,103,216,0.3)] border border-white/20",
    "bg-[#7c3aed]/90 backdrop-blur-sm shadow-[0_4px_12px_rgba(124,58,237,0.3)] border border-white/20",
    "bg-[#2563eb]/90 backdrop-blur-sm shadow-[0_4px_12px_rgba(37,99,235,0.3)] border border-white/20",
    "bg-[#0d9488]/90 backdrop-blur-sm shadow-[0_4px_12px_rgba(13,148,136,0.3)] border border-white/20",
    "bg-[#db2777]/90 backdrop-blur-sm shadow-[0_4px_12px_rgba(219,39,119,0.3)] border border-white/20",
    "bg-[#4338ca]/90 backdrop-blur-sm shadow-[0_4px_12px_rgba(67,56,202,0.3)] border border-white/20"
  ];

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-[#5a67d8]/30 selection:text-[#1d1d1f] pb-20">
      
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

        {/* --- HEADER SECTION (Width fixed to max-w-[1200px]) --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 text-center relative">
          <span className="inline-block py-1.5 px-4 rounded-xl bg-white/60 backdrop-blur-md border border-white text-[#5a67d8] text-[10px] font-black tracking-[0.3em] uppercase mb-6 shadow-sm">
            Industries We Empower
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#1a1a2e] leading-[1.1] tracking-tight mb-6">
            Marketing That <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5a67d8] to-[#8a2387]">Follows Life.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            We specialise in industries that directly influence human decisions, emotions, and lifestyles.
          </p>
        </section>

        {/* --- THE LIFE-CYCLE TIMELINE (Width fixed to max-w-[1200px]) --- */}
        <section className="relative w-full max-w-[1200px] mx-auto px-4 md:px-8">
          
          {/* Timeline Line (Hidden on mobile for pure left alignment, centered on desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5a67d8] via-[#8a2387] to-transparent -translate-x-1/2 opacity-30"></div>

          <div className="space-y-24">
            {industries.map((item) => (
              <div key={item.id} className="relative flex flex-col md:flex-row items-center group">
                
                {/* Center Node (Hidden on mobile to save space) */}
                <div className="hidden md:block absolute left-1/2 w-5 h-5 rounded-full bg-white border-4 border-[#5a67d8] -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(90,103,216,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

                {/* --- IMAGE SIDE --- */}
                {/* On mobile: full width. On desktop: 45% width. */}
                <div className={`w-full md:w-[45%] ${item.side === 'left' ? 'md:order-1' : 'md:order-2'} mb-6 md:mb-0 z-10`}>
                  <div className="relative rounded-md overflow-hidden shadow-sm border-2 border-white/80 bg-white/40 backdrop-blur-md transform transition duration-500 group-hover:scale-[1.02]">
                    <img src={item.image} alt={item.title} className="w-full h-[300px] md:h-[450px] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white pr-6">
                      <span className="text-4xl mb-3 block drop-shadow-md">{item.icon}</span>
                      <h3 className="text-2xl font-black drop-shadow-md">{item.title}</h3>
                    </div>
                  </div>
                </div>

                {/* --- CONTENT BOX SIDE --- */}
                {/* MOBILE FIX: Removed pl-16/ml-16. Used ml-2 (approx 8px gap) on mobile, pure 45% flex on desktop */}
                <div className={`w-full md:w-[45%] ${item.side === 'left' ? 'md:order-2 md:pl-16' : 'md:order-1 md:pr-16'} ml-1 md:ml-0 z-10`}>
                  
                  {/* GLASSMORPHISM BOX (Theme updated) */}
                  <div className={`p-6 md:p-10 rounded-md border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] bg-white/50 backdrop-blur-2xl bg-gradient-to-br ${item.theme} relative overflow-hidden group-hover:shadow-md transition-all duration-300`}>
                    
                    {/* Inner subtle glow */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/60 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                    
                    <div className="relative z-10 space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[#5a67d8] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase bg-white/80 px-3 py-1 rounded-md shadow-sm">{item.year}</span>
                        {item.badge && (
                          <span className="bg-gradient-to-r from-[#5a67d8] to-[#8a2387] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-sm">{item.badge}</span>
                        )}
                      </div>

                      <h2 className="text-2xl md:text-4xl font-black text-[#1a1a2e] leading-[1.1] tracking-tight">{item.headline}</h2>
                      <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed italic border-l-4 border-[#8a2387]/40 pl-4 bg-white/30 py-2 rounded-r-md">
                        "{item.content}"
                      </p>
                      
                      {/* HELP-LIST SECTION */}
                      <div className="pt-2 md:pt-4">
                        <p className="text-xs md:text-sm font-black text-[#8a2387] uppercase tracking-[0.2em] mb-3">We Help With:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.helpList.map((help, idx) => (
                            <span 
                              key={idx} 
                              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 cursor-default ${tagStyles[idx % tagStyles.length]}`}
                            >
                              {help}
                            </span>
                          ))}
                        </div>
                      </div>

                      {item.quote && (
                        <p className="pt-3 text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5a67d8] to-[#8a2387] italic drop-shadow-sm">
                          "{item.quote}"
                        </p>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

{/* --- SECTION: THE GRAND FINALE (NEON PINK #fe019a THEME) --- */}
<section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-24 mb-16 relative">
  
  {/* Container with EXACT Neon Pink Background */}
  <div className="relative w-full h-auto md:h-[140px] bg-[#fe019a] rounded-xl p-6 md:px-12 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-[0_15px_40px_rgba(254,1,154,0.4)] group">
    
    {/* 1. Subtle White Grid Background for Texture */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_right,#000_40%,transparent_100%)]"></div>

    {/* 2. Soft Bright Inner Glow (Adds depth to the solid color) */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[100px] bg-white/20 blur-[40px] rounded-full pointer-events-none group-hover:bg-white/30 transition-colors duration-500"></div>

    {/* Left Side: Text Content */}
    <div className="relative z-10 text-center md:text-left mb-6 md:mb-0 w-full md:w-auto">
      <span className="block text-white/90 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md mb-2">
        This is not just marketing.
      </span>
      <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight drop-shadow-lg">
        This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">Life-Cycle Brand Building.</span>
      </h2>
    </div>
    
    {/* Right Side: Deep Dark Premium Button */}
    <div className="relative z-10 flex-shrink-0">
      <button className="px-8 py-3.5 rounded-full bg-[#1a1a2e] border border-[#1a1a2e] text-white font-bold text-sm md:text-base tracking-wide hover:bg-black hover:border-black hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
        Let's Grow Your Brand
      </button>
    </div>

  </div>
</section>

      </div>
    </div>
  );
}