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
      theme: "from-[#f0f7ff] to-[#f8f5ff]"
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
      theme: "from-[#fdf4ff] to-[#f0f4ff]"
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
      theme: "from-[#f5f3ff] to-[#fdf4ff]"
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
      theme: "from-[#f0fdf4] to-[#f0f7ff]"
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
      theme: "from-[#eff6ff] to-[#f5f3ff]"
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
      theme: "from-[#fdf2f8] to-[#f0f7ff]"
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
      theme: "from-[#fff1f2] to-[#f5f3ff]"
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
      theme: "from-[#f0f9ff] to-[#fdf4ff]"
    }
  ];

  // Soothing background color palette for the tags
  const tagStyles = [
    "bg-[#5a67d8] shadow-[0_4px_12px_rgba(90,103,216,0.3)]",
    "bg-[#7c3aed] shadow-[0_4px_12px_rgba(124,58,237,0.3)]",
    "bg-[#2563eb] shadow-[0_4px_12px_rgba(37,99,235,0.3)]",
    "bg-[#0d9488] shadow-[0_4px_12px_rgba(13,148,136,0.3)]",
    "bg-[#db2777] shadow-[0_4px_12px_rgba(219,39,119,0.3)]",
    "bg-[#4338ca] shadow-[0_4px_12px_rgba(67,56,202,0.3)]"
  ];

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen font-sans selection:bg-[#5a67d8] selection:text-white pb-20">
      
      {/* HEADER SECTION (1320px) */}
      <section className="relative pt-32 pb-20 px-6 max-w-[1320px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-50/50 rounded-full blur-[120px] -z-10"></div>
        <span className="text-sm font-bold text-[#5a67d8] tracking-[0.3em] uppercase mb-4 block">Industries We Empower</span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
          Marketing That <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">Follow Life.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium mt-6">
          We specialise in industries that directly influence human decisions, emotions, and lifestyles.
        </p>
      </section>

      {/* THE LIFE-CYCLE TIMELINE */}
      <section className="relative max-w-[1320px] mx-auto px-6 py-20">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#4b6cb7] via-[#8a2387] to-transparent md:-translate-x-1/2 opacity-20"></div>

        <div className="space-y-32">
          {industries.map((item) => (
            <div key={item.id} className="relative flex flex-col md:flex-row items-center group">
              <div className="absolute left-[30px] md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#5a67d8] md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(90,103,216,0.5)]"></div>

              {/* IMAGE SIDE */}
              <div className={`w-full md:w-[45%] ${item.side === 'left' ? 'md:order-1' : 'md:order-2'} mb-8 md:mb-0`}>
                <div className="relative rounded-md overflow-hidden shadow-2xl border-4 border-white transform transition duration-500 group-hover:scale-[1.02]">
                  <img src={item.image} alt={item.title} className="w-full h-[350px] md:h-[500px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <span className="text-4xl mb-2 block">{item.icon}</span>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>

              {/* CONTENT SIDE IN BOX (rounded-md with Light Blue/Purple Theme) */}
              <div className={`w-full md:w-[45%] ${item.side === 'left' ? 'md:order-2 md:pl-16' : 'md:order-1 md:pr-16'} pl-16 md:pl-0`}>
                <div className={`p-8 md:p-12 rounded-md border border-blue-100 shadow-[0_10px_30px_rgba(235,244,255,0.8)] bg-gradient-to-br ${item.theme} relative overflow-hidden group`}>
                  
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[#5a67d8] font-bold text-sm tracking-widest uppercase">{item.year}</span>
                      {item.badge && (
                        <span className="bg-[#8a2387] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{item.badge}</span>
                      )}
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">{item.headline}</h2>
                    <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed italic border-l-4 border-[#5a67d8]/30 pl-6">
                      "{item.content}"
                    </p>
                    
                    {/* HELP-LIST SECTION: UPDATED WITH ATTRACTIVE BG AND LIGHT TEXT */}
                    <div className="pt-6">
                      <p className="text-lg font-black text-gray-400 uppercase tracking-widest mb-4">We Help With:</p>
                      <div className="flex flex-wrap gap-3">
                        {item.helpList.map((help, idx) => (
                          <span 
                            key={idx} 
                            className={`px-5 py-2 rounded-md text-md font-bold text-white transition-all duration-300 hover:scale-105 cursor-default ${tagStyles[idx % tagStyles.length]}`}
                          >
                            {help}
                          </span>
                        ))}
                      </div>
                    </div>

                    {item.quote && (
                      <p className="pt-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387] italic">
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

      {/* FOOTER CTA */}
      <section className="py-24 px-6 max-w-[1320px] mx-auto text-center">
        <div className="bg-white rounded-xl p-12 md:p-24 shadow-xl border border-gray-50 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] opacity-50"></div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            This is not just marketing. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">This is Life-Cycle Brand Building.</span>
          </h2>
          <button className="px-12 py-5 rounded-full bg-gradient-to-r from-[#5a67d8] to-[#9f7aea] text-white font-black text-xl shadow-lg hover:scale-105 transition-transform">
            Let's Grow Your Brand
          </button>
        </div>
      </section>
    </div>
  );
}