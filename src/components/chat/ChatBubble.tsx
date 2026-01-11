"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

interface ChatBubbleProps {
  message: Message;
}

/**
 * Individual chat message bubble
 * Supports text and code blocks
 */
export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Avatar for seller only */}
      {!isUser && (
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarImage src="/avatars/seller.png" alt="Seller" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
      )}

      <div
        className={`
          flex max-w-[280px] flex-col gap-2 rounded-2xl px-4 py-3
          ${isUser 
            ? "bg-muted text-foreground rounded-br-md" 
            : "bg-cyan-500 text-white rounded-bl-md"
          }
        `}
      >
        {/* Seller mention */}
        {!isUser && (
          <span className="text-xs font-medium text-cyan-100">
            @PixelPerfect
          </span>
        )}

        {/* Message content */}
        <p className="text-sm leading-relaxed">{message.content}</p>

        {/* Code block */}
        {message.codeBlock && (
          <div className="mt-1 overflow-hidden rounded-lg bg-gray-800 p-3 text-xs">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">$</span>
              <code className="text-white">{message.codeBlock.command}</code>
            </div>
            {message.codeBlock.comment && (
              <div className="mt-1 text-gray-500">{message.codeBlock.comment}</div>
            )}
          </div>
        )}

        {/* Timestamp for seller messages */}
        {!isUser && (
          <span className="text-right text-[10px] text-cyan-100">
            DELIVERED {message.timestamp}
          </span>
        )}
      </div>
    </div>
  );
}
