"use client";

import { LayoutGrid } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  onClose: () => void;
}

/**
 * Chat header with seller info and controls
 */
export function ChatHeader({}: ChatHeaderProps) {
  // TODO: Get actual seller data from context/props
  const seller = {
    name: "@PixelPerfect",
    avatar: "/avatars/seller.jpg",
    isOnline: true,
    latency: "12ms",
    tags: ["REACT", "JS"],
  };

  return (
    <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-3">
      <div className="flex items-center gap-3">
        {/* Menu button */}
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <LayoutGrid className="h-4 w-4" />
        </Button>

        {/* Seller info */}
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={seller.avatar} alt={seller.name} />
            <AvatarFallback>{seller.name[1]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">{seller.name}</span>
              {seller.isOnline && (
                <span className="h-2 w-2 rounded-full bg-green-500" />
              )}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-1">
          {seller.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">
          LAT: {seller.latency}
        </span>
        <div className="flex gap-1">
          <span className="h-3 w-3 rounded-sm bg-gray-300" />
          <span className="h-3 w-3 rounded-sm bg-red-400" />
        </div>
      </div>
    </div>
  );
}
