import React, { useState } from "react";
import { sendMail } from "../utils/sendMail";

export default function HeroEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    amount: "",
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
        amount: "",
        loanType: "",
        message: "",
      });
    } catch {
      setStatus("Error submitting enquiry!");
    }
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

        <input
          type="number"
          placeholder="Loan Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="input-style"
        />

        {/* LOAN TYPE */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-gray-700 font-semibold mb-2 block">
            Loan Type
          </label>

          <div className="flex flex-wrap gap-4">
            {["Salary", "Business", "Home Loan", "HDFC"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="loanType"
                  value={type}
                  checked={form.loanType === type}
                  onChange={(e) =>
                    setForm({ ...form, loanType: e.target.value })
                  }
                  required
                />
                <span>{type}</span>
              </label>
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

        <button className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition">
          Submit Enquiry
        </button>
      </form>

      {status && <p className="text-sm text-gray-700 mt-3">{status}</p>}
    </div>
  );
}
