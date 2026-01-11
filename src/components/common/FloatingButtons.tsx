"use client";

import { ChatWidget } from "@/components/chat";
import { ScrollToTopButton } from "./ScrollToTopButton";

/**
 * Container for floating action buttons
 * Just add new buttons here as children
 */
export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <ScrollToTopButton />
      <ChatWidget />
      {/* Add more floating buttons here */}
    </div>
  );
}

