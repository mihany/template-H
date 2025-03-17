"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";


const tabs = [
  { id: 1, label: "Software architecture", hours: "96H" },
  { id: 2, label: "Database and SQL", hours: "80H" },
  { id: 3, label: "Front-end development", hours: "120H" },
  { id: 4, label: "Web app development", hours: "100H" },
  { id: 5, label: "AI integration", hours: "NEW" },
  { id: 6, label: "Final project", hours: "" },
  { id: 7, label: "Career services", hours: "" },
];

const content = {
  1: {
    title: "Introduction to Web Development",
    description:
      "Write your first programs manipulating variables, functions, and data structures while learning essential developer tools. Structure your software following Object-Oriented principles. Learn one of the most used design patterns, the Model-View-Controller, and master it by coding several MVC apps from scratch.",
    practice: [
      "Lots of games based on your command line",
      "Scripts detecting valid emails and phone numbers",
      "Web scrapers collecting information from e-commerce websites",
      "Build a recipe management application",
    ],
    tools: ["Ruby", "Terminal", "Git"],
  },
  2: {
    title: "Database and SQL mastery",
    description:
      "Master database fundamentals and learn to structure and query databases efficiently. Dive deep into relational databases, SQL syntax, and more.",
    practice: [
      "Design and implement databases",
      "Write efficient queries",
      "Build CRUD applications",
      "Integrate databases into web apps",
    ],
    tools: ["PostgreSQL", "SQL", "Database Modeling"],
  },
  3: {
    title: "Database and SQL mastery",
    description:
      "Master database fundamentals and learn to structure and query databases efficiently. Dive deep into relational databases, SQL syntax, and more.",
    practice: [
      "Design and implement databases",
      "Write efficient queries",
      "Build CRUD applications",
      "Integrate databases into web apps",
    ],
    tools: ["PostgreSQL", "SQL", "Database Modeling"],
  },
  4: {
    title: "Database and SQL mastery",
    description:
      "Master database fundamentals and learn to structure and query databases efficiently. Dive deep into relational databases, SQL syntax, and more.",
    practice: [
      "Design and implement databases",
      "Write efficient queries",
      "Build CRUD applications",
      "Integrate databases into web apps",
    ],
    tools: ["PostgreSQL", "SQL", "Database Modeling"],
  },
  5: {
    title: "Database and SQL mastery",
    description:
      "Master database fundamentals and learn to structure and query databases efficiently. Dive deep into relational databases, SQL syntax, and more.",
    practice: [
      "Design and implement databases",
      "Write efficient queries",
      "Build CRUD applications",
      "Integrate databases into web apps",
    ],
    tools: ["PostgreSQL", "SQL", "Database Modeling"],
  },
  6: {
    title: "Database and SQL mastery",
    description:
      "Master database fundamentals and learn to structure and query databases efficiently. Dive deep into relational databases, SQL syntax, and more.",
    practice: [
      "Design and implement databases",
      "Write efficient queries",
      "Build CRUD applications",
      "Integrate databases into web apps",
    ],
    tools: ["PostgreSQL", "SQL", "Database Modeling"],
  },
  7: {
    title: "Database and SQL mastery",
    description:
      "Master database fundamentals and learn to structure and query databases efficiently. Dive deep into relational databases, SQL syntax, and more.",
    practice: [
      "Design and implement databases",
      "Write efficient queries",
      "Build CRUD applications",
      "Integrate databases into web apps",
    ],
    tools: ["PostgreSQL", "SQL", "Database Modeling"],
  },
  // Add more content for other tabs
};

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="mx-auto max-w-4xl text-center text-secondary-onyx">
        <h2 className="text-base/7 font-semibold text-secondary-lightGreen">curriculum updated with more AI</h2>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          What You’ll Master in Our Web Development Bootcamp
        </h2>
          
      </div>
      <p className="mx-auto my-6 max-w-4xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Master cutting-edge web and AI techniques to transform ideas into impactful projects, cultivating the innovation and expertise needed to excel in today’s tech-driven world.
      </p>
        
    <div className="bg-secondary-robinEggBlue/10 p-8 sm:flex">
      {/* Sidebar */}
      <div className="sm:w-1/4">
<div className="sm:hidden overflow-x-auto">
  <nav className="flex space-x-4 px-4 py-2 bg-gray-100">
    {[
      'Software architecture',
      'Database and SQL',
      'Front-end development',
      'Web app development',
      'AI integration',
      'Final project',
      'Career services',
    ].map((link) => (
      <a
        key={link}
        href={`#${link.replace(/\s+/g, '-').toLowerCase()}`}
        className="flex-shrink-0 text-sm font-semibold text-gray-700 px-4 py-2 bg-white border rounded-lg shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
      >
        {link}
      </a>
    ))}
  </nav>
</div>

