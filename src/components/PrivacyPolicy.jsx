import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-8">
          <h1 className="text-3xl font-bold text-white text-center">Privacy Policy</h1>
          <p className="text-blue-100 text-center mt-2">Last Updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 text-gray-700">
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p className="leading-relaxed">
              We value your trust and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, and share information when you use our loan enquiry services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-2">We collect the following personal details to process your loan application:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Personal Identification (Name, PAN Card)</li>
              <li>Contact Details (Phone Number, Email Address)</li>
              <li>Financial Data (Income, Existing Loans, Employment details)</li>
              <li>Location Data (City, Pincode)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Data</h2>
            <p className="leading-relaxed">
              Your data is used solely for checking loan eligibility, processing applications with our banking partners, and communicating with you regarding your application status. We do not sell your data to unauthorized third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures (encryption and secure servers) to protect your data from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this policy, please contact our support team at Info@paisasolutions.com.
            </p>
          </section>

          {/* Back Button */}
          <div className="pt-6 mt-6 border-t border-gray-200">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;