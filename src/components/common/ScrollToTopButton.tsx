"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface ScrollToTopButtonProps {
  threshold?: number;
  className?: string;
}

/**
 * Simple floating scroll-to-top button
 * Clean design with good visibility
 */
export function ScrollToTopButton({ 
  threshold = 300,
  className = ""
}: ScrollToTopButtonProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-hidden={!show}
      className={`
        h-12 w-12 rounded-full
        bg-zinc-800 dark:bg-zinc-700
        shadow-lg
        flex items-center justify-center
        transition-all duration-300 ease-out
        ${show 
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }
        hover:bg-zinc-700 dark:hover:bg-zinc-600 hover:scale-105
        active:scale-95
        ${className}
      `}
    >
      <ArrowUp className="h-5 w-5 text-white" strokeWidth={2.5} />
    </button>
  );
}
