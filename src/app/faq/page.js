"use client";

import { useState } from "react";
// import { useState, useEffect } from "react";
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import ContactProgramAdvisor from "@/app/components/ContactProgramAdvisor";

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



  return (
    <>
    <div className="bg-secondary-robinEggBlue/5 text-secondary-onyx pb-8">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-24 lg:px-8
        bg-[length:16rem_10rem] sm:bg-[length:25rem_19rem] 
        bg-[calc(100%+6rem)_0rem] sm:bg-[calc(100%+12rem)_3rem] md:bg-[calc(100%+11rem)_3rem] lg:bg-[calc(100%+0rem)_3rem]
        bg-no-repeat 
        bg-[url('/images/questions.svg')]
      ">
        <h2 className="text-4xl font-semibold tracking-tight  sm:text-5xl">
          Frequently asked questions
        </h2>
        <p className="mt-6 max-w-2xl text-base/7 text-secondary-onyx/80">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team by{" "}
          <a
            href="mailto:hello@hoetzin.com"
            className="font-semibold text-secondary-robinEggBlue hover:text-secondary-robinEggBlue/80"
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
                ? "bg-secondary-orangeCTA text-white hover:bg-secondary-robinEggBlue/80 focus-visible:outline-secondary-robinEggBlue/60"
                : "bg-white text-secondary-onyx/85 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <CheckCircleIcon
              aria-hidden="true"
              className={`-ml-0.5 size-5 ${
                
                selectedCategory === category ? "text-white" : "text-secondary-onyx/50"
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
              <h3 className="mb-5 text-sm/7 font-semibold text-secondary-onyx/95 border-b border-black/10">
                {category}
              </h3>
              <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
                {groupedFAQs[category].map((faq) => (
                  <div key={faq.id}>
                    <dt className="text-base/7 font-semibold">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base/7 text-secondary-onyx/70">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

      </div>

        <ContactProgramAdvisor />
        
    </div>
    </>
  );
}