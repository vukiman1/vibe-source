"use client";

import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { ProductGrid } from "./ProductGrid";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

// Icon mapping for serialization from Server Components
const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp,
  Sparkles,
  Globe,
  Smartphone,
};

interface ProductSectionProps {
  /** Section title */
  title: string;
  /** Icon name (key from ICON_MAP) - use string for Server Component compatibility */
  iconName?: keyof typeof ICON_MAP;
  /** Products to display */
  products: Product[];
  /** Link to view all products in this section */
  viewAllHref?: string;
  /** Maximum number of products to show (default: 4) */
  maxItems?: number;
  /** Custom class for the section */
  className?: string;
}

/**
 * Reusable product section template
 * Usage:
 * <ProductSection
 *   title="Phổ biến"
 *   iconName="TrendingUp"
 *   products={popularProducts}
 *   viewAllHref="/category/popular"
 * />
 */
export function ProductSection({
  title,
  iconName,
  products,
  viewAllHref,
  maxItems = 4,
  className = "",
}: ProductSectionProps) {
  const displayProducts = products.slice(0, maxItems);
  const Icon = iconName ? ICON_MAP[iconName] : null;

  return (
    <section
      className={cn(
        "mb-10 p-6 md:p-8 rounded-2xl bg-muted border border-border shadow-sm transition-colors",
        className,
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between ">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          {Icon && <Icon className="h-5 w-5 text-primary" />}
          {title}
        </h2>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      {/* Product Grid */}
      <ProductGrid products={displayProducts} variant="scroll" />

      {/* Empty State */}
      {displayProducts.length === 0 && (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed text-muted-foreground">
          Chưa có sản phẩm
        </div>
      )}
    </section>
  );
}
