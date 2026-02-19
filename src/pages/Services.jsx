import React from 'react';

export default function Services() {
  const servicesData = [
    {
      title: "Digital Marketing Strategy",
      tagline: "Structured growth plans, not random posts.",
      content: "Every successful brand starts with a clear direction. We build a practical digital roadmap focused on visibility, engagement, and conversions.",
      includes: ["Market analysis", "Brand positioning", "Campaign planning", "Growth frameworks"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      glowColor: "bg-blue-400/30",
      accent: "text-blue-600",
      btnAction: "Discuss Strategy"
    },
    {
      title: "Social Media Management",
      tagline: "Active, engaging, and relevant.",
      content: "Your audience lives on social platforms. We ensure your brand stays visible through consistent creative storytelling.",
      includes: ["Content calendars", "Creatives & captions", "Reels & shorts", "Community management"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
      glowColor: "bg-purple-400/30",
      accent: "text-purple-600",
      btnAction: "Boost Engagement"
    },
    {
      title: "Performance Advertising",
      tagline: "Data-driven leads and ROI.",
      content: "Targeted ad campaigns designed to deliver measurable business results, not just impressions.",
      includes: ["Meta & Google Ads", "Lead generation", "Conversion optimisation"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      glowColor: "bg-rose-400/30",
      accent: "text-rose-600",
      btnAction: "Scale Your Ads"
    },
    {
      title: "Brand Identity & Design",
      tagline: "Visual systems that build recall.",
      content: "We build cohesive brand visuals that reflect your personality and create strong market recognition.",
      includes: ["Logo design", "Brand guidelines", "Packaging assets"],
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop",
      glowColor: "bg-emerald-400/30",
      accent: "text-emerald-600",
      btnAction: "Build Your Identity"
    },
    {
      title: "Video Production & Reels",
      tagline: "Attention lives in motion.",
      content: "We create scroll-stopping videos and reels tailored for digital platforms.",
      includes: ["Concept & scripting", "Shoot coordination", "Brand films"],
      image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop",
      glowColor: "bg-indigo-400/30",
      accent: "text-indigo-600",
      btnAction: "Create Viral Content"
    },
    {
      title: "Influencer Marketing",
      tagline: "Authentic reach through trusted voices.",
      content: "We connect brands with the right creators to build credibility and organic engagement.",
      includes: ["Influencer ID", "Campaign planning", "Tracking"],
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop",
      glowColor: "bg-pink-400/30",
      accent: "text-pink-600",
      btnAction: "Find Influencers"
    },
    {
      title: "Website Design & Development",
      tagline: "Fast, modern, conversion-focused.",
      content: "We design responsive, visually strong websites built for impact.",
      includes: ["UI/UX design", "Responsive dev", "Landing pages"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
      glowColor: "bg-cyan-400/30",
      accent: "text-cyan-600",
      btnAction: "Revamp Your Site"
    },
    {
      title: "Content Creation",
      tagline: "Words and visuals that connect.",
      content: "We craft brand narratives that inform, engage, and persuade.",
      includes: ["Copywriting", "Blogs", "Ad creatives"],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
      glowColor: "bg-teal-400/30",
      accent: "text-teal-600",
      btnAction: "Craft Your Story"
    },
    {
      title: "WhatsApp Marketing",
      tagline: "Conversations that drive action.",
      content: "Use WhatsApp as a powerful engagement and conversion channel through automation.",
      includes: ["Broadcasts", "Automated flows", "Engagement"],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop",
      glowColor: "bg-green-400/30",
      accent: "text-green-600",
      btnAction: "Automate Chats"
    },
    {
      title: "Integrated Media & Ads",
      tagline: "Beyond Digital. Unified Visibility.",
      content: "Extend your brand presence across traditional and on-ground media.",
      includes: ["Radio Ads", "Print Design", "Media Planning"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      glowColor: "bg-slate-400/30",
      accent: "text-slate-600",
      btnAction: "Plan Your Media"
    },
    {
      title: "Radio Advertising & Jingles",
      tagline: "Memorable Brand Sound",
      content: "We create engaging radio ads and jingles that connect with audiences.",
      includes: ["Jingle creation", "Scriptwriting", "Voiceovers"],
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop",
      glowColor: "bg-amber-400/30",
      accent: "text-amber-600",
      btnAction: "Create Your Sound"
    },
    {
      title: "Print Media Advertising",
      tagline: "Credibility and clarity.",
      content: "High-quality printed materials that strengthen your physical presence.",
      includes: ["Newspaper ads", "Magazine creatives", "Layouts"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
      glowColor: "bg-gray-400/30",
      accent: "text-gray-600",
      btnAction: "Design For Print"
    },
    {
      title: "Electronic Media Advertising",
      tagline: "Impactful Screen Presence",
      content: "Produce engaging video advertisements for broadcast platforms.",
      includes: ["TV commercials", "Ad films", "Storyboards"],
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop",
      glowColor: "bg-indigo-400/30",
      accent: "text-indigo-600",
      btnAction: "Broadcast Your Ad"
    },
    {
      title: "Printing & Outreach Media",
      tagline: "Credibility Through Print",
      content: "High-quality printed and outdoor branding materials.",
      includes: ["Brochures & flyers", "Hoardings & banners", "Standees"],
      image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2064&auto=format&fit=crop",
      glowColor: "bg-fuchsia-400/30",
      accent: "text-fuchsia-600",
      btnAction: "Start Outreach"
    }
  ];

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-[#5a67d8]/30 selection:text-[#1d1d1f] pb-20">
      
      {/* ================= BACKGROUND GLOW ================= */}
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
      <div className="relative z-10 pt-32 space-y-20">

        {/* --- HEADER SECTION --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 text-center relative">
          <span className="inline-block py-1.5 px-4 rounded-md bg-white/60 backdrop-blur-md border border-white text-[#5a67d8] text-[10px] font-black tracking-[0.3em] uppercase mb-6 shadow-sm">
            Our Capabilities
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#1a1a2e] leading-[1.1] tracking-tight mb-6">
            Designed to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5a67d8] to-[#8a2387]">Dominate.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            We don't just offer services; we engineer precision-driven strategies to elevate your brand above the noise.
          </p>
        </section>

        {/* --- SERVICES LIST (WITH DIVIDER LINES) --- */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-16 md:gap-24">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <React.Fragment key={index}>
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 group`}>
                  
                  {/* IMAGE SECTION */}
                  <div className="w-full md:w-1/2 relative">
                    <div className={`absolute -inset-4 ${service.glowColor} rounded-md blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 -z-10 pointer-events-none`}></div>
                    
                    <div className="relative bg-white/40 backdrop-blur-md border border-white/80 p-3 rounded-md shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                      <div className="rounded-md overflow-hidden relative shadow-inner aspect-[4/3] md:aspect-auto md:h-[450px]">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s] ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 via-transparent to-transparent opacity-80 mix-blend-multiply"></div>
                        
                        {/* Floating Number Badge */}
                        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-md shadow-lg border border-white flex items-center justify-center">
                          <span className="font-black text-[#1a1a2e] text-lg leading-none">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TEXT SECTION */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a2e] mb-3 leading-tight tracking-tight">
                        {service.title}
                      </h2>
                      <h3 className={`text-xl md:text-2xl font-bold ${service.accent} italic`}>
                        "{service.tagline}"
                      </h3>
                    </div>
                    
                    <div className="pl-4 border-l-4 border-[#8a2387]/30 bg-white/30 py-2 rounded-r-md">
                      <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed max-w-lg">
                        {service.content}
                      </p>
                    </div>

                    {/* Core Deliverables */}
                    <div className="pt-2">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Core Deliverables</p>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {service.includes.map((item, idx) => (
                          <span 
                            key={idx} 
                            className="px-4 py-2 rounded-md bg-white/60 backdrop-blur-md border border-white shadow-sm text-sm font-bold text-slate-700 cursor-default hover:bg-white hover:text-[#5a67d8] hover:shadow-md transition-all duration-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Theme-Matched Action Link */}
                    <div className="pt-6 mt-4 border-t border-white/50">
                      <button className={`group flex items-center gap-3 px-6 py-3 rounded-md bg-white/60 backdrop-blur-md border border-white shadow-sm font-black ${service.accent} hover:bg-white hover:shadow-md transition-all duration-300 w-fit`}>
                        <span>{service.btnAction}</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* THE SEPARATOR LINE */}
                {index !== servicesData.length - 1 && (
                  <div className="w-full flex items-center justify-center relative opacity-50 hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-slate-400/50 to-transparent"></div>
                    <div className="w-2.5 h-2.5 rotate-45 bg-white border border-slate-300 shadow-sm relative z-10"></div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </section>

{/* --- SECTION: THE GRAND FINALE (VIBRANT ORANGE THEME) --- */}
<section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-32 mb-16 relative">
  <div className="relative w-full h-auto md:h-[140px] bg-[#ff5a00] rounded-md p-6 md:px-12 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-[0_15px_40px_rgba(255,90,0,0.3)] group">
    
    {/* 1. Subtle White Grid Background for Texture */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_right,#000_40%,transparent_100%)]"></div>

    {/* 2. Soft Bright Inner Glow (Adds depth to the solid orange) */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[100px] bg-white/20 blur-[40px] rounded-md pointer-events-none group-hover:bg-white/30 transition-colors duration-500"></div>

    {/* Left Side: Text Content */}
    <div className="relative z-10 text-center md:text-left mb-6 md:mb-0 w-full md:w-auto flex flex-col justify-center">
      <span className="block text-white/90 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md mb-1">
        Stop blending in.
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-none mb-2">
        Start leading.
      </h2>
      <p className="text-white/90 text-sm md:text-base font-medium drop-shadow-sm">
        Let's build a digital ecosystem that works for you.
      </p>
    </div>
    
    {/* Right Side: Deep Dark Premium Button */}
    <div className="relative z-10 flex-shrink-0">
      <button className="px-8 py-3.5 rounded-md bg-[#1a1a2e] border border-[#1a1a2e] text-white font-bold text-sm md:text-base tracking-wide hover:bg-black hover:border-black hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
        Book a Strategy Call
      </button>
    </div>

  </div>
</section>

      </div>
    </div>
  );
}