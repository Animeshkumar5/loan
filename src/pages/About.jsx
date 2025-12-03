import React from 'react';

export default function About() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">About XYZ Loan Company</h1>
      <p className="text-lg text-gray-700 mb-4">
        Founded in 2024, XYZ Loan Company aims to make financial freedom accessible to everyone. 
        We believe in transparency, speed, and trust.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-xl mb-2">Fast Approval</h3>
          <p className="text-gray-600">Get approved in minutes, not days.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-xl mb-2">Low Rates</h3>
          <p className="text-gray-600">Competitive interest rates for all loan types.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-xl mb-2">Secure</h3>
          <p className="text-gray-600">Your data is protected by bank-level security.</p>
        </div>
      </div>
    </div>
  );
}