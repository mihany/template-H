"use client";

import { useState, useEffect } from "react";

export default function Countdown({ start = 99 }) {
  const [count, setCount] = useState(start);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setAnimate(true); // Trigger animation
        setTimeout(() => {
          setCount((prev) => prev - 1);
          setAnimate(false); // Reset animation
        }, 300); // Match transition duration
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-24 h-32 text-white text-6xl font-bold flex justify-center items-center overflow-hidden">
        <span
          className={`absolute transition-transform duration-300 ${
            animate ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          {count}
        </span>
      </div>
    </div>
  );
}