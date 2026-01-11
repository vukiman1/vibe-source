"use client";

import Link from "next/link";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Settings,
  Wallet
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Package, label: "Sản phẩm", href: "/products" },
  { icon: ShoppingCart, label: "Đơn hàng", href: "/orders" },
  { icon: BarChart3, label: "Thống kê", href: "/analytics" },
  { icon: Wallet, label: "Thu nhập", href: "/earnings" },
  { icon: Settings, label: "Cài đặt", href: "/settings" },
];

export function SellerSidebar() {
  return (
    <aside className="sticky top-0 h-full w-64 shrink-0 overflow-y-auto border-r bg-background p-4">
      <div className="mb-6">
        <h2 className="px-3 text-lg font-semibold">Seller Center</h2>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => (
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
    </aside>
  );
}
