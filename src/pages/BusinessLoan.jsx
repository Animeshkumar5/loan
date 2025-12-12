import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function BusinessLoan() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. SEO METADATA */}
      <Helmet>
        <title>Business Loan - Unsecured SME & MSME Loans | PaisaSolutions</title>
        <meta 
          name="description" 
          content="Scale your business with collateral-free Business Loans up to ₹50 Lakhs. Quick approval for MSMEs, startups, and established firms. Apply online now." 
        />
        <meta 
          name="keywords" 
          content="business loan, MSME loan, working capital loan, unsecured business loan, small business finance, startup loan" 
        />
        <link rel="canonical" href="https://yourwebsite.com/business-loan" />
      </Helmet>

      {/* 2. HERO SECTION */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 text-sm font-medium text-orange-100">
              📈 Take Your Business Next Level
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Capital to Power Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-200">Business Growth</span>
            </h1>
            <p className="text-lg text-slate-200 max-w-xl">
              Whether you need working capital, machinery upgrades, or funds for expansion, get unsecured loans up to <span className="font-bold text-white">₹75 Lakhs</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-white text-slate-900 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-orange-50 hover:shadow-xl hover:-translate-y-1 transition transform text-center"
              >
                Apply for Business Loan
              </Link>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-300 px-4">
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  No Collateral
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  MSME Friendly
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" 
              alt="Business Loan" 
              className="rounded-3xl shadow-2xl border-4 border-white/10 transform rotate-1 hover:rotate-0 transition duration-500"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce-slow">
              <p className="text-sm font-bold">Funding Upto</p>
              <p className="text-2xl font-extrabold text-orange-600">₹75 Lakhs*</p>
              <p className="text-xs text-gray-500">Unsecured</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FEATURES & BENEFITS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Business Loan?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We understand business cycles. Our loan products are designed to offer maximum flexibility for entrepreneurs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "🔓", title: "Collateral Free", desc: "No need to mortgage your assets or property to get funds." },
            { icon: "⚡", title: "Fast Processing", desc: "Digital application process ensures disbursement in 3-5 days." },
            { icon: "🔄", title: "Overdraft Facility", desc: "Pay interest only on the amount you utilize with our OD limit." },
            { icon: "📉", title: "Tax Benefits", desc: "Interest paid on business loans is tax-deductible as a business expense." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 group">
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {[
                  "Business Vintage: Minimum 3 years",
                  "Turnover: Minimum ₹10 Lakhs annually",
                  "Profitability: Business should be profit-making for last 2 years",
                  "Age: 24 to 70 years",
                  "CIBIL Score: 700+ for main applicant"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-700 text-white rounded-lg flex items-center justify-center text-sm">2</span>
                Documents Required
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "KYC of Directors/Partners",
                  "Business Registration Proof (GST/Udyam)",
                  "Last 2 Years ITR & Financials",
                  "Last 12 Months Bank Statements",
                  "Business Address Proof",
                  "Partnership Deed / MOA (if applicable)"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-slate-500 hover:bg-slate-50 transition">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
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
          <h2 className="text-3xl font-bold text-slate-900">Interest Rates & Charges</h2>
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
                <td className="p-5 text-gray-800 font-bold">15% - 24% p.a.</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Loan Amount</td>
                <td className="p-5 text-gray-800">₹1 Lakh to ₹75 Lakhs</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Processing Fee</td>
                <td className="p-5 text-gray-800">2% - 3% of loan amount</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Loan Tenure</td>
                <td className="p-5 text-gray-800">12 to 60 Months</td>
              </tr>
              <tr>
                <td className="p-5 text-gray-600 font-medium">Foreclosure Charges</td>
                <td className="p-5 text-gray-800">2% - 5% on outstanding principal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. FAQ SECTION */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">Can a startup apply for this loan?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                For unsecured business loans, a vintage of 3 years is usually required. However, if you are a startup with strong cash flows or GST returns, we can explore specific startup loan products for you.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">Is GST registration mandatory?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Yes, for most unsecured business loans, GST registration and returns are a key indicator of business turnover and health.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">What is the difference between Term Loan and Overdraft?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                A Term Loan provides a lump sum amount repaid via EMIs. An Overdraft (OD) gives you a credit limit; you can withdraw as needed and pay interest only on the used amount.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* 7. BOTTOM CTA */}
      <div className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Expand?</h2>
          <p className="text-slate-300 mb-8 text-lg">Don't let funds stop your growth story. Apply today.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-orange-700 transition transform hover:scale-105"
          >
            Get Business Loan Quote
          </Link>
        </div>
      </div>

    </div>
  );
}