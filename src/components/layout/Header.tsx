"use client";

import Link from "next/link";
// import { useTranslations } from "next-intl";
import {
  Menu,
  Search,
  Plus,
  ShoppingBag,
  Bell,
  Moon,
  Sun,
  Languages,
  LogOut,
  User,
  Settings,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/ui/theme-toggle";
// import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useLocaleSwitch } from "@/hooks";
import { useTranslations } from "@/i18n";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  // const t = useTranslations("nav");
  // const tAuth = useTranslations("auth");
  const { setTheme, theme } = useTheme();
  const { locale, switchLocale, locales } = useLocaleSwitch();
  const t = useTranslations("header");
  const localeNames: Record<string, string> = {
    en: "English",
    vi: "Tiếng Việt",
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
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
        <div className="hidden max-w-xl flex-1 items-center gap-2 rounded-full border bg-muted/50 px-2 shadow-sm sm:flex">
          <Search className="ml-2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t("search")}
            className="flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/70"
          />
          <Button className="rounded-full bg-blue-600 px-6 font-medium text-white hover:bg-blue-700 h-8 my-1">
            Search
          </Button>
        </div>

        {/* 3. Right Actions Section */}
        <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
          {/* Balance & Tokens Pill */}
          <div className="hidden lg:flex items-center rounded-full border bg-background p-1 pr-4 shadow-sm">
            <div className="flex items-center gap-2 border-r px-4">
              <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">
                {t("balance")}
              </span>
              <span className="text-sm font-bold text-slate-800">
                2.450.000đ
              </span>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                <div className="h-3 w-3 rounded-sm bg-purple-600 transform rotate-45" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                  {t("tokens")}
                </span>
                <span className="text-sm font-bold text-purple-600">1,250</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-full ml-1 text-muted-foreground hover:bg-muted"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

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

          {/* Avatar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9 border-2 border-orange-200 cursor-pointer transition-transform hover:scale-105 active:scale-95">
                <AvatarImage src="/assets/avatar-placeholder.jpg" />
                <AvatarFallback className="bg-orange-100 text-orange-600 font-bold">
                  K
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              {/* Language Switcher */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Languages className="mr-2 h-4 w-4" />
                  <span>Language</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {locales.map((loc) => (
                      <DropdownMenuItem
                        key={loc}
                        onClick={() => switchLocale(loc)}
                      >
                        <span className="flex-1">{localeNames[loc]}</span>
                        {locale === loc && <Check className="ml-2 h-4 w-4" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              {/* Theme Switcher */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="ml-6">Theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                      {theme === "light" && (
                        <Check className="ml-auto h-4 w-4" />
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                      {theme === "dark" && (
                        <Check className="ml-auto h-4 w-4" />
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                      {theme === "system" && (
                        <Check className="ml-auto h-4 w-4" />
                      )}
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 focus:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
