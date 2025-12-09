import React, { useState } from "react";
import { sendMail } from "../utils/sendMail";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await sendMail(form);
      setStatus("Message sent successfully!");

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
    } catch (err) {
      console.log(err);
      setStatus("Failed to send message. Try again!");
    }
  };

  const loanTypes = [
    "Personal Loan",
    "Business Loan",
    "Home Loan",
    "Life Insurance",
    "Used Car Loan"
  ];

  const employmentTypes = [
    "Salaried",
    "Self Employed",
    "Business"
  ];

  const earningRanges = [
    "Less than ₹20k",
    "₹20k - ₹50k",
    "₹50k - ₹1 Lakh",
    "₹1 Lakh+"
  ];

  // Common input style for consistency
  const inputClassName = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white text-gray-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Fill in your details and we'll get back to you shortly.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClassName}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClassName}
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Mobile Number *
              </label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClassName}
                pattern="[0-9]{10}"
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                City *
              </label>
              <input
                type="text"
                placeholder="Enter your city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className={inputClassName}
                required
              />
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Pincode *
              </label>
              <input
                type="text"
                placeholder="Enter your pincode"
                value={form.pincode}
                onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                className={inputClassName}
                pattern="[0-9]{6}"
                maxLength="6"
                required
              />
            </div>

            {/* --- CHANGED SECTION: Loan Type Dropdown --- */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                What loan are you looking for? *
              </label>
              <div className="relative">
                <select
                  value={form.loanType}
                  onChange={(e) => setForm({ ...form, loanType: e.target.value })}
                  className={`${inputClassName} appearance-none`}
                  required
                >
                  <option value="" disabled>Select Loan Type</option>
                  {loanTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* --- CHANGED SECTION: Employment Type Dropdown --- */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Employment Type *
              </label>
              <div className="relative">
                <select
                  value={form.employmentType}
                  onChange={(e) => setForm({ ...form, employmentType: e.target.value })}
                  className={`${inputClassName} appearance-none`}
                  required
                >
                  <option value="" disabled>Select Employment Type</option>
                  {employmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* --- CHANGED SECTION: Monthly Earning Dropdown --- */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Monthly Earning *
              </label>
              <div className="relative">
                <select
                  value={form.earning}
                  onChange={(e) => setForm({ ...form, earning: e.target.value })}
                  className={`${inputClassName} appearance-none`}
                  required
                >
                  <option value="" disabled>Select Earning Range</option>
                  {earningRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <div className={`mt-6 p-4 rounded-lg text-center font-semibold ${
              status.includes('successfully') 
                ? 'bg-green-100 text-green-700 border border-green-300' 
                : status.includes('Failed') 
                ? 'bg-red-100 text-red-700 border border-red-300' 
                : 'bg-blue-100 text-blue-700 border border-blue-300'
            }`}>
              {status}
            </div>
          )}
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
            <p className="text-sm text-gray-600">+91 1234567890</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Email</h3>
            <p className="text-sm text-gray-600">info@loancompany.com</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Location</h3>
            <p className="text-sm text-gray-600">Mumbai, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}