"use client";

import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { useTranslations } from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { CurrencyDisplay } from "@/components/common/CurrencyDisplay";

// Mock data for the cart items
const MOCK_CART_ITEMS = [
  {
    id: "1",
    title: "Vibe Premium Dashboard Template",
    price: 850000,
    image: "/assets/placeholder-1.jpg",
  },
  {
    id: "2",
    title: "E-commerce UI Kit Pro",
    price: 350000,
    image: "/assets/placeholder-2.jpg",
  },
];

export function CartMenu() {
  const t = useTranslations("cart");
  const count = MOCK_CART_ITEMS.length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer group">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted relative"
          >
            <ShoppingBag className="h-6 w-6 text-slate-700" />
            {count > 0 && (
              <Badge className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-0 text-[10px] text-white">
                {count}
              </Badge>
            )}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0 overflow-hidden">
        <div className="p-4 border-b bg-muted/30">
          <h3 className="font-bold text-sm uppercase tracking-wider">
            {t("title")}
          </h3>
        </div>

        <div className="max-h-[300px] overflow-y-auto">
          {MOCK_CART_ITEMS.length > 0 ? (
            MOCK_CART_ITEMS.map((item) => (
              <DropdownMenuItem
                key={item.id}
                className="flex items-center gap-3 p-4 focus:bg-muted/50 border-b last:border-b-0"
              >
                <div className="h-12 w-12 rounded bg-slate-100 shrink-0 overflow-hidden border">
                  {/* Image placeholder */}
                  <div className="w-full h-full bg-slate-200" />
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="text-xs font-bold truncate">
                    {item.title}
                  </span>
                  <CurrencyDisplay
                    amountInVND={item.price}
                    className="text-[10px] font-bold text-blue-600"
                    compact={false}
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full text-muted-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-xs text-muted-foreground">{t("empty")}</p>
            </div>
          )}
        </div>

        {MOCK_CART_ITEMS.length > 0 && (
          <div className="p-4 bg-muted/10">
            <Link href={ROUTES.CART} className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest py-5">
                {t("checkout")}
              </Button>
            </Link>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
