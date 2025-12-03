import React, { useState } from 'react';
import EnquiryModal from '../components/EnquiryModal';

// --- ICONS ---
const TagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // CHANGED: Use the local image from the public folder
  const heroImage = "/loan.jpg";

  return (
    <div className="bg-gray-50 font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-blue-50 h-[500px] flex items-center overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          
          {/* Left Text */}
          <div className="z-10 mt-[-50px]">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">
              Personal Loans
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Shop and compare the best rates in minutes.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition shadow-lg"
            >
              Apply Now
            </button>
          </div>

          {/* Right Image (Background Style) */}
          <div className="hidden md:block h-full w-full relative">
             {/* CHANGED: Classes updated to make image fit as a full background cover */}
             <img 
               src={heroImage} 
               alt="Loan Approved" 
               className="absolute inset-0 w-full h-full object-cover"
             />
             {/* Optional: Add a slight gradient fade so the image blends with the text area if needed */}
             <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-50/20 pointer-events-none"></div>
          </div>

        </div>
      </div>

      {/* 2. FLOATING CARDS */}
      <div className="container mx-auto px-6 relative z-20 -mt-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['Personal Loans', 'Car Loan', 'Home Loan', 'Business Loan'].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center cursor-pointer border border-gray-100">
              <div className="bg-blue-50 p-4 rounded-full mb-4 text-blue-600 font-bold text-xl">
                 $
              </div>
              <h3 className="font-bold text-gray-700">{item}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* 3. PERSONAL LOAN OPTIONS */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Personal Loan Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Best Personal Loan Rates</h3>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center space-x-3"><TagIcon /> <span className="text-gray-600">Low cost installment Loans</span></li>
                  <li className="flex items-center space-x-3"><TagIcon /> <span className="text-gray-600">Lower Interest Rates</span></li>
                  <li className="flex items-center space-x-3"><TagIcon /> <span className="text-gray-600">Short and Secure Loans</span></li>
                </ul>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-600 transition">Learn More</button>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-500 p-8 rounded-3xl shadow-2xl transform md:scale-110 z-10 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Low Interest Personal Loans</h3>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center space-x-3"><CheckIcon /> <span>A Short but Powerful Checklist</span></li>
                  <li className="flex items-center space-x-3"><CheckIcon /> <span>Review Your Credit Score</span></li>
                  <li className="flex items-center space-x-3"><CheckIcon /> <span>Get a Handle on any Debt</span></li>
                </ul>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="w-full bg-white text-blue-500 font-bold py-3 rounded-full hover:bg-gray-100 transition">Learn More</button>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Personal Loans for bad credit</h3>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center space-x-3"><TagIcon /> <span className="text-gray-600">Secured Personal Loans</span></li>
                  <li className="flex items-center space-x-3"><TagIcon /> <span className="text-gray-600">Peer-to-peer lending</span></li>
                  <li className="flex items-center space-x-3"><TagIcon /> <span className="text-gray-600">Payday Loans</span></li>
                </ul>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-600 transition">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. LOAN TYPES GRID */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Debt Consolidation', desc: 'Easy to manage payment with debt Consolidation' },
              { title: 'Credit Card Consolidation', desc: 'Combine all balances into one easy payment' },
              { title: 'Small Loans', desc: 'Get a small loan, no collateral or equity required' },
              { title: 'Home Improvement', desc: 'Renovate or repair your home' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md flex justify-between items-center hover:shadow-lg transition cursor-pointer group">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
                <ArrowRightIcon />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. FEATURES */}
      <div className="container mx-auto px-6 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-blue-500 font-bold text-lg mb-2">Loans up to $100k</h3>
            <p className="text-gray-500 text-sm">AS SOON AS NEXT DAY</p>
          </div>
          <div>
            <h3 className="text-blue-500 font-bold text-lg mb-2">Get Personal Offers</h3>
            <p className="text-gray-500 text-sm">NO IMPACT TO CREDIT SCORE</p>
          </div>
          <div>
            <h3 className="text-blue-500 font-bold text-lg mb-2">Rates start at 3.84%</h3>
            <p className="text-gray-500 text-sm">LOW APR OPTIONS AVAILABLE</p>
          </div>
        </div>
      </div>

      {/* --- ANIMATED SECTION: EXPLORE YOUR OPTIONS (CREDIT SCORES) --- */}
      <div className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 relative h-[600px] flex justify-center items-center">
          
          {/* Central Circle & Text (Static) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 rounded-full border-[6px] border-orange-500 flex flex-col justify-center items-center text-center p-8 z-10 bg-white shadow-sm">
            <h2 className="text-3xl font-bold text-black mb-3">Explore Your Options</h2>
            <p className="text-gray-600 text-lg">Compare the personal loans available by credit rating</p>
          </div>

          {/* Rotating Container for Cards */}
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] animate-orbit z-20 pointer-events-none">
            
            {/* 1. Excellent (Top) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-counter-orbit pointer-events-auto">
              <div className="bg-white p-5 rounded-xl shadow-lg text-center min-w-[160px] animate-float">
                <h3 className="font-bold text-2xl text-blue-900 mb-1">Excellent</h3>
                <p className="text-green-500 font-bold text-xl">720+</p>
              </div>
            </div>

            {/* 2. Good (Right) - Added 1s delay to float */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 animate-counter-orbit pointer-events-auto">
              <div className="bg-white p-5 rounded-xl shadow-lg text-center min-w-[160px] animate-float [animation-delay:1s]">
                <h3 className="font-bold text-2xl text-blue-900 mb-1">Good</h3>
                <p className="text-blue-500 font-bold text-xl">550 ~ 719</p>
              </div>
            </div>

            {/* 3. Fair (Bottom) - Added 2s delay to float */}
             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-counter-orbit pointer-events-auto">
              <div className="bg-white p-5 rounded-xl shadow-lg text-center min-w-[160px] animate-float [animation-delay:2s]">
                <h3 className="font-bold text-2xl text-blue-900 mb-1">Fair</h3>
                <p className="text-red-500 font-bold text-xl">620 ~ 659</p>
              </div>
            </div>

            {/* 4. Poor (Left) - Added 1.5s delay to float */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-counter-orbit pointer-events-auto">
              <div className="bg-white p-5 rounded-xl shadow-lg text-center min-w-[160px] animate-float [animation-delay:1.5s]">
                <h3 className="font-bold text-2xl text-blue-900 mb-1">Poor</h3>
                <p className="text-gray-500 font-bold text-xl">&lt;620</p>
              </div>
            </div>
            
          </div>

          {/* Connecting Dots */}
          <div className="hidden md:block absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] pointer-events-none z-0 opacity-50">
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
             <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
             <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}