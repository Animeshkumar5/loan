import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function QuickApplyAlert() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAlertClick = () => {
    if (location.pathname !== "/contact") {
      navigate("/contact");
      setTimeout(() => {
        const formSection = document.getElementById("contact-form");
        if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const formSection = document.getElementById("contact-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div 
      onClick={handleAlertClick}
      // UPDATED: Reduced padding (py-3) for a sleeker look
      className="fixed bottom-0 left-0 z-50 w-full bg-black text-white py-3 px-4 sm:py-4 sm:px-6 lg:px-8 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] cursor-pointer transition hover:bg-gray-900 border-t-4 border-blue-600"
    >
      {/* UPDATED: Changed flex-col to flex-row so items sit side-by-side on mobile */}
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3">
        
        {/* Left Section - Logo and Title */}
        <div className="flex items-center gap-2">
          {/* Smaller Icon Container */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            {/* UPDATED: Smaller Text Size (text-sm) */}
            <h2 className="text-sm sm:text-lg font-bold whitespace-nowrap tracking-wide">Quick Apply</h2>
            <span className="text-sm sm:text-xl">✨</span>
          </div>
        </div>

        {/* Middle Section - Features (Hidden on Mobile) */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium whitespace-nowrap">100% Digital</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium whitespace-nowrap">Upto 50 Lacs</span>
          </div>
        </div>

        {/* Right Section - CTA Button */}
        <div>
          {/* UPDATED: Smaller Button Padding and Text */}
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-2 px-4 sm:py-2.5 sm:px-6 rounded-full transition transform hover:scale-105 shadow-md text-xs sm:text-sm tracking-wider uppercase border border-blue-400 whitespace-nowrap">
            Apply Now
          </button>
        </div>

      </div>
    </div>
  );
}