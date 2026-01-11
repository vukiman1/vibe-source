"use client";

import { useState } from "react";
import { Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Chat input with send and attachment buttons
 */
export function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Send message:", message);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t bg-muted/30 p-3">
      <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2">
        {/* Command prefix */}
        <span className="text-green-500 font-mono">$</span>

        {/* Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Execute message..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />

        {/* Attachment button */}
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
          <Paperclip className="h-4 w-4 text-muted-foreground" />
        </Button>

        {/* Send button */}
        <Button
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full bg-blue-500 hover:bg-blue-600"
          onClick={handleSend}
          disabled={!message.trim()}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
