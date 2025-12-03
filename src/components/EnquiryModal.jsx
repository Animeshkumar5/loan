import React, { useState } from "react";
import { sendMail } from "../utils/sendMail";

export default function EnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await sendMail(form);
      setStatus("Your enquiry has been submitted!");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setStatus("Failed to submit enquiry!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md relative animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-2">Quick Enquiry</h2>
        <p className="text-gray-600 mb-6">Fill in details and we will call you back.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-3 rounded focus:outline-blue-600"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border p-3 rounded focus:outline-blue-600"
            required
          />

          <textarea
            placeholder="Message"
            rows="3"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border p-3 rounded focus:outline-blue-600"
          ></textarea>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition">
            Submit Enquiry
          </button>

          {status && <p className="text-gray-700 mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
}
