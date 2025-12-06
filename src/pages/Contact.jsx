import React, { useState } from "react";
import { sendMail } from "../utils/sendMail";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    amount: "",
    loanType: "",
    message: ""
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
        location: "",
        amount: "",
        loanType: "",
        message: ""
      });

    } catch (err) {
      console.log(err);
      setStatus("Failed to send message. Try again!");
    }
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input-style"
          required
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="input-style"
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-style"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location / City"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="input-style"
        />

        {/* Amount */}
        <input
          type="number"
          placeholder="Loan Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="input-style"
        />

        {/* Loan Type */}
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

        {/* Message */}
        <textarea
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="input-style md:col-span-2"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition"
        >
          Send Message
        </button>

        {status && <p className="md:col-span-2 text-gray-700">{status}</p>}
      </form>
    </div>
  );
}
