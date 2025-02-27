"use client";

import { useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const events = [
  {
    id: 1,
    title: "AI-Powered Web Design: Create a Stunning, Responsive Landing Page with ChatGPT",
    date: "March 20, 2025",
    time: "5:00 PM PST",
    location: "Online",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Create a Task Manager Managed with AI",
    date: "March 25, 2025",
    time: "3:00 PM PST",
    location: "Online",
    imageUrl: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Create Your First Game in JavaScript and Refine It Using ChatGPT",
    date: "March 30, 2025",
    time: "6:00 PM PST",
    location: "Online",
    imageUrl: "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Build a Personal Portfolio Website with a Responsive Design and Refine It Using ChatGPT",
    date: "March 30, 2025",
    time: "6:00 PM PST",
    location: "Online",
    imageUrl: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Build a Weather App Using APIs and Refine It Using ChatGPT",
    date: "March 30, 2025",
    time: "6:00 PM PST",
    location: "Online",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Build a Movie Recommendation App with AI",
    date: "March 30, 2025",
    time: "6:00 PM PST",
    location: "Online",
    imageUrl: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function EventsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      nextSlide(); // Swipe left
    } else if (distance < -50) {
      prevSlide(); // Swipe right
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative flex flex-col items-center text-secondary-onyx w-full max-w-3xl mx-auto overflow-hidden">
      
      {/* Event Cards Container with Slide Animation */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="w-full my-2 h-96 shrink-0 flex items-center justify-center p-1 sm:p-6"
              style={{ minWidth: "100%" }}
            >
              {/* Event Card */}
              <div className="max-w-sm w-full bg-white rounded-xl overflow-hidden border">
                <img className="w-full h-48 object-cover" src={event.imageUrl} alt={event.title} />
                <div className="p-5">
                  <div className="flex text-sm text-secondary-onyx/70">
                    <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                      </svg>
                      {event.date}
                    </span>
                    <span className="ml-3 inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {event.time}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base sm:text-lg font-semibold line-clamp-2 min-h-[3rem]">{event.title}</h3>
                  <p className="text-sm text-secondary-onyx/70 mt-1">
                  <span className="inline-flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                    {event.location}
                  </span>
                  {/* 📍 
                  {event.location} */}
                  </p>
                  <a
                    href="/events-at-hoetzin"
                    className="block mt-4 text-center w-full px-4 py-2 text-sm font-semibold text-white border-secondary-orangeCTA bg-secondary-orangeCTA hover:bg-secondary-orangeCTA/85 rounded-full shadow  transition"
                  >
                    Register Now
                  </a>
                </div>
              </div>
              {/* Event Card Ends */}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="my-3 flex gap-3">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-8 h-8 border rounded-full border-white bg-white hover:bg-white/90"
        >
          <ChevronLeftIcon className="w-5 h-5 text-secondary-darkCyan" />
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-8 h-8 border rounded-full border-white bg-white hover:bg-white/90"
        >
          <ChevronRightIcon className="w-5 h-5 text-secondary-darkCyan" />
        </button>
      </div>
    </div>
  );
}