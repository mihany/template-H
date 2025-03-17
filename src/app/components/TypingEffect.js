"use client";

import { useState, useEffect } from "react";

const contentList = [
  "Welcome to Hoetzin! Build your tech career.",
  "Learn Web Development and Data Science with us.",
  "Join our Cyber Security Bootcamp today!",
];

export default function TypingEffect() {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100; 
  const deletingSpeed = 35; 
  const delayBeforeDelete = 2000; 

  useEffect(() => {
    const currentSentence = contentList[index];

    if (!isDeleting && charIndex < currentSentence.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentSentence[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } 
    
    else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } 
    
    else if (!isDeleting && charIndex === currentSentence.length) {
      setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } 
    
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % contentList.length);
    }
  }, [charIndex, isDeleting, index]);

  return (
    <div className="w-full h-20 sm:h-32 text-xl sm:text-2xl font-mono">
      <h1><span >{currentText}</span>
      <span className="animate-blink">|</span></h1>
    </div>
  );
}