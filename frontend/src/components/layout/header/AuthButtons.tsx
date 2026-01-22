"use client";

import Link from "next/link";
import { LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";

export function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="hidden md:flex gap-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
      >
        <Link href={ROUTES.LOGIN}>
          <LogIn className="h-4 w-4" />
          <span className="font-semibold">Đăng nhập</span>
        </Link>
      </Button>
      <Button
        asChild
        size="sm"
        className="gap-2 bg-linear-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md shadow-blue-500/20"
      >
        <Link href={ROUTES.REGISTER}>
          <UserPlus className="h-4 w-4" />
          <span className="font-semibold">Đăng ký</span>
        </Link>
      </Button>
    </div>
  );
}