{/* <div className="hidden sm:flex sm:justify-center space-x-4 px-4 py-2 bg-gray-100">
  {[
    'Software architecture',
    'Database and SQL',
    'Front-end development',
    'Web app development',
    'AI integration',
    'Final project',
    'Career services',
  ].map((link) => (
    <a
      key={link}
      href={`#${link.replace(/\s+/g, '-').toLowerCase()}`}
      className="text-sm font-semibold text-gray-700 px-4 py-2 bg-white border rounded-lg shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
    >
      {link}
    </a>
  ))}
</div> */}
        <h2 className="text-lg font-semibold text-secondary-lightGreen">Prepwork</h2>
        <ul className="mt-4 space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer p-3 rounded-md text-sm font-medium ${
                activeTab === tab.id
                  ? "bg-secondary-lightGreen/40 text-brand-dark"
                  : "text-gray-700 hover:bg-secondary-grey"
              }`}
            >
              <span>
                {tab.id}. {tab.label}
              </span>
              {tab.hours && (
                <span
                  className={`ml-2 text-xs font-semibold ${
                    tab.hours === "NEW" ? "text-orange-500" : "text-gray-500"
                  }`}
                >
                  {tab.hours}
                </span>
              )}
            </li>
          ))}
        </ul>
        <button className="mt-8 w-full rounded-md border border-secondary-lightGreen/90 px-4 py-2 text-secondary-lightGreen/90 hover:bg-secondary-lightGreen/90 hover:text-secondary-grey hover:border-secondary-grey">
          Request syllabus →
        </button>
      </div>

      {/* Content */}
      <div className="sm:w-3/4 sm:pl-6">
        <h3 className="text-xl font-semibold">
          {content[activeTab]?.title}
        </h3>
        <span className="mt-2 inline-block text-sm font-semibold text-orange-500">
          {tabs.find((tab) => tab.id === activeTab)?.hours}
        </span>
        <p className="mt-4 text-sm text-gray-700">{content[activeTab]?.description}</p>
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h4 className="text-sm font-medium">
            What you will build in practice:
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-secondary-onyx/85">
            {content[activeTab]?.practice.map((item, index) => (
              <li key={index} className="flex gap-x-3 items-start">
                <svg className="h-6 w-6 flex-none fill-white stroke-secondary-robinEggBlue stroke-2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <h4 className="mt-6 text-sm font-medium">
            Software and languages you will learn:
          </h4>
          <div className="mt-4 flex space-x-2">
            {content[activeTab]?.tools.map((tool, index) => (
              <div
                key={index}
                className="rounded-md border bg-gray-100 px-3 py-1 text-sm text-secondary-onyx/85"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}



// import { CheckIcon } from '@heroicons/react/20/solid';

// const steps = [
//     { id: '01', name: 'Intro to Web Development', href: '#', status: 'upcoming' },
//     { id: '02', name: 'JavaScript and Interactive Web', href: '#', status: 'current' },
//     { id: '03', name: 'Front-End Frameworks', href: '#', status: 'current' },
//     { id: '04', name: 'Back-End Development', href: '#', status: 'current' },
//     { id: '05', name: 'Databases and Authentication', href: '#', status: 'current' },
//     { id: '06', name: 'Capstone Project', href: '#', status: 'complete' },
// ];

// export default function Curriculum() {
//     return (
//       <div className="bg-white">
//         <h1 className="text-3xl font-bold text-gray-900">Curriculum</h1>
//             <p className="mt-4 text-gray-600">
//                 Empowering Your Future with Hands-On AI-Powered Skill Mastery
//             </p>

//             <p className="text-white">
//                 Learn from industry-leading experts and master job-ready skills at your own pace. Whether you are dedicating 15 or 40 hours per week, we empower you to tailor your learning journey to fit your life – because your future deserves flexibility.
//                 </p>
//                 <nav aria-label="Progress">
//                     <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
//                         {steps.map((step, stepIdx) => (
//                         <li key={step.name} className="relative md:flex md:flex-1">
//                             {step.status === 'complete' ? (
//                             <a href={step.href} className="group flex w-full items-center">
//                                 <span className="flex items-center px-6 py-4 text-sm font-medium">
//                                 <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
//                                     <CheckIcon aria-hidden="true" className="size-6 text-white" />
//                                 </span>
//                                 <span className="ml-4 text-sm font-medium text-gray-200">{step.name}</span>
//                                 </span>
//                             </a>
//                             ) : step.status === 'current' ? (
//                             <a href={step.href} aria-current="step" className="flex items-center px-6 py-4 text-sm font-medium">
//                                 <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
//                                 <span className="text-indigo-600">{step.id}</span>
//                                 </span>
//                                 <span className="ml-4 text-sm font-medium text-indigo-600">{step.name}</span>
//                             </a>
//                             ) : (
//                             <a href={step.href} className="group flex items-center">
//                                 <span className="flex items-center px-6 py-4 text-sm font-medium">
//                                 <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
//                                     <span className="text-gray-500 group-hover:text-gray-200">{step.id}</span>
//                                 </span>
//                                 <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-200">{step.name}</span>
//                                 </span>
//                             </a>
//                             )}

//                             {stepIdx !== steps.length - 1 ? (
//                             <>
//                                 {/* Arrow separator for lg screens and up */}
//                                 <div aria-hidden="true" className="absolute top-0 right-0 hidden h-full w-5 md:block">
//                                 <svg fill="none" viewBox="0 0 22 80" preserveAspectRatio="none" className="size-full text-gray-300">
//                                     <path
//                                     d="M0 -2L20 40L0 82"
//                                     stroke="currentcolor"
//                                     vectorEffect="non-scaling-stroke"
//                                     strokeLinejoin="round"
//                                     />
//                                 </svg>
//                                 </div>
//                             </>
//                             ) : null}
//                         </li>
//                         ))}
//                     </ol>
//                 </nav>
//       </div>
//     );
// }
