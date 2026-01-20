"use client";

import { CurrencyDisplay } from "@/components/common/CurrencyDisplay";
import { cn } from "@/lib/utils";
import { ProductBadge } from "./ProductBadge";

interface ProductPriceProps {
  price: number;
  pricingType?: "free" | "cash" | "token";
  showCommunityBadge?: boolean;
  className?: string;
  priceClassName?: string;
  badgeClassName?: string;
}

/**
 * Reusable component for displaying product price (FREE, Token, or Cash)
 */
export function ProductPrice({
  price,
  pricingType,
  showCommunityBadge = true,
  className,
  priceClassName,
  badgeClassName,
}: ProductPriceProps) {
  // Token Pricing
  if (pricingType === "token") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/40">
          <div className="h-3 w-3 rotate-45 rounded-sm bg-purple-600" />
        </div>
        <span
          className={cn(
            "text-2xl font-black text-purple-600 dark:text-purple-400",
            priceClassName
          )}
        >
          {price.toLocaleString()}
        </span>
      </div>
    );
  }

  // Free Pricing
  if (pricingType === "free" || price === 0) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <span
          className={cn("text-xl font-black text-[#0ca678]", priceClassName)}
        >
          FREE
        </span>
        {showCommunityBadge && (
          <ProductBadge variant="success" size="sm" className={badgeClassName}>
            COMMUNITY
          </ProductBadge>
        )}
      </div>
    );
  }

  // Standard Cash Pricing
  return (
    <div className={className}>
      <CurrencyDisplay
        amountInVND={price}
        className={cn("text-2xl font-black text-primary", priceClassName)}
        compact={false}
        interactive={false}
      />
    </div>
  );
}
