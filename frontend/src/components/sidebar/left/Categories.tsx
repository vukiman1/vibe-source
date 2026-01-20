"use client";

import Link from "next/link";
import { Layers, Bot, Smartphone, Library, ShoppingCart } from "lucide-react";

const categories = [
  { icon: Layers, label: "SaaS Kits", href: "/category/saas-kits" },
  { icon: Bot, label: "AI Powered", href: "/category/ai-powered" },
  { icon: Smartphone, label: "Mobile Apps", href: "/category/mobile-apps" },
  { icon: Library, label: "UI Libraries", href: "/category/ui-libraries" },
  { icon: ShoppingCart, label: "E-commerce", href: "/category/e-commerce" },
];

export function Categories() {
  return (
    <div className="mt-8">
      <h3 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Categories
      </h3>
      <nav className="space-y-1">
        {categories.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
