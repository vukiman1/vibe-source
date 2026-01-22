"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Coins, Heart, ShoppingBag, Sparkles } from "lucide-react";
import { useTranslations } from "@/i18n";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Sparkles, label: "Welcome", href: "/welcome" },
  { icon: Coins, label: "Token Shop", href: "/token-shop", badge: "NEW" },
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: ShoppingBag, label: "Purchases", href: "/purchases" },
];

export function Navigation() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          prefetch={false}
          className={`flex items-center gap-3 rounded-lg px-3 py-3 text-md font-bold transition-colors ${
            isActive(item.href)
              ? "bg-blue-50 text-primary"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <item.icon className="h-4 w-4" />
          <span>{t(item.label)}</span>
          {item.badge && (
            <span className="ml-auto rounded bg-violet-500 px-1.5 py-0.5 text-xs text-white">
              {t("bage." + item.badge)}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
}
