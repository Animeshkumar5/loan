import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function PersonalLoan() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. SEO METADATA */}
      <Helmet>
        <title>Personal Loan - Instant Approval & Low Interest Rates | PaisaSolutions</title>
        <meta 
          name="description" 
          content="Apply for an instant Personal Loan up to ₹50 Lakhs. Low interest rates starting at 10.49%, flexible tenure, and 100% paperless process with PaisaSolutions." 
        />
        <meta 
          name="keywords" 
          content="personal loan, instant loan, unsecured loan, emergency loan, low interest personal loan, online loan application" 
        />
        <link rel="canonical" href="https://yourwebsite.com/personal-loan" />
      </Helmet>

      {/* 2. HERO SECTION */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 text-sm font-medium text-blue-100">
              🚀 Disbursal in 24 Hours
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Fuel Your Dreams with an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Instant Personal Loan</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-xl">
              Whether it's a medical emergency, dream wedding, or luxury vacation, get funds up to <span className="font-bold text-white">₹50 Lakhs</span> without collateral.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition transform text-center"
              >
                Apply Now
              </Link>
              <div className="flex items-center gap-4 text-sm font-medium text-blue-200 px-4">
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  No Collateral
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  100% Online
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80" 
              alt="Personal Loan" 
              className="rounded-3xl shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition duration-500"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce-slow">
              <p className="text-sm font-bold">Interest Rate</p>
              <p className="text-2xl font-extrabold text-blue-600">10.49%*</p>
              <p className="text-xs text-gray-500">p.a. onwards</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FEATURES & BENEFITS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Our Personal Loan?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We connect you with 40+ lending partners to ensure you get the best deal tailored to your profile.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "⚡", title: "Quick Approval", desc: "Get approved instantly and funds disbursed within 24 hours." },
            { icon: "📄", title: "Minimal Documentation", desc: "100% paperless journey with just basic KYC and income proof." },
            { icon: "🔓", title: "No Collateral", desc: "Unsecured loans mean you don't need to pledge any assets." },
            { icon: "📅", title: "Flexible Tenure", desc: "Repay comfortably over a period of 12 to 60 months." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. ELIGIBILITY & DOCUMENTS (Split Section) */}
      <div className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Eligibility */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {[
                  "Age: 21 to 60 years",
                  "Employment: Salaried or Self-Employed",
                  "Minimum Income: ₹25,000 per month",
                  "CIBIL Score: 700 or above",
                  "Work Experience: Min 1 year total (6 months in current org)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm">2</span>
                Documents Required
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "PAN Card",
                  "Aadhaar Card / Passport",
                  "Last 3 Months Salary Slips",
                  "Last 6 Months Bank Statement",
                  "Address Proof (Utility Bill)",
                  "Passport Size Photograph"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 5. INTEREST RATES TABLE */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900">Interest Rates & Charges</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700 uppercase text-sm tracking-wider">
                <th className="p-5 font-bold border-b border-gray-200">Parameter</th>
                <th className="p-5 font-bold border-b border-gray-200">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-5 text-gray-600 font-medium">Interest Rate</td>
                <td className="p-5 text-gray-800 font-bold">10.49% - 24.00% p.a.</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Loan Amount</td>
                <td className="p-5 text-gray-800">₹50,000 to ₹50 Lakhs</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Processing Fee</td>
                <td className="p-5 text-gray-800">0.5% to 2.5% of loan amount</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Loan Tenure</td>
                <td className="p-5 text-gray-800">12 to 60 Months</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Pre-payment Charges</td>
                <td className="p-5 text-gray-800">As per bank policy (usually nil after 12 EMIs)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. FAQ SECTION */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">How much personal loan can I get?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                The loan amount depends on your monthly income and credit score. Generally, you can get up to 20 times your monthly salary, subject to a maximum of ₹50 Lakhs.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">Does applying check my credit score?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Checking your eligibility with us is a "soft inquiry" and does not impact your CIBIL score. A hard inquiry is only done by the bank when you formally submit the application.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">How long does disbursal take?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Once documents are verified, the loan amount is typically credited to your bank account within 24 to 48 hours.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* 7. BOTTOM CTA */}
      <div className="bg-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-8 text-lg">Apply now and get an instant quote tailored for you.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Get Loan Quote
          </Link>
        </div>
      </div>

    </div>
  );
}