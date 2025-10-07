"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide full-stack development, AI/ML solutions, and custom software projects tailored to your needs.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach us via the Contact page or email at contact@mukeshlilawat.com.",
  },
  {
    question: "Do you offer freelance projects?",
    answer:
      "Yes! We take freelance projects depending on the scope, timeline, and requirements.",
  },
  {
    question: "What is your privacy policy?",
    answer:
      "We respect your privacy. All data collected is used only to provide better services. You can check the Privacy Policy page for details.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <button
                className="w-full text-left py-3 flex justify-between items-center font-medium hover:text-blue-500 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="ml-2">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="py-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
