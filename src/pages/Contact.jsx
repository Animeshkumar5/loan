import React, { useState } from "react";
import { sendMail } from "../utils/sendMail";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await sendMail(form);
      setStatus("Message sent successfully!");
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      console.log(err);
      setStatus("Failed to send message. Try again!");
    }
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="text"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="9876543210"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="How can we help?"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        {status && <p className="mt-2 text-gray-700">{status}</p>}
      </form>
    </div>
  );
}
