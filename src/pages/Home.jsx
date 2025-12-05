import React, { useState } from 'react';
import AboutPreview from "../components/AboutPreview";
import HeroEnquiryForm from "../components/HeroEnquiryForm";
import LoanOptions from '../components/LoanOptions';

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

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 font-sans">

      {/* FORM MODAL */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with Liquid Blur */}
          <div 
            className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30"
            onClick={() => setIsFormModalOpen(false)}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              backdropFilter: 'blur(40px)'
            }}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto z-10 animate-fade-up">
            {/* Close Button */}
            <button
              onClick={() => setIsFormModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <CloseIcon />
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-t-3xl">
              <div className="inline-block mb-3">
                <span className="bg-white bg-opacity-20 text-black text-sm font-semibold px-4 py-2 rounded-full">
                  ⚡ Quick & Easy Process
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-2">Get Your Loan Quote</h2>
              <p className="text-blue-100">Fill in your details to get started</p>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <HeroEnquiryForm />
              
              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-green-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">100% Secure</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-green-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">No Hidden Fees</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-green-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">Fast Approval</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen lg:h-screen flex items-center overflow-hidden py-12 lg:py-0">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT CONTENT - Hero Text */}
            <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
                    ⚡ Quick & Easy Process
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                  Personal Loans
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Simplified
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                  Fast approval • Low interest • Trusted by thousands
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setIsFormModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                  Get Your Loan Quote →
                </button>
                <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition duration-300">
                  Learn More
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">$100K</div>
                  <div className="text-xs text-gray-500 mt-1">Max Loan</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">3.84%</div>
                  <div className="text-xs text-gray-500 mt-1">Starting APR</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">24hrs</div>
                  <div className="text-xs text-gray-500 mt-1">Fast Approval</div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE - Visual Section */}
            <div className="order-1 lg:order-2 relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/hero.png"
                  alt="Loan Hero"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
                />

                {/* FLOATING CARDS - Responsive */}
                {/* Card 1 - Top Right */}
                <div className="absolute top-8 sm:top-12 lg:top-20 right-2 sm:right-5 w-32 sm:w-36 lg:w-40 bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100 animate-float">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Interest Rate</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900">9.2%</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Low Interest</p>
                </div>

                {/* Card 2 - Bottom Right */}
                <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-5 sm:right-10 w-32 sm:w-36 lg:w-40 bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100 animate-float animation-delay-400">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Rating</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900">90%</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Satisfied Customers</p>
                </div>

                {/* Card 3 - Top Left */}
                <div className="hidden sm:block absolute top-12 lg:top-20 left-5 lg:left-10 w-32 sm:w-36 lg:w-40 bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100 animate-float animation-delay-800">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Security</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900">100%</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Secure</p>
                </div>

                {/* Card 4 - Bottom Left */}
                <div className="hidden sm:block absolute bottom-16 lg:bottom-20 left-0 lg:left-0 w-32 sm:w-36 lg:w-40 bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100 animate-float animation-delay-1200">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Speed</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Instant</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Approvals</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. LOAN CATEGORY CARDS */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 -mt-12 lg:-mt-20 mb-16 lg:mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: "Personal Loans",
              desc: "Flexible personal loan options with competitive interest rates.",
              img: "/cards/personal.jpg"
            },
            {
              title: "Car Loan",
              desc: "Get fast approval and low EMI rates for new or used cars.",
              img: "/cards/car.jpg"
            },
            {
              title: "Home Loan",
              desc: "Affordable home loan solutions with easy documentation.",
              img: "/cards/home.jpg"
            },
            {
              title: "Business Loan",
              desc: "Grow your business with our smart financing options.",
              img: "/cards/business.jpg"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition duration-300 cursor-pointer group"
            >
              <div className="h-32 sm:h-40 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LoanOptions setIsModalOpen={setIsModalOpen} />

      {/* 4. LOAN TYPES GRID */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: 'Debt Consolidation', desc: 'Easy to manage payment with debt Consolidation' },
              { title: 'Credit Card Consolidation', desc: 'Combine all balances into one easy payment' },
              { title: 'Small Loans', desc: 'Get a small loan, no collateral or equity required' },
              { title: 'Home Improvement', desc: 'Renovate or repair your home' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex justify-between items-center hover:shadow-lg transition cursor-pointer group">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-500">{item.desc}</p>
                </div>
                <ArrowRightIcon />
              </div>
            ))}
          </div>
        </div>
      </div>

      <AboutPreview />

      {/* 5. FEATURES */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="p-6 rounded-xl hover:bg-blue-50 transition">
            <h3 className="text-blue-500 font-bold text-lg mb-2">Loans up to $100k</h3>
            <p className="text-gray-500 text-sm">AS SOON AS NEXT DAY</p>
          </div>
          <div className="p-6 rounded-xl hover:bg-blue-50 transition">
            <h3 className="text-blue-500 font-bold text-lg mb-2">Get Personal Offers</h3>
            <p className="text-gray-500 text-sm">NO IMPACT TO CREDIT SCORE</p>
          </div>
          <div className="p-6 rounded-xl hover:bg-blue-50 transition">
            <h3 className="text-blue-500 font-bold text-lg mb-2">Rates start at 3.84%</h3>
            <p className="text-gray-500 text-sm">LOW APR OPTIONS AVAILABLE</p>
          </div>
        </div>
      </div>

      {/* 6. EXPLORE YOUR OPTIONS */}
      <div className="py-16 sm:py-24 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative min-h-[400px] sm:h-[500px] lg:h-[600px] flex justify-center items-center">
          {/* CENTER CIRCLE */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full border-4 sm:border-6 border-orange-500 flex flex-col justify-center items-center text-center p-4 sm:p-6 lg:p-8 z-10 bg-white shadow-lg">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-black mb-2 sm:mb-3">Explore Your Options</h2>
            <p className="text-xs sm:text-base lg:text-lg text-gray-600">Compare personal loans by credit rating</p>
          </div>

          {/* ROTATING ITEMS */}
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] -ml-[150px] sm:-ml-[200px] lg:-ml-[250px] -mt-[150px] sm:-mt-[200px] lg:-mt-[250px] animate-orbit z-20 pointer-events-none origin-center">
            {/* Excellent */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-counter-orbit pointer-events-auto">
              <div className="bg-white p-3 sm:p-4 lg:p-5 rounded-xl shadow-lg text-center min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] animate-float">
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-blue-900 mb-1">Excellent</h3>
                <p className="text-green-500 font-bold text-base sm:text-lg lg:text-xl">720+</p>
              </div>
            </div>

            {/* Good */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 animate-counter-orbit pointer-events-auto">
              <div className="bg-white p-3 sm:p-4 lg:p-5 rounded-xl shadow-lg text-center min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] animate-float animation-delay-1000">
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-blue-900 mb-1">Good</h3>
                <p className="text-blue-500 font-bold text-base sm:text-lg lg:text-xl">550-719</p>
              </div>
            </div>

            {/* Fair */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-counter-orbit pointer-events-auto">
              <div className="bg-white p-3 sm:p-4 lg:p-5 rounded-xl shadow-lg text-center min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] animate-float animation-delay-2000">
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-blue-900 mb-1">Fair</h3>
                <p className="text-red-500 font-bold text-base sm:text-lg lg:text-xl">620-659</p>
              </div>
            </div>

            {/* Poor */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-counter-orbit pointer-events-auto">
              <div className="bg-white p-3 sm:p-4 lg:p-5 rounded-xl shadow-lg text-center min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] animate-float animation-delay-1500">
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-blue-900 mb-1">Poor</h3>
                <p className="text-gray-500 font-bold text-base sm:text-lg lg:text-xl">&lt;620</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}