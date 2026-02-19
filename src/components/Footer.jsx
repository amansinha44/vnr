import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4b6cb7] to-[#8a2387]">
          VNR Media House
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} VNR Digital Media House. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#privacy" className="hover:text-[#5a67d8]">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#5a67d8]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}