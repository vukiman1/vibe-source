"use client";

import { Bell, Check, Info, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// Mock notifications data
const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    title: "Order Successful",
    description: "Your purchase of 'Vibe Premium Dashboard' was successful.",
    time: "2 mins ago",
    type: "success",
    read: false,
  },
  {
    id: "2",
    title: "New Item in Wishlist",
    description: "An item in your wishlist is now on sale!",
    time: "1 hour ago",
    type: "info",
    read: false,
  },
  {
    id: "3",
    title: "System Update",
    description: "We've added new features to the Token Shop.",
    time: "5 hours ago",
    type: "warning",
    read: true,
  },
];

export function NotificationMenu() {
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer group">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted relative"
          >
            <Bell className="h-6 w-6 text-slate-700" />
            {unreadCount > 0 && (
              <Badge className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 p-0 border-2 border-background" />
            )}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b bg-muted/30">
          <h3 className="font-bold text-sm uppercase tracking-wider">
            Notifications
          </h3>
          {unreadCount > 0 && (
            <button className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-tighter">
              Mark all as read
            </button>
          )}
        </div>

        <div className="max-h-[350px] overflow-y-auto">
          {MOCK_NOTIFICATIONS.length > 0 ? (
            MOCK_NOTIFICATIONS.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={cn(
                  "flex items-start gap-3 p-4 focus:bg-muted/50 border-b last:border-b-0 cursor-pointer",
                  !notification.read && "bg-blue-50/30"
                )}
              >
                <div
                  className={cn(
                    "h-9 w-9 rounded-full flex items-center justify-center shrink-0 shadow-sm border",
                    notification.type === "success" &&
                      "bg-green-100 text-green-600 border-green-200",
                    notification.type === "info" &&
                      "bg-blue-100 text-blue-600 border-blue-200",
                    notification.type === "warning" &&
                      "bg-amber-100 text-amber-600 border-amber-200"
                  )}
                >
                  {notification.type === "success" && (
                    <Check className="h-4.5 w-4.5" />
                  )}
                  {notification.type === "info" && (
                    <Info className="h-4.5 w-4.5" />
                  )}
                  {notification.type === "warning" && (
                    <AlertTriangle className="h-4.5 w-4.5" />
                  )}
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "text-xs font-bold truncate",
                        !notification.read
                          ? "text-slate-900"
                          : "text-slate-600 uppercase tracking-wide text-[10px]"
                      )}
                    >
                      {notification.title}
                    </span>
                    <span className="text-[9px] text-muted-foreground whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                    {notification.description}
                  </p>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-xs text-muted-foreground">
                No new notifications
              </p>
            </div>
          )}
        </div>

        <div className="p-3 bg-muted/10 border-t text-center">
          <button className="text-[10px] font-bold text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors">
            View All Notifications
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
