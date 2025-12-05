import React, { useState } from "react";

// Icons
const TagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LoanOptions = ({ setIsModalOpen }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Middle card active by default

  const cards = [
    {
      title: "Best Personal Loan Rates",
      list: [
        "Low cost installment Loans",
        "Lower Interest Rates",
        "Short and Secure Loans",
      ],
    },
    {
      title: "Low Interest Personal Loans",
      list: [
        "A Short but Powerful Checklist",
        "Review Your Credit Score",
        "Get a Handle on any Debt",
      ],
    },
    {
      title: "Personal Loans for Bad Credit",
      list: [
        "Secured Personal Loans",
        "Peer-to-peer lending",
        "Payday Loans",
      ],
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
          Personal Loan Options
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {cards.map((card, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-8 rounded-3xl shadow-lg border h-full flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-blue-500 text-white shadow-2xl transform md:scale-110 z-10"
                    : "bg-white border-gray-100 hover:shadow-xl"
                }`}
              >
                <div>
                  <h3 className={`text-2xl font-bold mb-6 ${isActive ? "text-white" : "text-blue-900"}`}>
                    {card.title}
                  </h3>
                  <ul className="space-y-4 mb-8 text-left">
                    {card.list.map((item, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        {isActive ? <CheckIcon /> : <TagIcon />}
                        <span className={isActive ? "text-white" : "text-gray-600"}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen && setIsModalOpen(true);
                  }}
                  className={`w-full font-bold py-3 rounded-full transition ${
                    isActive
                      ? "bg-white text-blue-500 hover:bg-gray-100"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "bg-blue-500 w-10 h-3"
                  : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
              }`}
              aria-label={`Select card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanOptions;