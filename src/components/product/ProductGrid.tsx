"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  variant?: "grid" | "scroll";
}

export function ProductGrid({ products, variant = "grid" }: ProductGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [products]);

  const scrollAction = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (variant === "scroll") {
    return (
      <div className="group/grid relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        {/* Navigation Buttons */}
        <div className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover/grid:opacity-100 sm:left-2">
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border border-border bg-background shadow-xl hover:bg-muted"
              onClick={() => scrollAction("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover/grid:opacity-100 sm:right-2">
          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border border-border bg-background shadow-xl hover:bg-muted"
              onClick={() => scrollAction("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide mask-image:linear-gradient(to_right,white_90%,transparent)"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[280px] shrink-0 sm:w-[320px] xl:w-[calc((100%-32px)/3)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
