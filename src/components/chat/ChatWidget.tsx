"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ChatWindow } from "./ChatWindow";

interface ChatWidgetProps {
  className?: string;
}

/**
 * Floating chat widget with glowing gradient button
 */
export function ChatWidget({ className }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen((prev) => !prev);

  return (
    <div className={className}>
      {/* Chat Window with animation */}
      <div
        className={`
          absolute bottom-16 right-0 
          transition-all duration-300 ease-out
          ${isOpen 
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }
        `}
      >
        <ChatWindow onClose={() => setIsOpen(false)} />
      </div>

      {/* Glowing Chat Button */}
      <button
        onClick={toggleChat}
        className={`
          group relative h-14 w-14
          transition-transform duration-300 ease-out
          ${isOpen ? "scale-90" : "hover:scale-110"}
          active:scale-95
        `}
      >
        {/* Outer glow ring */}
        <div 
          className={`
            absolute inset-[-8px] rounded-full
            bg-gradient-to-br from-sky-300/40 via-blue-400/30 to-cyan-300/40
            blur-md
            transition-all duration-300
            ${isOpen ? "opacity-50 scale-90" : "opacity-100 scale-100"}
            group-hover:opacity-100 group-hover:scale-110
          `}
        />
        
        {/* Inner glow layer */}
        <div 
          className={`
            absolute inset-[-4px] rounded-full
            bg-gradient-to-br from-sky-400/50 via-blue-500/40 to-cyan-400/50
            blur-sm
            transition-all duration-300
            ${isOpen ? "opacity-50" : "opacity-80"}
          `}
        />

        {/* Main button */}
        <div 
          className={`
            relative h-full w-full rounded-full
            bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600
            shadow-lg shadow-blue-500/30
            flex items-center justify-center
            transition-all duration-300
            ${isOpen 
              ? "from-gray-400 via-gray-500 to-gray-600 shadow-gray-500/30" 
              : ""
            }
          `}
        >
          {/* Icon container */}
          <div className="relative h-6 w-6 text-white">
            <MessageCircle 
              className={`
                absolute inset-0 h-6 w-6 
                transition-all duration-300
                ${isOpen 
                  ? "opacity-0 rotate-90 scale-0" 
                  : "opacity-100 rotate-0 scale-100"
                }
              `}
              strokeWidth={2}
            />
            <X 
              className={`
                absolute inset-0 h-6 w-6 
                transition-all duration-300
                ${isOpen 
                  ? "opacity-100 rotate-0 scale-100" 
                  : "opacity-0 -rotate-90 scale-0"
                }
              `}
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <div 
            className="
              absolute inset-0 rounded-full
              bg-gradient-to-br from-sky-400 to-blue-500
              animate-ping opacity-20
            "
          />
        )}
      </button>
    </div>
  );
}
