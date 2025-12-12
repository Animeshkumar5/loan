import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function CarLoan() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. SEO METADATA */}
      <Helmet>
        <title>Car Loan - New & Used Car Finance | Low Interest Rates | PaisaSolutions</title>
        <meta 
          name="description" 
          content="Get instant approval for New and Used Car Loans. Up to 90% on-road funding, flexible tenure up to 7 years, and rates starting at 8.75% p.a." 
        />
        <meta 
          name="keywords" 
          content="car loan, used car loan, vehicle finance, auto loan, low interest car loan, new car financing" 
        />
        <link rel="canonical" href="https://yourwebsite.com/car-loan" />
      </Helmet>

      {/* 2. HERO SECTION */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 text-sm font-medium text-blue-100">
              🚗 Drive Your Dream Car Today
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Zoom Ahead with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Easy Car Loans</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-xl">
              Get up to <span className="font-bold text-white">90% On-Road Funding</span> for new cars and hassle-free financing for pre-owned vehicles.
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
                  New & Used
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Quick Disbursal
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80" 
              alt="Car Loan" 
              className="rounded-3xl shadow-2xl border-4 border-white/10 transform -rotate-2 hover:rotate-0 transition duration-500"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white text-blue-900 p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce-slow">
              <p className="text-sm font-bold">Interest Rate</p>
              <p className="text-2xl font-extrabold text-blue-600">8.75%*</p>
              <p className="text-xs text-gray-500">p.a. onwards</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FEATURES & BENEFITS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Our Car Loan?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From hatchbacks to luxury sedans, we finance them all with terms that suit your pocket.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "🏎️", title: "High LTV Ratio", desc: "Get up to 90% funding of the on-road price for new cars." },
            { icon: "📜", title: "Minimal Paperwork", desc: "Simple documentation and doorstep service available." },
            { icon: "⏳", title: "Long Tenure", desc: "Repayment tenure up to 7 years to keep EMIs affordable." },
            { icon: "🔄", title: "Used Car Finance", desc: "Special rates and quick transfer assistance for pre-owned cars." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 group">
              <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
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
                  "Age: 21 to 65 years",
                  "Income: Min ₹20,000/month (Salaried)",
                  "Employment: Min 1 year stability",
                  "CIBIL Score: 700+ preferred",
                  "Business Vintage: Min 2 years (Self-employed)"
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
                  "KYC Documents",
                  "Income Proof (Salary Slips/ITR)",
                  "Bank Statements (6 months)",
                  "Vehicle Quotation (New Car)",
                  "RC Copy (Used Car)",
                  "Signature Verification"
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
                <th className="p-5 font-bold border-b border-gray-200">New Car</th>
                <th className="p-5 font-bold border-b border-gray-200">Used Car</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-5 text-gray-600 font-medium">Interest Rate</td>
                <td className="p-5 text-gray-800 font-bold">8.75% - 11% p.a.</td>
                <td className="p-5 text-gray-800 font-bold">11% - 16% p.a.</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">LTV (Loan to Value)</td>
                <td className="p-5 text-gray-800">Up to 90% (On-Road)</td>
                <td className="p-5 text-gray-800">Up to 80% (Valuation)</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Processing Fee</td>
                <td className="p-5 text-gray-800">₹3,000 - ₹5,000</td>
                <td className="p-5 text-gray-800">1% - 2% of loan</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Loan Tenure</td>
                <td className="p-5 text-gray-800">1 to 7 Years</td>
                <td className="p-5 text-gray-800">1 to 5 Years</td>
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
                <h3 className="text-lg font-medium">Can I get 100% funding for a car?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Most banks offer up to 90% of the on-road price. However, for specific electric vehicles or corporate offers, 100% funding on ex-showroom price is possible.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">Do you finance used cars?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Yes, we offer competitive loans for pre-owned cars. The interest rates are slightly higher than new cars, and the loan amount depends on the car's valuation and age.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">What is hypothecation?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Hypothecation means your car is pledged as security to the bank until the loan is repaid. Once you pay off the loan, the bank issues an NOC to remove this from your RC.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* 7. BOTTOM CTA */}
      <div className="bg-indigo-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to hit the road?</h2>
          <p className="text-indigo-100 mb-8 text-lg">Apply now and get an instant quote tailored for you.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Get Car Loan Quote
          </Link>
        </div>
      </div>

    </div>
  );
}