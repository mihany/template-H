"use client";

// import { useState } from "react";
import { useState, useEffect } from "react";
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const faqs = [
  {
    category: "General",
    id: 1,
    question: "Why to Join a Bootcamp?",
    answer: "Quas cupiditate laboriosam fugiat. Quas cupiditate laboriosam fugiat.",
  },
  {
    category: "General",
    id: 2,
    question: "Why are Bootcamps better than self-paced courses?",
    answer: "Quas cupiditate laboriosam fugiat.",
  },
  {
    category: "Scholarships",
    id: 3,
    question: "What is the time commitment required?",
    answer: "Quas cupiditate laboriosam fugiat.",
  },
  {
    category: "Finance",
    id: 4,
    question: "What if I cannot afford the Bootcamp?",
    answer: "Quas cupiditate laboriosam fugiat.",
  },
  {
    category: "Finance",
    id: 5,
    question: "How do payment plans work?",
    answer: "Quas cupiditate laboriosam fugiat.",
  },
  {
    category: "General",
    id: 6,
    question: "How do payment plans work?",
    answer: "Quas cupiditate laboriosam fugiat.",
  },
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Unique categories for filter buttons
  const categories = ["All", ...new Set(faqs.map((faq) => faq.category))];

  // Filter FAQs based on the selected category
  const filteredFAQs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  // Group the filtered FAQs by category
  const groupedFAQs = filteredFAQs.reduce((acc, faq) => {
    acc[faq.category] = acc[faq.category] || [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  const [currentContent, setCurrentContent] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const contentList = [
    "Welcome to Hoetzin! Build your tech career.",
    "Learn Web Development and Data Science with us.",
    "Join our Cyber Security Bootcamp today!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextContent();
    }, 3000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleNextContent = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentContent((prevContent) => (prevContent + 1) % contentList.length);
    }, 500);
  };

  return (
    

    <div className="bg-white">
      <div className="relative w-full max-w-lg mx-auto">
      <div className="relative h-48 overflow-hidden">
        {contentList.map((content, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center bg-indigo-600 text-white text-lg font-semibold transition-transform duration-500 ease-in-out ${
              index === currentContent
                ? isSliding
                  ? "translate-y-full"
                  : "translate-y-0"
                : "translate-y-full"
            }`}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-24 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Frequently asked questions
        </h2>
        <p className="mt-6 max-w-2xl text-base/7 text-gray-600">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team by{" "}
          <a
            href="mailto:hello@hoetzin.com"
            className="font-semibold text-secondary-lightGreen hover:text-secondary-lightGreen/80"
          >
            sending us an email
          </a>{" "}
          and we’ll get back to you as soon as we can.
        </p>

        {/* Filter Tags */}
        <div className="mt-10 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
            type="button"
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              selectedCategory === category
                ? "bg-secondary-lightGreen text-white hover:bg-secondary-lightGreen/80 focus-visible:outline-secondary-lightGreen/60"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <CheckCircleIcon
              aria-hidden="true"
              className={`-ml-0.5 size-5 ${
                selectedCategory === category ? "text-white" : "text-gray-400"
              }`}
            />
            {category}
          </button>
          ))}
        </div>

        {/* Render FAQs grouped by category */}
        <div className="mt-10">
          {Object.keys(groupedFAQs).map((category) => (
            <div key={category} className="mb-10">
              <h3 className="mb-5 text-sm/7 font-semibold text-slate-700 border-b border-black/10">
                {category}
              </h3>
              <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
                {groupedFAQs[category].map((faq) => (
                  <div key={faq.id}>
                    <dt className="text-base/7 font-semibold text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}