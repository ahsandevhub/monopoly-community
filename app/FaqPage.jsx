"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FaqPage = () => {
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
    <section className="bg-gradient-to-br from-[#0F0F1B] to-[#1A1A2E] sm:py-20 py-10 px-4">
      <div id="faq" className="container scroll-mt-20 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1E1E2F] border border-[#2A2A3D] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#3A3A4D]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg md:text-xl font-semibold text-slate-100">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 text-purple-400 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown />
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 border-t-2 border-purple-500 py-6 text-slate-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
