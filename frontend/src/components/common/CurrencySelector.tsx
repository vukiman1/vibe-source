"use client";

import { useCurrency } from "@/providers/currency-provider";
import {
  CURRENCIES,
  convertFromVND,
  formatCurrency,
  type CurrencyCode,
} from "@/lib/currency";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CurrencySelectorProps {
  /** Additional CSS classes */
  className?: string;
  /** Show as button or inline */
  variant?: "button" | "inline";
}

export function CurrencySelector({
  className,
  variant = "button",
}: CurrencySelectorProps) {
  const { currency, setCurrency } = useCurrency();
  const currencyInfo = CURRENCIES[currency];

  if (variant === "inline") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "inline-flex items-center gap-1 hover:opacity-80 transition-opacity text-sm font-medium",
              className
            )}
          >
            <span className="text-lg">{currencyInfo.symbol}</span>
            <span>{currency}</span>
            <ChevronDown className="h-3 w-3 opacity-50" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            Chọn loại tiền tệ
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
            const info = CURRENCIES[code];
            const isSelected = currency === code;

            return (
              <DropdownMenuItem
                key={code}
                onClick={() => setCurrency(code)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{info.symbol}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{code}</span>
                    <span className="text-xs text-muted-foreground">
                      {info.name}
                    </span>
                  </div>
                </div>
                {isSelected && <Check className="h-4 w-4 text-primary" />}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("gap-2", className)}
        >
          <Globe className="h-4 w-4" />
          <span className="text-lg">{currencyInfo.symbol}</span>
          <span className="font-medium">{currency}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Chọn loại tiền tệ
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
          const info = CURRENCIES[code];
          const isSelected = currency === code;

          return (
            <DropdownMenuItem
              key={code}
              onClick={() => setCurrency(code)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{info.symbol}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{code}</span>
                  <span className="text-xs text-muted-foreground">
                    {info.name}
                  </span>
                </div>
              </div>
              {isSelected && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

