"use client";

import { useState } from "react";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "./AdmissionTerminal";

export default function ModalHowitworks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to open modal */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        How the bootcamp works
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-white border rounded-xl shadow-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 className="font-bold text-secondary-onyx">How Hoetzin bootcamp works</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex justify-center items-center size-8 rounded-full bg-gray-100 text-secondary-onyx hover:bg-gray-200 focus:outline-none"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 overflow-y-auto">
              <p className="mt-1 text-secondary-onyx">
                This is a wider card with supporting text below as a natural lead-in to additional content.
              </p>
              <Terminal>

              <TypingAnimation className="text-secondary-onyx">&gt; Apply to Hoetzin bootcamp</TypingAnimation>
              <AnimatedSpan delay={1500} className="text-secondary-darkCyan">
                <span>✔ Pick Part-time or Full-time schedule</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={2000} className="text-secondary-darkCyan">
                <span>✔ Check scholarships</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={2500} className="text-secondary-darkCyan">
                <span>✔ Finance your study</span>
              </AnimatedSpan>

              <TypingAnimation delay={3000} className="text-secondary-onyx">&gt; Start your bootcamp</TypingAnimation>

              <AnimatedSpan delay={3500} className="text-secondary-darkCyan">
                <span>✔ Build your projects</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4000} className="text-secondary-darkCyan">
                <span>✔ Interact with expert guests</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4500} className="text-secondary-darkCyan">
                <span>✔ Finish your capstone project</span>
              </AnimatedSpan>

              <TypingAnimation delay={5000} className="text-secondary-onyx">&gt; Get support from Hoetzin Career Center</TypingAnimation>

              <AnimatedSpan delay={5500} className="text-secondary-darkCyan">
                <span>✔ Refine your resume</span>
              </AnimatedSpan>

              <AnimatedSpan delay={6500} className="text-blue-500">
                <span>ℹ Start recruitment process:</span>
                <span className="pl-2">- Get support from Career Advisor</span>
              </AnimatedSpan>
        
              <TypingAnimation delay={7000} className="text-muted-foreground">
                You landed your tech job
              </TypingAnimation>
        
              <TypingAnimation delay={7500} className="text-muted-foreground">
                You are now an Alumni!
              </TypingAnimation>
            </Terminal>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none"
              >
                Close
              </button>
              {/* <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}