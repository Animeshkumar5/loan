import React, { useState } from "react";
import { sendMail } from "../utils/sendMail";

export default function HeroEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    amount: "50000",
    loanType: "",
    message: "",
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
        location: "",
        amount: "50000",
        loanType: "",
        message: "",
      });
    } catch {
      setStatus("Error submitting enquiry!");
    }
  };

  // Format number with commas
  const formatAmount = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-3">Quick Loan Enquiry</h2>
      <p className="text-gray-600 text-sm mb-5">
        Fill your details — our team will contact you instantly.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input-style"
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="input-style"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-style"
        />

        <input
          type="text"
          placeholder="Location / City"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="input-style"
        />

        {/* LOAN AMOUNT INPUT */}
        <div className="relative">
          <input
            type="number"
            placeholder="Loan Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="input-style"
            min="10000"
            max="500000"
            step="5000"
            required
          />
        </div>

        {/* LOAN AMOUNT SLIDER */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2 text-sm">
            Adjust Amount: ₹{formatAmount(form.amount)}
          </label>
          <div className="relative pt-2">
            <input
              type="range"
              min="10000"
              max="500000"
              step="5000"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer slider-thumb"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>₹10K</span>
              <span>₹500K</span>
            </div>
          </div>
        </div>

        {/* LOAN TYPE - Slider Buttons */}
        <div className="loan-type-section">
          <label className="loan-type-label">Loan Type</label>

          <div className="loan-type-slider-container">
            {["Salary", "Business", "Home Loan", "Insurance"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setForm({ ...form, loanType: type })}
                className={`loan-type-slide ${form.loanType === type ? 'active' : ''}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <textarea
          placeholder="Message (optional)"
          rows="3"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="input-style md:col-span-2"
        />

        <button className="md:col-span-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition transform hover:scale-105 shadow-lg">
          Submit Enquiry
        </button>
      </form>

      {status && (
        <p className={`text-sm font-semibold mt-3 text-center ${status.includes('success') ? 'text-green-600' : status.includes('Error') ? 'text-red-600' : 'text-blue-600'}`}>
          {status}
        </p>
      )}

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          cursor: pointer;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s;
          margin-top: -8px;
        }

        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.3);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .slider-thumb::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s;
        }

        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.3);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .slider-thumb::-webkit-slider-runnable-track {
          background: linear-gradient(
            to right,
            #3b82f6 0%,
            #3b82f6 ${((form.amount - 10000) / (500000 - 10000)) * 100}%,
            #bfdbfe ${((form.amount - 10000) / (500000 - 10000)) * 100}%,
            #bfdbfe 100%
          );
          height: 10px;
          border-radius: 5px;
        }

        .slider-thumb::-moz-range-track {
          background: #bfdbfe;
          height: 10px;
          border-radius: 5px;
        }

        .slider-thumb::-moz-range-progress {
          background: #3b82f6;
          height: 10px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}