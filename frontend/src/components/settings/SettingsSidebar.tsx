"use client";

import { LogOut, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SettingsNavigation } from "./SettingsNavigation";
import type { UserProfile, SettingsMenuItem } from "@/types/settings.types";

interface SettingsSidebarProps {
  user: UserProfile;
  menuItems: SettingsMenuItem[];
  onLogout?: () => void;
}

export function SettingsSidebar({
  user,
  menuItems,
  onLogout,
}: SettingsSidebarProps) {
  return (
    <nav className="w-full shrink-0 lg:w-72">
      <div className="sticky top-24 flex flex-col gap-6">
        {/* User Mini Card */}
        <div className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-muted">
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <p className="truncate text-sm font-bold">{user.name}</p>
            <div className="flex items-center gap-1">
              {user.isVerified && (
                <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
              )}
              <p className="truncate text-xs text-muted-foreground">
                {user.role}
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <SettingsNavigation items={menuItems} />

        {/* Logout Button */}
        <Button
          variant="outline"
          className="group w-full justify-start gap-3 border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive"
          onClick={onLogout}
        >
          <LogOut className="h-5 w-5" />
          Đăng xuất
        </Button>
      </div>
    </nav>
  );
}
