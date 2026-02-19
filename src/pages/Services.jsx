import React from 'react';

export default function Services() {
  const servicesData = [
    {
      title: "Digital Marketing Strategy",
      icon: "📊",
      tagline: "We design structured growth plans, not random posts.",
      content: "Every successful brand starts with a clear direction. We analyse your business, audience, and competition to build a practical digital roadmap focused on visibility, engagement, and conversions.",
      includes: ["Market & competitor analysis", "Brand positioning", "Campaign planning", "Channel strategy", "Growth frameworks"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", 
      color: "from-blue-400/20 to-indigo-400/20"
    },
    {
      title: "Social Media Management",
      icon: "📱",
      tagline: "We keep your brand active, engaging, and relevant.",
      content: "Your audience lives on social platforms. We ensure your brand stays visible through consistent content, creative storytelling, and audience engagement.",
      includes: ["Content calendars", "Creatives & captions", "Reels & short videos", "Community management", "Platform optimisation"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop", 
      color: "from-purple-400/20 to-pink-400/20"
    },
    {
      title: "Performance Advertising",
      icon: "🎯",
      tagline: "Data-driven campaigns focused on leads, sales, and ROI.",
      content: "We create targeted ad campaigns designed to deliver measurable business results, not just impressions.",
      includes: ["Meta & Google Ads", "Lead generation campaigns", "Conversion optimisation", "A/B testing", "Analytics & reporting"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Brand Identity & Design",
      icon: "🎨",
      tagline: "Visual systems that make your brand instantly recognisable.",
      content: "We build cohesive brand visuals that reflect your personality and create strong recall.",
      includes: ["Logo & brand identity", "Visual language", "Brand guidelines", "Marketing creatives", "Packaging & design assets"],
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop", 
      color: "from-indigo-400/20 to-blue-400/20"
    },
    {
      title: "Video Production & Reels",
      icon: "🎥",
      tagline: "Because attention lives in motion.",
      content: "Video content drives engagement, trust, and memorability. We create scroll-stopping videos and reels tailored for digital platforms.",
      includes: ["Concept & scripting", "Shoot coordination", "Reels & shorts", "Brand films", "Editing & post-production"],
      image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=2070&auto=format&fit=crop", 
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      title: "Influencer Marketing",
      icon: "🌟",
      tagline: "Authentic reach through trusted voices.",
      content: "We connect brands with the right creators to build credibility and organic engagement.",
      includes: ["Influencer identification", "Campaign planning", "Content collaboration", "Performance tracking"],
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop",
      color: "from-rose-400/20 to-fuchsia-400/20"
    },
    {
      title: "Website Design & Development",
      icon: "🌐",
      tagline: "Fast, modern, conversion-focused websites.",
      content: "Your website is your digital headquarters. We design responsive, visually strong, and user-friendly websites built for impact.",
      includes: ["UI/UX design", "Responsive development", "Landing pages", "Conversion optimisation", "Speed & performance setup"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop", 
      color: "from-blue-600/20 to-cyan-500/20"
    },
    {
      title: "Content Creation",
      icon: "✍",
      tagline: "Words, visuals, and storytelling that connect emotionally.",
      content: "Content builds connection. We craft brand narratives that inform, engage, and persuade.",
      includes: ["Captions & copywriting", "Blogs & articles", "Ad creatives", "Scripts & storytelling"],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
      color: "from-teal-400/20 to-emerald-400/20"
    },
    {
      title: "WhatsApp Marketing",
      icon: "📲",
      tagline: "Conversations that build relationships and drive action.",
      content: "We help brands use WhatsApp as a powerful engagement and conversion channel through personalised campaigns and automation.",
      includes: ["Broadcast campaigns", "Automated flows", "Promotional creatives", "Customer engagement journeys"],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop",
      color: "from-green-400/20 to-teal-400/20"
    },
    {
      title: "Integrated Media & Advertising",
      icon: "📺",
      tagline: "Beyond Digital. Unified Brand Visibility.",
      content: "We extend your brand presence across traditional and on-ground media to create a complete visibility ecosystem.",
      includes: ["Radio Advertising", "Jingle & Audio Production", "Radio Scriptwriting", "Print Media Ad Design", "Newspaper & Magazine Ads", "Print Ad Copywriting", "Electronic Media Ads", "TV Commercial Concepts", "Ad Film Scripting", "Video Ad Production", "Media Planning & Buying", "Cross-Platform Strategy"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Radio Advertising & Jingles",
      icon: "📻",
      tagline: "Memorable Brand Sound",
      content: "We create engaging radio ads and jingles that capture attention, build recall, and connect with audiences through the power of sound.",
      includes: ["Jingle creation", "Scriptwriting", "Voiceover production", "Radio media planning"],
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop",
      color: "from-orange-400/20 to-amber-400/20"
    },
    {
      title: "Print Media Advertising",
      icon: "📰",
      tagline: "Impactful print ads that communicate credibility.",
      content: "We create high-quality printed and outdoor branding materials that strengthen your physical presence and brand recall.",
      includes: ["Newspaper ads", "Magazine creatives", "Print layouts & copy"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
      color: "from-gray-500/20 to-slate-500/20"
    },
    {
      title: "Electronic Media Advertising",
      icon: "📺",
      tagline: "Impactful Screen Presence",
      content: "We conceptualise and produce engaging video advertisements designed for television and broadcast platforms.",
      includes: ["TV commercial concepts", "Ad film production", "Script & storyboard"],
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Printing & Outreach Media",
      icon: "🖨",
      tagline: "Credibility Through Print",
      content: "We create high-quality printed and outdoor branding materials that strengthen your physical presence and brand recall.",
      includes: ["Brochures & flyers", "Hoardings & banners", "Standee & POS branding"],
      image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2064&auto=format&fit=crop",
      color: "from-fuchsia-400/20 to-purple-400/20"
    }
  ];

  // High-contrast vibrant pills
  const tagStyles = [
    "bg-[#5a67d8] text-white shadow-md",
    "bg-[#7c3aed] text-white shadow-md",
    "bg-[#4b6cb7] text-white shadow-md",
    "bg-[#8a2387] text-white shadow-md",
    "bg-[#2563eb] text-white shadow-md"
  ];

  return (
    <div className="w-full bg-[#f8faff] min-h-screen font-sans selection:bg-[#5a67d8] selection:text-white pb-40">
      
      {/* 2 Slow Glowing Circles (Background Polish) */}
      <div className="fixed top-20 left-10 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px] animate-[pulse_15s_ease-in-out_infinite] -z-10"></div>
      <div className="fixed bottom-20 right-10 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[120px] animate-[pulse_20s_ease-in-out_infinite] -z-10"></div>

      {/* HEADER */}
      <section className="relative pt-32 pb-24 px-6 max-w-[1320px] mx-auto text-center">
        <span className="text-sm font-bold text-[#5a67d8] tracking-[0.4em] uppercase mb-4 block">Future of Marketing</span>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight tracking-tighter">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">Core Services.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium mt-6">
          We combine creativity, data, and strategy to build brands that lead industries.
        </p>
      </section>

      {/* STACKING CARDS */}
      <section className="max-w-[1320px] mx-auto px-6 space-y-24">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="sticky top-28 w-full min-h-[600px] mb-20 group"
          >
            <div className="w-full h-full min-h-[600px] bg-white/80 backdrop-blur-xl border border-white rounded-md shadow-[0_10px_20px_rgba(0,0,0,0.01)] overflow-hidden flex flex-col md:flex-row relative">
              
              {/* Image Side (35% to 40% on PC to give content more room) */}
              <div className="w-full md:w-5/12 h-72 md:h-auto relative overflow-hidden flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[12s] ease-in-out"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} mix-blend-multiply`}></div>
                <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-md shadow-xl">
                  <span className="text-5xl">{service.icon}</span>
                </div>
              </div>

              {/* Content Side (Takes remaining space) */}
              <div className="w-full md:flex-1 p-8 md:p-16 flex flex-col justify-center relative">
                <div className="space-y-8 relative z-10">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5a67d8] to-[#8a2387] italic">
                      "{service.tagline}"
                    </p>
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                    {service.content}
                  </p>

                  {/* Pills with High-Contrast */}
                  <div className="pt-6">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Service Capabilities:</p>
                    <div className="flex flex-wrap gap-3">
                      {service.includes.map((item, idx) => (
                        <span 
                          key={idx} 
                          className={`px-5 py-2.5 rounded-md text-sm font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 ${tagStyles[idx % tagStyles.length]}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle background index inside the card */}
                <div className="absolute bottom-5 right-10 text-[10rem] font-black text-gray-900/5 select-none -z-0 pointer-events-none group-hover:text-[#5a67d8]/5 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="max-w-[1320px] mx-auto px-6 mt-40">
        <div className="bg-gradient-to-br from-[#4b6cb7] to-[#8a2387] rounded-md p-16 md:p-24 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay"></div>
          <h2 className="text-5xl md:text-7xl font-black text-white relative z-10 leading-tight">
            Let's build your <br/> digital dynasty.
          </h2>
          <button className="mt-12 px-12 py-5 rounded-md bg-white text-gray-900 font-black text-xl hover:bg-blue-50 transition-all relative z-10 shadow-xl">
            Launch Your Campaign
          </button>
        </div>
      </section>

    </div>
  );
}