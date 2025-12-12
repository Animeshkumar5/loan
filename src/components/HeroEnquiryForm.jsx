import React, { useState } from "react";
// Removed: import { sendMail } from "../utils/sendMail";

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

  // 🔴 IMPORTANT: Replace this URL with your specific SheetDB API URL
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
        // SheetDB requires the data to be wrapped in a "data" key
        body: JSON.stringify({
          data: form,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Enquiry submitted successfully!");
        // Clear the form
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
        console.error("SheetDB Error:", result);
        setStatus("Error submitting enquiry. Please try again.");
      }
    } catch (err) {
      console.error("Network Error:", err);
      setStatus("Network error. Please check your connection.");
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

  // Common input style
  const inputClassName = "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 text-gray-900 text-sm sm:text-base outline-none";
  const labelClassName = "block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm";

  return (
    <div className="bg-white">
      {/* Form Header (Optional, if not covered by Modal Header) */}
      {/* <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Quick Loan Enquiry</h2>
        <p className="text-gray-500 text-sm">Fill details to get an instant callback.</p>
      </div> */}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

        {/* Full Name */}
        <div className="col-span-1">
          <label className={labelClassName}>Full Name *</label>
          <input
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClassName}
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="col-span-1">
          <label className={labelClassName}>Mobile Number *</label>
          <input
            type="tel"
            placeholder="98765 43210"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClassName}
            pattern="[0-9]{10}"
            maxLength="10"
            required
          />
        </div>

        {/* Email Address (Full Width) */}
        <div className="col-span-1 md:col-span-2">
          <label className={labelClassName}>Email Address *</label>
          <input
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClassName}
            required
          />
        </div>

        {/* City */}
        <div className="col-span-1">
          <label className={labelClassName}>City *</label>
          <input
            type="text"
            placeholder="Mumbai"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className={inputClassName}
            required
          />
        </div>

        {/* Pincode */}
        <div className="col-span-1">
          <label className={labelClassName}>Pincode *</label>
          <input
            type="text"
            placeholder="400001"
            value={form.pincode}
            onChange={(e) => setForm({ ...form, pincode: e.target.value })}
            className={inputClassName}
            pattern="[0-9]{6}"
            maxLength="6"
            required
          />
        </div>

        {/* Loan Type */}
        <div className="col-span-1 md:col-span-2">
          <label className={labelClassName}>Loan Requirement *</label>
          <div className="relative">
            <select
              value={form.loanType}
              onChange={(e) => setForm({ ...form, loanType: e.target.value })}
              className={`${inputClassName} appearance-none cursor-pointer`}
              required
            >
              <option value="" disabled>Select Loan Type</option>
              {loanTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Employment Type */}
        <div className="col-span-1">
          <label className={labelClassName}>Employment Type *</label>
          <div className="relative">
            <select
              value={form.employmentType}
              onChange={(e) => setForm({ ...form, employmentType: e.target.value })}
              className={`${inputClassName} appearance-none cursor-pointer`}
              required
            >
              <option value="" disabled>Select Type</option>
              {employmentTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Monthly Earning */}
        <div className="col-span-1">
          <label className={labelClassName}>Monthly Income *</label>
          <div className="relative">
            <select
              value={form.earning}
              onChange={(e) => setForm({ ...form, earning: e.target.value })}
              className={`${inputClassName} appearance-none cursor-pointer`}
              required
            >
              <option value="" disabled>Select Range</option>
              {earningRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button - Full Width */}
        <div className="col-span-1 md:col-span-2 pt-2">
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3.5 rounded-xl transition transform hover:scale-[1.02] shadow-lg active:scale-95"
          >
            Submit Enquiry
          </button>
        </div>

      </form>

      {/* Status Message */}
      {status && (
        <div className={`mt-4 p-3 rounded-lg text-sm font-semibold text-center ${
          status.includes('success') 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {status}
        </div>
      )}
    </div>
  );
}