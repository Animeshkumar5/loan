import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HomeLoan() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. SEO METADATA */}
      <Helmet>
        <title>Home Loan - Low Interest Rate & High Eligibility | PaisaSolutions</title>
        <meta 
          name="description" 
          content="Buy your dream home with PaisaSolutions Home Loans. Interest rates starting at 8.50%, tenure up to 30 years, and tax benefits under PMAY. Apply online now." 
        />
        <meta 
          name="keywords" 
          content="home loan, housing finance, home loan interest rate, PMAY subsidy, tax benefit loan, balance transfer home loan" 
        />
        <link rel="canonical" href="https://yourwebsite.com/home-loan" />
      </Helmet>

      {/* 2. HERO SECTION */}
      <div className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 text-sm font-medium text-emerald-100">
              🏠 Stop Renting, Start Owning
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Turn the Key to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">Dream Home</span>
            </h1>
            <p className="text-lg text-emerald-100 max-w-xl">
              Get the lowest interest rates, maximum funding, and enjoy tax benefits up to ₹2 Lakhs. We make your home buying journey smooth and paperless.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-white text-emerald-900 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition transform text-center"
              >
                Apply for Home Loan
              </Link>
              <div className="flex items-center gap-4 text-sm font-medium text-emerald-200 px-4">
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Tax Benefits
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  30 Years Tenure
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
              alt="Home Loan" 
              className="rounded-3xl shadow-2xl border-4 border-white/10 transform rotate-1 hover:rotate-0 transition duration-500"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-emerald-900 p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce-slow">
              <p className="text-sm font-bold">Interest Rate</p>
              <p className="text-2xl font-extrabold text-emerald-600">8.50%*</p>
              <p className="text-xs text-gray-500">p.a. onwards</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FEATURES & BENEFITS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Home Loan?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We offer customized solutions for ready-to-move properties, under-construction homes, and even plot purchases.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "💰", title: "Tax Savings", desc: "Save tax under Section 80C (Principal) & 24b (Interest) of IT Act." },
            { icon: "⏳", title: "Longest Tenure", desc: "Flexible repayment options up to 30 years to reduce your monthly EMI burden." },
            { icon: "🔄", title: "Balance Transfer", desc: "Transfer your existing high-interest loan to us at lower rates with top-up facility." },
            { icon: "👷", title: "PMAY Subsidy", desc: "Avail interest subsidy under Pradhan Mantri Awas Yojana (for eligible applicants)." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 group">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {[
                  "Age: 21 to 65 years",
                  "Resident Type: Resident Indian / NRI",
                  "Employment: Salaried or Self-Employed",
                  "Credit Score: 750+ for best rates",
                  "Work Experience: Min 2 years stability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-lg flex items-center justify-center text-sm">2</span>
                Documents Required
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "KYC (PAN & Aadhaar)",
                  "Income Proof (Salary/ITR)",
                  "Bank Statements (6 months)",
                  "Property Chain Documents",
                  "Sale Agreement / ATS",
                  "Processing Fee Cheque"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
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
          <h2 className="text-3xl font-bold text-gray-900">Interest Rates & Charges</h2>
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
                <td className="p-5 text-gray-600 font-medium">Interest Rate (Floating)</td>
                <td className="p-5 text-gray-800 font-bold">8.50% - 9.50% p.a.</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">LTV (Loan to Value)</td>
                <td className="p-5 text-gray-800">75% to 90% of Property Cost</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Processing Fee</td>
                <td className="p-5 text-gray-800">0.25% - 1.00% + GST</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Loan Tenure</td>
                <td className="p-5 text-gray-800">Up to 30 Years</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Pre-payment Charges</td>
                <td className="p-5 text-gray-800">Nil (For floating rate loans)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. FAQ SECTION */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">What is the difference between Fixed and Floating rates?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                A fixed rate remains constant throughout the loan tenure, while a floating rate changes based on the RBI Repo rate. Most home loans are on floating rates as they are generally cheaper.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">Can I include my spouse as a co-applicant?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Yes, adding a working spouse as a co-applicant increases your loan eligibility and allows both of you to claim separate tax deductions.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">Does the property need to be insured?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Yes, property insurance is mandatory to protect against structural damage due to fire, earthquakes, or other calamities during the loan tenure.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* 7. BOTTOM CTA */}
      <div className="bg-emerald-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to build your future?</h2>
          <p className="text-emerald-100 mb-8 text-lg">Apply now and get closer to the home you've always wanted.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-emerald-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Get Home Loan Quote
          </Link>
        </div>
      </div>

    </div>
  );
}