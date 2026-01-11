"use client";

import { useEffect, useRef } from "react";
import { ChatBubble } from "./ChatBubble";

interface Message {
  id: string;
  content: string;
  sender: "user" | "seller";
  timestamp: string;
  codeBlock?: {
    command: string;
    comment?: string;
  };
}

// Mock messages for demo
const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hi there! Is the Crypto Wallet kit compatible with Flutter?",
    sender: "user",
    timestamp: "10:23 AM",
  },
  {
    id: "2",
    content: "Hey! 👋 Currently it's React Native only.",
    sender: "seller",
    timestamp: "10:25 AM",
    codeBlock: {
      command: "npm install react-native-version",
      comment: "// Coming soon for Flutter",
    },
  },
];

/**
 * Chat messages container with auto-scroll
 */
export function ChatMessages() {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {/* Date separator */}
      <div className="mb-4 flex items-center justify-center">
        <span className="text-xs text-muted-foreground">TODAY 10:23 AM</span>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-4">
        {mockMessages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>

      {/* Typing indicator */}
      <div className="mt-4 flex items-center gap-1 text-muted-foreground">
        <span className="text-green-500">&gt;</span>
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "0ms" }} />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "150ms" }} />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "300ms" }} />
        </div>
      </div>

      <div ref={messagesEndRef} />
    </div>
  );
}
