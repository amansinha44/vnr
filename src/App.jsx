import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'; // <-- Yahan Hero ko Home kar diya hai
import About from './pages/About';
import Industries from './pages/Industries';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-[#fcfcfc]">
        {/* Header har page par rahega */}
        <Header />
        
        {/* Main content area jahan pages change honge */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Ye aapka Home Page hai */}
            <Route path="/about" element={<About />} /> {/* Ye About Page hai */}
            <Route path="/industries" element={<Industries />} /> {/* Ye Industries Page hai */}
            <Route path="/services" element={<Services />} /> {/* Ye Services Page hai */}
            <Route path="/contact" element={<Contact />} /> {/* Ye Services Page hai */}
          </Routes>
        </main>
        
        {/* Footer har page par rahega */}
        <Footer />
      </div>
    </Router>
  );
}