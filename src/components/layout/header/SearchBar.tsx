"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, TrendingUp, Package, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/i18n";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Mock data for suggestions
const MOCK_SUGGESTIONS = [
  {
    id: "1",
    title: "E-commerce React Template",
    category: "React",
    price: "250.000đ",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    title: "Dashboard UI Kit",
    category: "UI Kit",
    price: "450.000đ",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    title: "Mobile App Starter",
    category: "React Native",
    price: "300.000đ",
    image:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=100&h=100&fit=crop",
  },
];

const RECENT_SEARCHES = [
  "Next.js Template",
  "Tailwind UI",
  "Authentication",
  "Dashboard",
];

export function SearchBar() {
  const t = useTranslations("header");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Searching for:", query);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div ref={containerRef} className="relative hidden max-w-xl flex-1 sm:flex">
      <div
        className={cn(
          "flex w-full items-center gap-2 rounded-full border bg-muted/50 px-2 shadow-sm transition-all duration-200 focus-within:bg-background focus-within:ring-2 focus-within:ring-blue-500/20",
          isOpen &&
            "rounded-b-none border-b-transparent bg-background shadow-lg"
        )}
      >
        <Search className="ml-2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={t("search-placeholder")}
          className="flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/70"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full hover:bg-muted"
            onClick={() => setQuery("")}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
        <Button
          onClick={handleSearch}
          className="rounded-full bg-blue-600 px-6 font-medium text-white hover:bg-blue-700 h-8 my-1 ml-1"
        >
          {t("search")}
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 overflow-hidden rounded-b-2xl border border-shadow bg-background/95 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-4 space-y-5">
            {/* Recent Searches / Trends */}
            {!query && (
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-blue-500" />
                  {t("trending-searches")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {RECENT_SEARCHES.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setQuery(item);
                        setIsOpen(false);
                      }}
                      className="rounded-full border border-transparent bg-muted/50 px-4 py-1.5 text-xs font-medium hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product Suggestions */}
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Package className="h-3.5 w-3.5 text-blue-500" />
                {t("suggested-products")}
              </h3>
              <div className="space-y-1">
                {MOCK_SUGGESTIONS.map((product) => (
                  <div
                    key={product.id}
                    className="group flex cursor-pointer items-center gap-3 rounded-xl p-2 hover:bg-blue-50/50 transition-all border border-transparent hover:border-blue-100"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border bg-muted shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-1 flex-col truncate">
                      <span className="truncate text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="text-sm font-bold text-blue-600">
                        {product.price}
                      </div>
                      <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {query && (
              <div className="pt-2 border-t mt-2">
                <Button
                  variant="ghost"
                  className="w-full text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl py-6"
                >
                  {t("view-all-results")} {query && `"${query}"`}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
