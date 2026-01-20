"use client";

import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Settings,
  Shield,
  FileText
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Users, label: "Người dùng", href: "/admin/users" },
  { icon: Package, label: "Sản phẩm", href: "/admin/products" },
  { icon: ShoppingCart, label: "Đơn hàng", href: "/admin/orders" },
  { icon: BarChart3, label: "Thống kê", href: "/admin/analytics" },
  { icon: FileText, label: "Báo cáo", href: "/admin/reports" },
  { icon: Shield, label: "Phân quyền", href: "/admin/roles" },
  { icon: Settings, label: "Cài đặt", href: "/admin/settings" },
];

export function AdminSidebar() {
  return (
    <aside className="sticky top-0 h-full w-64 flex-shrink-0 overflow-y-auto border-r bg-background p-4">
      <div className="mb-6">
        <h2 className="px-3 text-lg font-semibold text-red-600">Admin Panel</h2>
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
