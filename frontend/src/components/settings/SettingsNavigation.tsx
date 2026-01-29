"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import type { SettingsMenuItem } from "@/types/settings.types";

interface SettingsNavigationProps {
  items: SettingsMenuItem[];
}

export function SettingsNavigation({ items }: SettingsNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1 rounded-xl bg-card p-2 shadow-sm">
      {items.map((item) => {
        const Icon = Icons[item.icon as keyof typeof Icons] as LucideIcon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
            )}
          >
            <Icon className="h-5 w-5" />
            {item.label}
            {item.badge && (
              <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
