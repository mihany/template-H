"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon, EnvelopeIcon } from '@heroicons/react/16/solid';
import { Radio, RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';


const courses = [
  { name: 'Software Engineering Bootcamp', description: "Get a better understanding where your traffic is coming from", status: true },
  { name: 'Data Analytics Bootcamp', description: "Get a better understanding where your traffic is coming from", status: false },
  { name: 'Cyber Security Bootcamp', description: "Get a better understanding where your traffic is coming from", status: false },
  { name: 'Data Science Bootcamp', description: "Get a better understanding where your traffic is coming from", status: false },
]

const steps = [
  { id: 1, title: "My Contact Details", status: false },
  { id: 2, title: "My Course", status: false },
  { id: 3, title: "My Pace Schedule", status: false },
  { id: 4, title: "My Session", status: false },
  { id: 5, title: "My Motivation", status: false },
  { id: 6, title: "Confirmation", status: false },
];

const mailingLists = [
  { id: 1, title: 'Full-time - 3 months', description: 'Learn from Monday to Friday on a full-time basis. Launch your tech career in just 3 months.', days: 'Monday, Tuesday, Wednesday, Thursday, and Friday' },
  { id: 2, title: 'Part-time - 7 months', description: 'Learn in the evening and/or on Saturdays. Maintain your full-time commitments or benefit from a more flexible rhythm.', days: 'Monday, Tuesday, Wednesday, Saturday, and Sunday' },
]

export default function TestComp() {
  const sessions = [
    {
      id: 1,
      dateRange: "April 21 → June 20",
      language: "English",
      flag: "🇬🇧",
      price: "7,400 €",
      financing: "financing available",
      timezone: "Europe (GMT+2)",
    },
    {
      id: 2,
      dateRange: "April 21 → June 20",
      language: "French",
      flag: "🇫🇷",
      price: "7,400 €",
      financing: "financing available",
      timezone: "Europe (GMT+2)",
    },
    {
      id: 3,
      dateRange: "July 14 → September 12",
      language: "English",
      flag: "🇬🇧",
      price: "7,400 €",
      financing: "financing available",
      timezone: "Europe (GMT+2)",
    },
    {
      id: 4,
      dateRange: "October 20 → December 19",
      language: "French",
      flag: "🇫🇷",
      price: "7,400 €",
      financing: "financing available",
      timezone: "Europe (GMT+2)",
    },
  ];

  const [previousPage, setPreviousPage] = useState("");
  const [selectedMailingList, setSelectedMailingList] = useState(mailingLists[0].id);
  const [selected, setSelected] = useState(courses[0].name);

  useEffect(() => {
    setPreviousPage(document.referrer);
  }, []);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    country: "",
    phone_number: "",
    email: "",
    course: "",
    pace: "1",
    cohort: "",
    objective: "",
    source: "",
    motivation: "",
  });

  // Load saved data when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData)); // Parse stored JSON data
    }
  }, []);

  // Save data when an input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData)); // Save in Local Storage
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const goToStep = (stepNumber) => setStep(stepNumber);

  // Minimal submission handler: prevent default and move to confirmation step
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(6);
  };

  const notifications = [
    { id: "comments", label: "New comments", description: "so you always know what's happening." },
    { id: "candidates", label: "New candidates", description: "who apply for any open postings." },
    { id: "offers", label: "Offers", description: "when they are accepted or rejected by candidates." },
  ];

  // const refCours = () =>{
  //   previousPage ? (
  //     <p className="text-gray-600">You came from: {previousPage}</p>
  //   ) : (
  //     <p className="text-gray-600">No referrer detected</p>
  //   )
  // };

  let refCourse = previousPage ? previousPage : "";

  // let refCourse = "";

  if (previousPage) {
    const match = previousPage.match(/\/courses\/([^/]+)/);
    refCourse = match ? match[1].replace(/-/g, "-") : ""; // Extract & format name
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-6 lg:p-24">
            <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-8">
              {/* shadow-md rounded-lg border */}
              <div className="lg:col-span-2 p-1">
                {/* <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {steps[step - 1]?.title}
                </h2> */}
                
                <div className="p-4">
                <form onSubmit={handleSubmit}>
                    {/* Step 1: Contact Details */}
                    {step === 1 && (
                      <div>
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Apply to our Web Development course</h2>
                          <p className="py-4">
                            Once you've applied, our admissions team will contact you by email to schedule a short interview in order to discuss your application.
                          </p>
                        </div>
                        <label
                            htmlFor="first-name"
                            className="block text-sm/6 font-semibold"
                          >
                            First name
                          </label>
                          <div className="mt-2.5">
                            <input
                              id="first_name"
                              name="first_name"
                              value={formData.first_name}
                              onChange={handleChange}
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-secondary-onyx outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-darkCyan"
                            />
                          </div>
                        
                          <label
                            htmlFor="last-name"
                            className="block text-sm/6 font-semibold"
                          >
                            Last name
                          </label>
                          <div className="mt-2.5">
                            <input
                              id="last_name"
                              name="last_name"
                              value={formData.last_name}
                              onChange={handleChange}
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-secondary-onyx outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-darkCyan"
                            />
                          </div>

                        <label htmlFor="phone-number" className="block text-sm/6 font-medium text-gray-900">
                          Phone number
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                aria-label="Country"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              >
                                <option>US</option>
                                <option>CA</option>
                              </select>
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </div>
                            <input
                              id="phone_number"
                              name="phone_number"
                              value={formData.phone_number}
                              onChange={handleChange}
                              type="tel"
                              placeholder="123-456-7890"
                              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                          Email
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-black-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                          />
                          <EnvelopeIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                          />
                        </div>

                        <fieldset>
                            
                            <div className="space-y-1">
                              <div className="flex gap-3">
                                <div className="flex h-6 shrink-0 items-center">
                                  <div className="group grid size-4 grid-cols-1">
                                    <input
                                      defaultChecked
                                      id="comments"
                                      name="comments"
                                      type="checkbox"
                                      aria-describedby="comments-description"
                                      className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-secondary-darkCyan checked:bg-secondary-darkCyan indeterminate:border-secondary-darkCyan indeterminate:bg-secondary-darkCyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                    />
                                    <svg
                                      fill="none"
                                      viewBox="0 0 14 14"
                                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                    >
                                      <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className=" group-has-checked:opacity-100"
                                      />
                                      <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="text-sm/6">
                                  <label htmlFor="comments" className="font-light text-secondary-onyx/65">
                                    I would like to be kept up to date with new training programs/events/promotions/marketing.
                                  </label>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex h-6 shrink-0 items-center">
                                  <div className="group grid size-4 grid-cols-1">
                                    <input
                                      id="candidates"
                                      name="candidates"
                                      type="checkbox"
                                      aria-describedby="candidates-description"
                                      className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-secondary-darkCyan checked:bg-secondary-darkCyan indeterminate:border-secondary-darkCyan indeterminate:bg-secondary-darkCyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-darkCyan disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                    />
                                    <svg
                                      fill="none"
                                      viewBox="0 0 14 14"
                                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                    >
                                      <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className=" group-has-checked:opacity-100"
                                      />
                                      <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="text-sm/6">
                                  <label htmlFor="candidates" className="font-light text-secondary-onyx/65">
                                      By submitting this form, I accept Hoetzin <Link href="/privacy-policy" className="font-normal underline"> Privacy Policy</Link>.
                                  </label>
                                  
                                </div>
                              </div>
                              
                            </div>
                          </fieldset>



                      </div>
                      
                      
                    )}

                    {/* Step 2: My Course */}
                    {step === 2 && (
                      <div>
                        <div className="p-3">
                          <h2 className="text-xl font-bold">Apply Now</h2>
                          {refCourse}
                          
                        </div>
                        <label className="block text-sm font-medium text-gray-700">
                          My Course
                        </label>
                        <fieldset aria-label="Server size">
                              <RadioGroup 
                                value={selected} 
                                onChange={setSelected} 
                                // value={formData.course}
                                // onChange={handleChange} 

                                className="space-y-4">
                                {courses.map((course) => (
                                  <Radio
                                    key={course.name}
                                    value={course.name} // ✅ Use name (string) instead of object
                                    
                                    className={`group relative block cursor-pointer rounded-lg border px-6 py-4 shadow-xs focus:outline-none sm:flex sm:justify-between
                                      ${selected === course.name ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300 bg-white'}`}
                                  >
                                    <span className="flex items-center">
                                      <span className="flex flex-col text-sm space-y-2">
                                        <span className="font-medium text-gray-900">{course.name}</span>
                                        <span className="text-gray-500">
                                          {course.description} &middot; 
                                        </span>
                                      </span>
                                    </span>
                                    <span className="mt-2 flex text-sm sm:mt-0 sm:ml-4 sm:flex-col sm:text-right">
                                      <div className="space-y-1">
                                        {course.status ? 
                                            <span className="inline-flex items-center gap-1 font-semibold rounded-full px-2.5 py-1 bg-green-100 text-xs text-green-700">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              strokeWidth={1.5}
                                              stroke="currentColor"
                                              className="size-4"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                                              />
                                            </svg>
                                            Accepting Applications
                                          </span> 
                                        : 
                                          <span className="inline-flex items-center gap-1 font-semibold rounded-full text-xs px-2.5 py-1 text-orange-400 bg-orange-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                          </svg>
                                            Coming soon...
                                          </span>
                                        }
                                        
                                      </div>

                                      {/* <span className="font-medium text-gray-900">{course.status ? "Accepting Applications" : "Coming Soon..."}</span> */}
                                      {/* <span className="ml-1 text-gray-500 sm:ml-0">/mo</span> */}
                                    </span>
                                    

                                    {/* ✅ Border Highlight When Selected */}
                                    {selected === course.name && (
                                      <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -inset-px rounded-lg border-2 border-indigo-600"
                                      />
                                    )}
                                  </Radio>
                                ))}
                              </RadioGroup>
                            </fieldset>
                      </div>
                    )}

                    {/* Step 3: My Pace Schedule */}
                    {step === 3 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          My Pace Schedule
                        </label>
                        <fieldset>
                          <legend className="text-sm/6 font-semibold text-gray-900">Select a mailing list</legend>
                          <RadioGroup
                            value={selectedMailingList}
                            onChange={setSelectedMailingList} // Update the selected ID
                            className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
                          >
                            {mailingLists.map((mailingList) => (
                              <Radio
                                key={mailingList.id}
                                value={mailingList.id} // Use ID instead of object
                                
                                aria-label={mailingList.title}
                                className={`group relative flex cursor-pointer rounded-lg border 
                                  border-gray-300 bg-white p-4 shadow-xs focus:outline-none 
                                  ${
                                    selectedMailingList === mailingList.id
                                      ? 'border-secondary-darkCyan ring-2 ring-secondary-darkCyan'
                                      : ''
                                  }`}
                              >
                                <span className="flex flex-1">
                                  <span className="flex flex-col">
                                    <span className="block text-sm font-medium text-secondary-onyx">{mailingList.title}</span>
                                    <span className="mt-1 flex items-center text-sm text-secondary-onyx/90">{mailingList.description}</span>
                                    <span className="mt-6 text-sm font-medium text-secondary-onyx">{mailingList.days}</span>
                                  </span>
                                </span>
                                {/* Show checkmark only when selected */}
                                {selectedMailingList === mailingList.id && (
                                  <CheckCircleIcon aria-hidden="true" className="size-5 text-secondary-darkCyan" />
                                )}
                              </Radio>
                            ))}
                          </RadioGroup>
                        </fieldset>
                      </div>
                    )}

                    {/* Step 4: My Session */}
                    {step === 4 && (
                      <div>
                        <h2>Choose your session</h2>
                        <h3>Choose the session that suits you best. You can always change it after you have submitted your application.</h3>
                        {sessions.map((session) => (
                          <label
                            key={session.id}
                            className="group select-none block w-full cursor-pointer rounded-lg border border-gray-200 bg-secondary-whiteSmoke p-4 shadow-sm hover:bg-secondary-darkCyan transition"
                          >
                            <div className="flex items-start space-x-3 ">
                              <input
                                type="radio"
                                name="session"
                                className="mt-1 size-5 text-secondary-darkCyan focus:ring-secondary-darkCyan"
                              />
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {session.dateRange}
                                </p>
                                <p className="text-gray-700 text-sm">
                                  Course in {session.language} {session.flag} - {session.price} -{" "}
                                  {session.financing}
                                </p>
                                <p className="text-xs text-gray-500">{session.timezone}</p>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}

                    {/* Step 5: My Motivation (Submit on this step) */}
                    {step === 5 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          My Motivation
                        </label>
                        <input
                          type="text"
                          name="motivation"
                          placeholder="Your motivation..."
                          required
                          className="mt-1 block w-full border rounded-lg p-2 bg-gray-200"
                          onChange={(e) =>
                            setFormData({ ...formData, motivation: e.target.value })
                          }
                        />
                        <button
                          type="submit"
                          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
                        >
                          Send your application
                        </button>
                      </div>
                    )}
                  </form>

                  {/* Step 6: Completion Message */}
                  {step === 6 && (
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-green-600">It's done! Thank you!</h2>
                      <p className="mt-2 text-gray-600">
                        We will send you an email to schedule an interview with our admissions team.
                      </p>

                      {/* Next Steps */}
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg">
                          🎟️ Attend an event
                          <span>→</span>
                        </div>
                        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg">
                          📄 Download the syllabus
                          <span>→</span>
                        </div>
                        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg">
                          💰 Check our financing options
                          <span>→</span>
                        </div>
                      </div>

                      {/* Back to Website */}
                      <div className="mt-6">
                        <Link
                          href="/"
                          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                        >
                          Back to the website
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="mt-6 flex justify-between">
                    {step > 1 && step < 6 && (
                      <button
                        onClick={prevStep}
                        type="button"
                        className="px-4 py-2 bg-gray-300 rounded-md"
                      >
                        ← Back
                      </button>
                    )}
                    {step < 5 && (
                      <button
                        onClick={nextStep}
                        type="button"
                        className="px-4 py-2 bg-purple-600 text-white rounded-md"
                      >
                        Continue →
                      </button>
                    )}
                  </div>

                </div> {/* End of the div that holds the form and buttons */}

              </div>

              {/* Right: Progress Summary */}
              <div className="pt-4 sm:pt-0 lg:col-span-1 lg:sticky lg:top-24 lg:self-start text-secondary-onyx">
                    
                      {/* <div className="border rounded-xl p-4 flex flex-col-reverse gap-y-4">
                        <dt className="text-base leading-7 text-secondary-onyx/70">
                          stat.label
                        </dt>
                        <dd className="text-5xl font-semibold tracking-tight text-Prussian-Blue">
                          stat.value
                        </dd>
                      </div> */}
                      <div className="w-full bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Summary</h3>
                        <ul className="space-y-3">
                          {steps.map((s) => (
                            <li key={s.id} className="flex justify-between items-center">
                              <span
                                className={`text-sm font-medium ${
                                  step >= s.id ? "text-green-600" : "text-gray-400"
                                }`}
                              >
                                {s.id}. {s.title}
                                <br/>
                                {s.id === 1 && formData.first_name}
                                {s.id === 2 && formData.course}
                              </span>
                              {step > s.id && (
                                <button
                                  onClick={() => goToStep(s.id)}
                                  className="text-blue-600 text-xs underline"
                                >
                                  Edit
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    
                  
              </div>
            </div>
          </div>

    

  </>
  );
}