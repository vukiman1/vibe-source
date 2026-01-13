"use client";

import Link from "next/link";
import { Menu, ShoppingBag, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/i18n";
import { UserMenu } from "./UserMenu";
import { SearchBar } from "./SearchBar";
import { HeaderStats } from "./HeaderStats";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const t = useTranslations("header");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60",
        className
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* 1. Logo Section */}
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
          <span className="text-xl font-bold text-blue-600">Vibe Coding</span>
        </Link>

        {/* 2. Search Section (Centered) */}
        <SearchBar />

        {/* 3. Right Actions Section */}
        <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
          <HeaderStats />

          {/* Cart */}
          <div className="hidden md:flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 shadow-sm">
            <div className="relative">
              <ShoppingBag className="h-5 w-5 text-slate-700" />
              <Badge className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-0 text-[10px] text-white">
                2
              </Badge>
            </div>
            <span className="text-sm font-bold text-slate-800">1.2tr</span>
          </div>

          {/* Notification */}
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full hover:bg-muted"
          >
            <Bell className="h-5 w-5 text-slate-700" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 box-content border-2 border-background"></span>
          </Button>

          {/* User Menu */}
          <UserMenu />

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
