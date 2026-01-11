"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-background">
      <div className="flex h-full items-center justify-between px-6">
        <Link href="/admin" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold">Vibe Admin</span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
