import React from 'react';

export default function Contact() {
  const indiaLocations = ["Lucknow", "Kanpur", "Gorakhpur", "Bareilly", "Delhi", "Punjab", "Bihar"];
  const globalLocations = ["Dubai", "Canada"];

  return (
    <div className="w-full bg-[#f8faff] min-h-screen font-sans selection:bg-[#5a67d8] selection:text-white pb-20">
      
      {/* Background Glowing Orbs */}
      <div className="fixed top-20 left-10 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px] animate-[pulse_15s_ease-in-out_infinite] -z-10"></div>
      <div className="fixed bottom-20 right-10 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[120px] animate-[pulse_20s_ease-in-out_infinite] -z-10"></div>

      {/* ================= PRESENCE & LOCATIONS HERO ================= */}
      <section className="relative pt-32 pb-20 px-6 max-w-[1320px] mx-auto text-center">
        <span className="text-sm font-bold text-[#5a67d8] tracking-[0.3em] uppercase mb-4 block">Our Global Footprint</span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
          Growing Brands <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">Across Borders.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium mt-6">
          From local businesses to international collaborations, our work travels.
        </p>

        {/* The Emotional Quote */}
        <div className="mt-16 mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <h2 className="text-[10rem] md:text-[15rem] font-black text-blue-50/50 leading-none select-none">VNR</h2>
          </div>
          <p className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 italic px-4">
            "Because great ideas have no boundaries."
          </p>
        </div>

        {/* Location Grids */}
        <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-5xl mx-auto">
          
          {/* India Presence */}
          <div className="bg-white/80 backdrop-blur-xl border border-blue-50 rounded-2xl p-10 shadow-[0_15px_40px_rgba(90,103,216,0.08)] hover:shadow-[0_20px_50px_rgba(90,103,216,0.15)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 flex items-center justify-center gap-2">
              <span className="text-3xl">📍</span> India Presence
            </h3>
            <p className="text-gray-500 mb-8 font-medium">We proudly serve clients across multiple cities and states.</p>
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              {indiaLocations.map((city, idx) => (
                <span key={idx} className="px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 font-bold rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Overseas Presence */}
          <div className="bg-white/80 backdrop-blur-xl border border-purple-50 rounded-2xl p-10 shadow-[0_15px_40px_rgba(138,35,135,0.08)] hover:shadow-[0_20px_50px_rgba(138,35,135,0.15)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 flex items-center justify-center gap-2">
              <span className="text-3xl">🌎</span> Overseas Presence
            </h3>
            <p className="text-gray-500 mb-8 font-medium">Extending our creativity and strategies to global markets.</p>
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              {globalLocations.map((city, idx) => (
                <span key={idx} className="px-5 py-2.5 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 text-purple-700 font-bold rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM & INFO SECTION ================= */}
      <section className="max-w-[1320px] mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-blue-50 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-3/5 p-10 md:p-16 bg-white relative z-10">
            <h2 className="text-4xl font-black text-gray-900 mb-2">Drop us a line</h2>
            <p className="text-gray-500 mb-10 font-medium">We usually respond within 24 hours.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#f8faff] border border-gray-200 text-gray-900 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5a67d8] focus:border-transparent transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-[#f8faff] border border-gray-200 text-gray-900 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5a67d8] focus:border-transparent transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full bg-[#f8faff] border border-gray-200 text-gray-900 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5a67d8] focus:border-transparent transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Service Interested In</label>
                  <select className="w-full bg-[#f8faff] border border-gray-200 text-gray-900 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5a67d8] focus:border-transparent transition-all appearance-none">
                    <option>Digital Strategy</option>
                    <option>Performance Ads</option>
                    <option>Social Media</option>
                    <option>Video & Reels</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Your Message</label>
                <textarea rows="4" placeholder="Tell us about your brand and goals..." className="w-full bg-[#f8faff] border border-gray-200 text-gray-900 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5a67d8] focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <button type="button" className="w-full py-5 rounded-xl bg-gradient-to-r from-[#5a67d8] to-[#8a2387] text-white font-black text-lg shadow-[0_10px_20px_rgba(90,103,216,0.3)] hover:shadow-[0_15px_30px_rgba(90,103,216,0.4)] hover:-translate-y-1 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info Cards */}
          <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#4b6cb7] to-[#8a2387] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-center">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
            
            <h3 className="text-3xl font-black mb-10 relative z-10">Reach Out Directly</h3>
            
            <div className="space-y-8 relative z-10">
              {/* Phone Card */}
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#5a67d8] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-white/60 font-bold text-sm uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-2xl font-bold">+91 98765 XXXXX</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#8a2387] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-white/60 font-bold text-sm uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-xl font-bold">hello@vnrmedia.com</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#4b6cb7] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-white/60 font-bold text-sm uppercase tracking-wider mb-1">Headquarters</p>
                  <p className="text-lg font-medium leading-relaxed">VNR Digital Media House<br/>Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION (CTA) ================= */}
      <section className="px-6 max-w-[1320px] mx-auto pb-20 mt-10">
        <div className="bg-white rounded-3xl p-12 md:p-24 shadow-2xl border border-indigo-50 relative overflow-hidden text-center group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] opacity-70 group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-50 rounded-full blur-[100px] opacity-70 group-hover:scale-150 transition-transform duration-1000"></div>
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 relative z-10 leading-tight">
            Let's Grow <br className="md:hidden"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">Your Brand</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
            Whether you’re building trust, attracting customers, or launching something new, we’re ready.
          </p>
          <button className="px-12 py-5 rounded-full bg-gradient-to-r from-[#5a67d8] to-[#9f7aea] text-white font-black text-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative z-10">
            Start a Conversation
          </button>
        </div>
      </section>

    </div>
  );
}