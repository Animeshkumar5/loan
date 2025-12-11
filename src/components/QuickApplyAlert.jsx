import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function QuickApplyAlert() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAlertClick = () => {
    // 1. If NOT on Contact page, go there, wait a bit, then scroll
    if (location.pathname !== "/contact") {
      navigate("/contact");
      setTimeout(() => {
        const formSection = document.getElementById("contact-form");
        if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
      }, 500); // 500ms delay to allow page load
    } 
    // 2. If ALREADY on Contact page, just scroll
    else {
      const formSection = document.getElementById("contact-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div 
      onClick={handleAlertClick}
      className="fixed bottom-0 left-0 z-50 w-full bg-black text-white py-4 px-4 sm:px-6 lg:px-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] cursor-pointer transition hover:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Section - Logo and Title */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-bold whitespace-nowrap">Quick Apply Loan</h2>
            <span className="text-xl sm:text-2xl">✨</span>
          </div>
        </div>

        {/* Middle Section - Features */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base whitespace-nowrap">100% Digital Process</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base whitespace-nowrap">Loan Upto 50 Lacs</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base whitespace-nowrap">Best Deal Guaranteed</span>
          </div>
        </div>

        {/* Right Section - CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition transform hover:scale-105 shadow-lg whitespace-nowrap">
          Apply Now
        </button>
      </div>
    </div>
  );
}