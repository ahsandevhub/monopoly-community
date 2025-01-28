"use client";

import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "I'm a top holder, how much do I receive from Airlock.sol?",
      answer:
        "We snapshot the current top 50 holders just before each airdrop. These top holders share 90% of the rewards. For example, if a wallet starting with 58u.. holds 11.55% of the total supply, they will be eligible for 11.55% x 90% = 10.39% of the rewards. Similarly, the creator wallet EBsc... is eligible for 9.7% x 90% = 8.73%. For a token with $1M in day-1 trading, the first airdrop will pay out around $40k in rewards. Meteora fees are stored in the pool and are subject to impermanent losses if the token price drops.",
    },
    {
      question: "Do I need to claim my rewards?",
      answer:
        "No, there's no longer any need for top holders to claim their rewards. However, for tokens bonded before October 7th, creators and the static top 50 holders still need to claim from the token UI. To claim, visit the pool on the Meteora app, connect your wallet, and hit the claim button to collect your fees.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 py-12 md:py-[150px] px-4">
      <h2 className="md:text-4xl text-3xl font-bold text-center text-slate-100 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left bg-gray-700 px-4 py-3 text-slate-100 flex justify-between items-center"
            >
              <span className="font-semibold">{faq.question}</span>
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`transition-max-height duration-300 overflow-hidden ${
                openIndex === index ? "max-h-[200px] p-4" : "max-h-0"
              } bg-gray-600 text-slate-200`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
