import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Insurance() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. SEO METADATA */}
      <Helmet>
        <title>Insurance - Life, Health & General Insurance Plans | PaisaSolutions</title>
        <meta 
          name="description" 
          content="Compare and buy the best Life Insurance, Health Insurance, and Car Insurance plans. High claim settlement ratios, cashless network hospitals, and instant policy issuance." 
        />
        <meta 
          name="keywords" 
          content="insurance, health insurance, term life insurance, car insurance, mediclaim, general insurance, family floater plan" 
        />
        <link rel="canonical" href="https://yourwebsite.com/insurance" />
      </Helmet>

      {/* 2. HERO SECTION */}
      <div className="relative bg-gradient-to-br from-rose-900 via-red-900 to-pink-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-rose-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-red-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 text-sm font-medium text-rose-100">
              🛡️ Secure Your Family's Future
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Comprehensive Protection for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-pink-200">Life & Health</span>
            </h1>
            <p className="text-lg text-rose-100 max-w-xl">
              From medical emergencies to securing your family's financial future, find the perfect insurance plan with 98% claim settlement ratio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-white text-rose-900 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition transform text-center"
              >
                Get Free Quote
              </Link>
              <div className="flex items-center gap-4 text-sm font-medium text-rose-200 px-4">
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Cashless Claims
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Tax Saver
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <img 
              src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&q=80" 
              alt="Family Insurance" 
              className="rounded-3xl shadow-2xl border-4 border-white/10 transform rotate-1 hover:rotate-0 transition duration-500"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-rose-900 p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce-slow">
              <p className="text-sm font-bold">Network Hospitals</p>
              <p className="text-2xl font-extrabold text-rose-600">8,500+</p>
              <p className="text-xs text-gray-500">Across India</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. TYPES OF INSURANCE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance Products We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Compare plans from top insurers like HDFC Ergo, ICICI Lombard, LIC, and Star Health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "🏥", title: "Health Insurance", desc: "Covers hospitalization bills, surgeries, and critical illnesses. Cashless treatment available." },
            { icon: "☂️", title: "Term Life Insurance", desc: "High life cover at low premiums to secure your family's financial future in your absence." },
            { icon: "🚗", title: "Car/Bike Insurance", desc: "Comprehensive cover against accidents, theft, and third-party liabilities." },
            { icon: "✈️", title: "Travel Insurance", desc: "Covers flight delays, lost baggage, and medical emergencies abroad." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 group">
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. WHY CHOOSE US & ELIGIBILITY (Split Section) */}
      <div className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-rose-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
                Why Buy From Us?
              </h3>
              <ul className="space-y-4">
                {[
                  "High Claim Settlement Ratio (98%+)",
                  "Dedicated Claims Support Team",
                  "Instant Policy Issuance (Digital)",
                  "Tax Benefits u/s 80C & 80D",
                  "Compare 20+ Insurers instantly"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl">
                    <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-pink-600 text-white rounded-lg flex items-center justify-center text-sm">2</span>
                Documents Required
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "KYC (Aadhaar & PAN)",
                  "Passport Size Photo",
                  "Address Proof"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 5. TAX BENEFIT HIGHLIGHT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-rose-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-rose-900 mb-2">Save Tax with Insurance</h3>
            <p className="text-gray-700 mb-4">Did you know insurance helps you save tax under the Income Tax Act?</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">✅ <strong>Section 80C:</strong> Up to ₹1.5 Lakhs (Life Insurance)</li>
              <li className="flex items-center gap-2">✅ <strong>Section 80D:</strong> Up to ₹75,000 (Health Insurance)</li>
            </ul>
          </div>
          <div className="shrink-0">
             <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-5xl shadow-md border border-rose-100">
               💸
             </div>
          </div>
        </div>
      </div>

      {/* 6. FAQ SECTION */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">What is the waiting period in Health Insurance?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                A waiting period is the time you must wait before specific diseases or pre-existing conditions are covered. It typically ranges from 2 to 4 years for pre-existing diseases.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">What is Cashless Claim?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                In a cashless claim, the insurance company settles the hospital bill directly with the network hospital. You only pay for non-medical expenses or deductibles.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">Why is Term Insurance important?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Term insurance provides a large life cover (e.g., ₹1 Crore) at a very affordable premium. It ensures your family's financial stability (loan repayments, education) in case of your untimely demise.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* 7. BOTTOM CTA */}
      <div className="bg-rose-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't leave your future to chance</h2>
          <p className="text-rose-100 mb-8 text-lg">Get a customized insurance plan that fits your needs and budget.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-rose-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Apply for Insurance
          </Link>
        </div>
      </div>

    </div>
  );
}