"use client";

import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";

interface ChatWindowProps {
  onClose: () => void;
}

/**
 * Main chat window container
 */
export function ChatWindow({ onClose }: ChatWindowProps) {
  return (
    <div className="flex h-[500px] w-[380px] flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl">
      <ChatHeader onClose={onClose} />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
