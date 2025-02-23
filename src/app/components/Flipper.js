"use client";

import { useState, useEffect } from "react";

export default function Flipper() {

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
      <>
        
            <div className="relative h-24 overflow-hidden mt-4 sm:max-w-md lg:max-w-none">
                {contentList.map((content, index) => (
                <p
                    key={index}
                    className={`absolute inset-0 flex text-secondary-lightGreen text-2xl leading-8 font-semibold transition-transform duration-500 ease-in-out ${
                    index === currentContent
                        ? isSliding
                        ? "translate-y-full"
                        : "translate-y-0"
                        : "translate-y-full"
                    }`}
                >
                    {content}
                </p>
                ))}
            </div>
        
      </>
    );
}
  