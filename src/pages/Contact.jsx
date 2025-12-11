import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    pincode: "",
    loanType: "",
    employmentType: "",
    earning: "",
  });

  const [status, setStatus] = useState("");

  // REPLACE THIS WITH YOUR ACTUAL SHEETDB URL
const SHEETDB_URL = import.meta.env.VITE_SHEETDB_URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        // SheetDB expects data wrapped in a "data" object
        body: JSON.stringify({
          data: form,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        // Clear form after success
        setForm({
          name: "",
          phone: "",
          email: "",
          city: "",
          pincode: "",
          loanType: "",
          employmentType: "",
          earning: "",
        });
      } else {
        // If SheetDB returns an error
        console.error("SheetDB Error:", result);
        setStatus("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("Network Error:", err);
      setStatus("Failed to connect. Check internet connection.");
    }
  };

  const loanTypes = ["Personal Loan", "Business Loan", "Home Loan", "Life Insurance", "Used Car Loan"];
  const employmentTypes = ["Salaried", "Self Employed", "Business"];
  const earningRanges = ["Less than ₹20k", "₹20k - ₹50k", "₹50k - ₹1 Lakh", "₹1 Lakh+"];
  const inputClassName = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white text-gray-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-24">
      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-3">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Fill in your details and we'll get back to you shortly.
            </p>
          </div>

          {/* Form Section - ID kept for Global Alert scrolling */}
          <div id="contact-form" className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left Section - Form */}
              <div className="p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClassName}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Email Address *</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClassName}
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClassName}
                    />
                  </div>

                  {/* City & Pincode */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">City *</label>
                      <input
                        type="text"
                        placeholder="Your city"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className={inputClassName}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">Pincode *</label>
                      <input
                        type="text"
                        placeholder="Pincode"
                        value={form.pincode}
                        onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                        className={inputClassName}
                        maxLength="6"
                      />
                    </div>
                  </div>

                  {/* Loan Type */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Loan Type *</label>
                    <div className="relative">
                      <select
                        value={form.loanType}
                        onChange={(e) => setForm({ ...form, loanType: e.target.value })}
                        className={`${inputClassName} appearance-none`}
                      >
                        <option value="" disabled>Select Loan Type</option>
                        {loanTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Employment Type */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Employment Type *</label>
                    <div className="relative">
                      <select
                        value={form.employmentType}
                        onChange={(e) => setForm({ ...form, employmentType: e.target.value })}
                        className={`${inputClassName} appearance-none`}
                      >
                        <option value="" disabled>Select Employment Type</option>
                        {employmentTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Monthly Earning */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Monthly Earning *</label>
                    <div className="relative">
                      <select
                        value={form.earning}
                        onChange={(e) => setForm({ ...form, earning: e.target.value })}
                        className={`${inputClassName} appearance-none`}
                      >
                        <option value="" disabled>Select Earning Range</option>
                        {earningRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition transform hover:scale-105 shadow-lg mt-2"
                  >
                    SEND
                  </button>

                  {/* Status Message */}
                  {status && (
                    <div className={`p-4 rounded-lg text-center font-semibold ${
                      status.includes('successfully') ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'
                    }`}>
                      {status}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Section - Image */}
              <div className="relative h-full min-h-[400px] lg:min-h-full">
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80" 
                  alt="Contact Us" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* Contact Info Below */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
              <p className="text-sm text-gray-600">+91 8795555728</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-sm text-gray-600">Support@paisasolutions.com</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Location</h3>
              <p className="text-sm text-gray-600">Gurgaon, India</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}