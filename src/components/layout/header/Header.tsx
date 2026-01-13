"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/stores";
import { UserMenu } from "./UserMenu";
import { SearchBar } from "./SearchBar";
import { HeaderStats } from "./HeaderStats";
import { CartMenu } from "./CartMenu";
import { NotificationMenu } from "./NotificationMenu";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const toggleLeftSidebar = useSidebarStore((state) => state.toggleLeftSidebar);
  const isSearchExpanded = useSidebarStore((state) => state.isSearchExpanded);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60",
        className
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Mobile Menu Button - Left - ẩn khi search expanded */}
        {!isSearchExpanded && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLeftSidebar}
            className="lg:hidden shrink-0"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Mở menu</span>
          </Button>
        )}

        {/* 1. Logo Section - ẩn khi search expanded trên mobile */}
        {!isSearchExpanded && (
          <Link href={ROUTES.HOME} className="flex items-center gap-2 shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054a8.25 8.25 0 0 0 5.58.652l3.109-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.158l-.106-.053a8.25 8.25 0 0 0-5.69-.717l-2.137.534v8.068a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-blue-600 hidden sm:inline">
              Vibe Coding
            </span>
          </Link>
        )}

        {/* 2. Search Section (Centered) */}
        <SearchBar />

        {/* 3. Right Actions Section - ẩn cart và notification khi search expanded trên mobile */}
        <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
          {/* HeaderStats - luôn ẩn trên mobile */}
          <HeaderStats />

          {/* Cart - ẩn khi search expanded trên mobile */}
          {!isSearchExpanded && <CartMenu />}

          {/* Notification - ẩn khi search expanded trên mobile */}
          {!isSearchExpanded && <NotificationMenu />}

          {/* User Menu - luôn hiện */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
