"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type ProductBadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

interface ProductBadgeProps {
  children: ReactNode;
  variant?: ProductBadgeVariant;
  size?: "sm" | "md";
  className?: string;
}

/**
 * Reusable badge component for product labels (e.g. FREE, HOT, NEW, COMMUNITY)
 */
export function ProductBadge({
  children,
  variant = "success",
  size = "md",
  className,
}: ProductBadgeProps) {
  const variantStyles = {
    success: "bg-category-bg text-[#0ca678] ring-[#c3fae8]",
    warning: "bg-ratting text-[#f08c00] ring-[#fff3bf]",
    danger: "bg-red-50 text-red-600 ring-red-100",
    info: "bg-blue-50 text-blue-600 ring-blue-100",
    neutral: "bg-slate-100 text-slate-600 ring-slate-200",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px] font-bold tracking-wider",
    md: "px-2.5 py-1 text-[10px] font-black tracking-widest",
  };
  if (!children) return null;

  return (
    <div
      className={cn(
        "rounded-[8px] uppercase shadow-sm ring-1 transition-all",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </div>
  );
}
