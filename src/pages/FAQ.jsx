import React from 'react';

export default function FAQ() {
  const faqs = [
    { q: "How do I apply for a loan?", a: "You can apply online through our website in just 5 minutes." },
    { q: "What is the interest rate?", a: "Rates start at 5% but depend on your credit score." },
    { q: "Do you require collateral?", a: "For personal loans, no collateral is required." },
  ];

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-lg text-blue-800">{item.q}</h3>
            <p className="text-gray-600 mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}