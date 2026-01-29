"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";
import { useSidebarStore, useUserStore } from "@/stores";
import { UserMenu } from "./UserMenu";
import { SearchBar } from "./SearchBar";
import { HeaderStats } from "./HeaderStats";
import { CartMenu } from "./CartMenu";
import { NotificationMenu } from "./NotificationMenu";
import { AuthButtons } from "./AuthButtons";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const toggleLeftSidebar = useSidebarStore((state) => state.toggleLeftSidebar);
  const isSearchExpanded = useSidebarStore((state) => state.isSearchExpanded);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60",
        className,
      )}
    >
      {/* Hidden fake inputs to trap browser autofill */}
      <input
        type="text"
        name="fake-username"
        autoComplete="username"
        tabIndex={-1}
        style={{
          position: "absolute",
          opacity: 0,
          height: 0,
          width: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <input
        type="password"
        name="fake-password"
        autoComplete="current-password"
        tabIndex={-1}
        style={{
          position: "absolute",
          opacity: 0,
          height: 0,
          width: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {!isSearchExpanded && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLeftSidebar}
            className="lg:hidden shrink-0 hover:bg-muted/80"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Mở menu</span>
          </Button>
        )}

        {!isSearchExpanded && (
          <Link
            href={ROUTES.HOME}
            prefetch={false}
            className="flex items-center shrink-0 group transition-all"
          >
            <div className="relative flex h-9 w-9 items-center justify-center">
              <Image
                src="/assets/logo/header-logo.png"
                alt="Logo"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight bg-linear-to-r from-[#23c2fb] to-[#0051cf] bg-clip-text text-transparent hidden sm:inline">
                VIBE SOURCE
              </span>
              <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] hidden sm:inline -mt-0.5">
                PREMIUM ASSETS
              </span>
            </div>
          </Link>
        )}

        <SearchBar />

        <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
          {isAuthenticated ? (
            <>
              <HeaderStats />

              <div className="flex items-center gap-1 sm:gap-2">
                {!isSearchExpanded && <CartMenu />}
                {!isSearchExpanded && <NotificationMenu />}
                <UserMenu />
              </div>
            </>
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </header>
  );
}
