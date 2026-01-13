"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { formatCount } from "@/lib/utils";
import { ProductPrice } from "./ProductPrice";
import { ProductBadge } from "./ProductBadge";
import { handleCodeLanguageIcon } from "@/lib/handleCodeIcon";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-[28px] border-none bg-card shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)]">
      <Link href={`/product/${product.id}`} className="relative block shrink-0">
        <div className="relative aspect-4/3 overflow-hidden p-3.5 pb-0">
          <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-muted">
            {product.thumbnail && (
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}

            {/* Top Badges */}
            <div className="absolute left-3.5 top-3.5">
              <ProductBadge variant="success">
                {product.pricingType === "free" ? "FREE" : null}
              </ProductBadge>
            </div>

            {/* Favorite Button */}
            <button className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-background/95 text-[#ff6b6b] shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all hover:scale-110 active:scale-95">
              <Heart className="h-4 w-4 fill-[#ff6b6b]" />
            </button>
          </div>
        </div>

        {/* Tech Stack Icons Overlay */}
        {product.languages && product.languages.length > 0 && (
          <div className="absolute -bottom-3.5 left-3.5 z-20 flex gap-2">
            {product.languages.slice(0, 3).map((lang) => {
              const iconUrl = handleCodeLanguageIcon(lang);
              return (
                <div
                  key={lang}
                  className="flex items-center gap-1.5 rounded bg-background p-1 shadow ring-1 ring-border"
                >
                  {iconUrl && (
                    <>
                      <div className="flex h-5 w-5 items-center justify-center">
                        <Image
                          src={iconUrl}
                          width={16}
                          height={16}
                          alt={lang}
                        />
                      </div>
                      <span className="px-1 text-[10px] font-bold uppercase text-foreground opacity-65">
                        {lang}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Link>

      <CardContent className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <Link href={`/product/${product.id}`} className="min-w-0 flex-1">
            <h3 className="h-3.5rem line-clamp-2 text-lg font-black tracking-tight text-card-foreground">
              {product.title}
            </h3>
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex items-center gap-1 rounded-[8px] bg-ratting px-2 py-1 text-[11px] font-black text-[#f08c00] ">
              <Star className="h-3.5 w-3.5 fill-[#f08c00] text-[#f08c00]" />
              {product.rating}
            </div>
            <span className="text-nowrap text-[10px] font-semibold text-muted-foreground">
              {formatCount(product.reviewCount)}{" "}
              <span className="text-[9px] uppercase tracking-tighter">dl</span>
            </span>
          </div>
        </div>

        <p className="mt-3 h-[2.5rem] line-clamp-2 text-[13px] font-medium leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {product.categories?.slice(0, 3).map((category) => (
            <div
              key={category}
              className="rounded-full bg-category-bg px-3 py-1 text-[10px] font-bold text-[#0ca678] transition-colors hover:bg-[#c3fae8]"
            >
              {category}
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex items-center justify-between border-t border-border p-6">
        <div className="flex items-center gap-2">
          <ProductPrice
            price={product.price}
            pricingType={product.pricingType}
          />
        </div>

        <Button className="h-10 gap-2 rounded-[14px] bg-[#20c997] px-5 text-xs font-black text-white shadow-[0_8px_20px_rgba(32,201,151,0.2)] transition-all duration-300 hover:bg-[#12b886] hover:shadow-[0_12px_24px_rgba(32,201,151,0.3)] active:scale-95">
          Add to Cart
          <ShoppingCart className="h-3.5 w-3.5 stroke-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}
