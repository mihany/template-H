"use client";

import { useState } from "react";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "./AdmissionTerminal";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to open modal */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        Open modal
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
              <h3 className="font-bold text-gray-800">Event title</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex justify-center items-center size-8 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none"
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
              <p className="mt-1 text-gray-800">
                This is a wider card with supporting text below as a natural lead-in to additional content.
              </p>
              <Terminal>
              <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>
        
              <AnimatedSpan delay={1500} className="text-green-500">
                <span>✔ Preflight checks.</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={2000} className="text-green-500">
                <span>✔ Verifying framework. Found Next.js.</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={2500} className="text-green-500">
                <span>✔ Validating Tailwind CSS.</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={3000} className="text-green-500">
                <span>✔ Validating import alias.</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={3500} className="text-green-500">
                <span>✔ Writing components.json.</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={4000} className="text-green-500">
                <span>✔ Checking registry.</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={4500} className="text-green-500">
                <span>✔ Updating tailwind.config.ts</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={5000} className="text-green-500">
                <span>✔ Updating app/globals.css</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={5500} className="text-green-500">
                <span>✔ Installing dependencies.</span>
              </AnimatedSpan>
        
              <AnimatedSpan delay={6000} className="text-blue-500">
                <span>ℹ Updated 1 file:</span>
                <span className="pl-2">- lib/utils.ts</span>
              </AnimatedSpan>
        
              <TypingAnimation delay={6500} className="text-muted-foreground">
                Success! Project initialization completed.
              </TypingAnimation>
        
              <TypingAnimation delay={7000} className="text-muted-foreground">
                You may now add components.
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