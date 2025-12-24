import React, { useState } from "react";
import { sendEmails } from "../service/sendmail"; 

// --- CHANGE 1: Import Firebase functions ---
import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

export default function HeroEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    pincode: "",
    panCard: "",
    existingLoan: "",   
    loanType: "",
    employmentType: "",
    companyName: "",    
    sector: "",         
    businessName: "",   
    earning: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing..."); // Changed text to indicate work is happening

    try {
      // --- CHANGE 2: Save to Firestore Database First ---
      // We add a 'createdAt' field so you know when the lead came in
      await addDoc(collection(db, "enquiries"), {
        ...form,
        createdAt: new Date()
      });

      // --- CHANGE 3: Send Email (Existing Logic) ---
      // We wait for the DB save to finish, then send the email
      const emailResult = await sendEmails(form);

      if (emailResult.success) {
        setStatus("Enquiry submitted successfully! We will contact you soon.");
        setForm({
          name: "",
          phone: "",
          email: "",
          city: "",
          pincode: "",
          panCard: "",
          existingLoan: "",
          loanType: "",
          employmentType: "",
          companyName: "",
          sector: "",
          businessName: "",
          earning: "",
        });
      } else {
        console.error("Email Submission Error:", emailResult);
        // Even if email fails, data is saved in DB, so we can be less harsh with the error
        setStatus("Details saved, but email notification failed. We will contact you.");
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
      setStatus("Something went wrong. Please check your connection.");
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
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

        {/* ... (Rest of your JSX input fields remain exactly the same) ... */}
        
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

        {/* Email Address */}
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

        {/* PAN Card */}
        <div className="col-span-1">
          <label className={labelClassName}>PAN Card Number *</label>
          <input
            type="text"
            placeholder="ABCDE1234F"
            value={form.panCard}
            onChange={(e) => setForm({ ...form, panCard: e.target.value.toUpperCase() })}
            className={`${inputClassName} uppercase`}
            maxLength="10"
            required
          />
        </div>

        {/* Existing Loan */}
        <div className="col-span-1">
          <label className={labelClassName}>Any Existing Loan? *</label>
          <div className="relative">
            <select
              value={form.existingLoan}
              onChange={(e) => setForm({ ...form, existingLoan: e.target.value })}
              className={`${inputClassName} appearance-none cursor-pointer`}
              required
            >
              <option value="" disabled>Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
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

        {/* Conditional Fields based on Employment Type */}
        {form.employmentType === "Salaried" && (
          <>
            <div className="col-span-1 md:col-span-2">
              <label className={labelClassName}>Company Name *</label>
              <input
                type="text"
                placeholder="Enter company name"
                value={form.companyName}
                onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                className={inputClassName}
                required
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className={labelClassName}>Sector *</label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sector"
                    value="Government"
                    checked={form.sector === "Government"}
                    onChange={(e) => setForm({ ...form, sector: e.target.value })}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                    required
                  />
                  <span className="text-gray-700">Government</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sector"
                    value="Private"
                    checked={form.sector === "Private"}
                    onChange={(e) => setForm({ ...form, sector: e.target.value })}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                    required
                  />
                  <span className="text-gray-700">Private</span>
                </label>
              </div>
            </div>
          </>
        )}

        {form.employmentType === "Business" && (
          <div className="col-span-1 md:col-span-2">
            <label className={labelClassName}>Business Name *</label>
            <input
              type="text"
              placeholder="Enter your business name"
              value={form.businessName}
              onChange={(e) => setForm({ ...form, businessName: e.target.value })}
              className={inputClassName}
              required
            />
          </div>
        )}

        {/* Submit Button */}
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
          status.includes('successfully') || status.includes('Details saved')
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {status}
        </div>
      )}
    </div>
  );
}