import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoanSteps from "../components/LoanSteps"; 

export default function About() {
  return (
    // REMOVED 'pb-24' to ensure no white gap between content and footer
    <div className="bg-gray-50 min-h-screen">
      
      {/* 2. SEO Section */}
      <Helmet>
        <title>About Us - Trusted Fast & Secure Loans | PaisaSolutions.com</title>
        <meta 
          name="description" 
          content="PaisaSolutions is a leading financial partner providing Personal Loans, Business Loans, Home Loans, Used Car Loans, and Insurance. We offer fast approval, low rates, and secure processes." 
        />
        <meta 
          name="keywords" 
          content="about PaisaSolutions, loan company, personal loan provider, business loan experts, home loan agents, insurance services, financial freedom" 
        />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Helmet>

      {/* --- HEADER SECTION --- */}
      <div className="pt-16 pb-12 text-center bg-white px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
          About <span className="text-blue-600">PaisaSolutions.com</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Founded in 2025, PaisaSolutions.com was built on a simple premise: <strong>Financial freedom should be accessible to everyone.</strong> We bridge the gap between your dreams and reality by providing transparent, fast, and secure financial products tailored to your unique needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* --- WHO WE ARE --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Team meeting" 
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              India’s First Debt Consolidation Marketplace and easy Loan Comparison Platform for Personal & Business Loans. Paisasolution.com caters to the loan requirements of the whole working population, which includes salaried individuals, self-employed professionals, and business owners.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are an individual looking to consolidate debt, a family buying their first home, or an entrepreneur ready to scale, we stand by you as a reliable partner, not just a lender.
            </p>
          </div>
        </div>

        {/* --- OUR MISSION & VISION --- */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-10 md:p-16 text-white mb-20 shadow-2xl relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 -mr-20 -mt-20"></div>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-blue-100 leading-relaxed text-lg">
                To empower individuals and businesses with accessible, transparent, and fair financial solutions. We strive to eliminate the complexity of traditional banking and provide a frictionless experience that puts the customer's needs first.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-2xl mb-6">👁️</div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-blue-100 leading-relaxed text-lg">
                To become the most trusted financial partner in the industry, known not just for lending money, but for building long-term financial health and prosperity for our community.
              </p>
            </div>
          </div>
        </div>

        {/* --- WHAT WE DO --- */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Personal Loans</h3>
              <p className="text-gray-600 text-sm">
                From medical emergencies to dream vacations, our unsecured personal loans offer flexibility. Get up to $100k with no collateral required.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">💼</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Business Loans</h3>
              <p className="text-gray-600 text-sm">
                Fuel your startup or expand your enterprise. We offer working capital and equipment financing designed to keep your business growing.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🏠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Home Loans</h3>
              <p className="text-gray-600 text-sm">
                Stop renting and start owning. Our mortgage experts guide you through every step to lock in the lowest interest rates.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🚗</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Used Car Loans</h3>
              <p className="text-gray-600 text-sm">
                Drive your dream car without the financial strain. We provide financing for pre-owned vehicles with up to 90% funding.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Insurance Services</h3>
              <p className="text-gray-600 text-sm">
                Protect what matters most. We offer comprehensive Life, Health, and General insurance plans to safeguard your family.
              </p>
            </div>

            {/* Value Prop */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-lg text-white transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>✓ 100% Digital Process</li>
                <li>✓ Minimal Documentation</li>
                <li>✓ No Hidden Charges</li>
                <li>✓ 24/7 Customer Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- LOAN STEPS (Full Width) --- */}
      <div className="w-full bg-white border-t border-gray-100 mb-12">
        <LoanSteps />
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 text-center pt-10">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">10k+</h3>
            <p className="text-gray-500 font-medium">Happy Customers</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">₹50M+</h3>
            <p className="text-gray-500 font-medium">Loans Disbursed</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">99%</h3>
            <p className="text-gray-500 font-medium">Client Satisfaction</p>
          </div>
        </div>
      </div>

    </div>
  );
}