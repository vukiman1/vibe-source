"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/types";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductSectionProps {
  /** Section title */
  title: string;
  /** Optional icon for the title */
  icon?: LucideIcon;
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
 *   icon={TrendingUp}
 *   products={popularProducts}
 *   viewAllHref="/category/popular"
 * />
 */
export function ProductSection({
  title,
  icon: Icon,
  products,
  viewAllHref,
  maxItems = 4,
  className = "",
}: ProductSectionProps) {
  const displayProducts = products.slice(0, maxItems);

  return (
    <section
      className={cn(
        "mb-10 p-6 md:p-8 rounded-2xl bg-muted/40 border border-muted shadow-sm transition-colors",
        className
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {displayProducts.length === 0 && (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed text-muted-foreground">
          Chưa có sản phẩm
        </div>
      )}
    </section>
  );
}
