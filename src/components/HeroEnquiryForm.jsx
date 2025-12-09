import React, { useState } from "react";
import { sendMail } from "../utils/sendMail";

export default function HeroEnquiryForm() {
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
      setStatus("Enquiry submitted successfully!");

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
    } catch {
      setStatus("Error submitting enquiry!");
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

  // Common input style to ensure Dropdowns look exactly like Text Inputs
  const inputClassName = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white text-gray-700";

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-3">Quick Loan Enquiry</h2>
      <p className="text-gray-600 text-sm mb-5">
        Fill your details — our team will contact you instantly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

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
            {/* Custom Arrow Icon for Dropdown */}
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
          Submit Enquiry
        </button>
      </form>

      {status && (
        <p className={`text-sm font-semibold mt-4 text-center ${
          status.includes('success') 
            ? 'text-green-600' 
            : status.includes('Error') 
            ? 'text-red-600' 
            : 'text-blue-600'
        }`}>
          {status}
        </p>
      )}
    </div>
  );
}