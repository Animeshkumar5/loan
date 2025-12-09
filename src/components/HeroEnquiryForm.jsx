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
    "Used Car Loan",
    "Home Loan",
    "Life Insurance"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            pattern="[0-9]{6}"
            maxLength="6"
            required
          />
        </div>

        {/* What loan are you looking for? */}
        <div>
          <label className="block text-gray-700 font-semibold mb-3 text-sm">
            What loan are you looking for? *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {loanTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setForm({ ...form, loanType: type })}
                className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  form.loanType === type
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Employment Type */}
        <div>
          <label className="block text-gray-700 font-semibold mb-3 text-sm">
            Employment Type *
          </label>
          <div className="grid grid-cols-3 gap-3">
            {employmentTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setForm({ ...form, employmentType: type })}
                className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  form.employmentType === type
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Monthly Earning */}
        <div>
          <label className="block text-gray-700 font-semibold mb-3 text-sm">
            Monthly Earning *
          </label>
          <div className="space-y-3">
            {earningRanges.map((range) => (
              <label
                key={range}
                className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                  form.earning === range
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="earning"
                  value={range}
                  checked={form.earning === range}
                  onChange={(e) => setForm({ ...form, earning: e.target.value })}
                  className="w-5 h-5 text-blue-600 mr-3"
                  required
                />
                <span className="font-semibold text-sm">{range}</span>
              </label>
            ))}
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