import React from 'react';

export default function EnquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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

        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded focus:outline-blue-600" />
          <input type="text" placeholder="Phone Number" className="w-full border p-3 rounded focus:outline-blue-600" />
          <textarea placeholder="Message" rows="3" className="w-full border p-3 rounded focus:outline-blue-600"></textarea>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}