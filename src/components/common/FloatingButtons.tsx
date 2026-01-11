"use client";

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openChat = () => {
    // TODO: Implement chat functionality
    console.log("Open chat");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {showScrollTop && (
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-blue-500 shadow-lg hover:bg-blue-600"
        onClick={openChat}
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
    </div>
  );
}
