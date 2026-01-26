"use client";

import { useState, useEffect } from "react";
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
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CurrencyDisplayProps {
  /** Amount in VND (base currency) */
  amountInVND: number;
  /** Show compact format (e.g., 1.2M instead of 1,200,000) */
  compact?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Show currency code alongside symbol */
  showCode?: boolean;
  /** Make the display clickable to change currency */
  interactive?: boolean;
}

export function CurrencyDisplay({
  amountInVND,
  compact = false,
  className,
  showCode = false,
  interactive = true,
}: CurrencyDisplayProps) {
  const { currency, setCurrency } = useCurrency();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  // Prevent hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Convert amount to selected currency
  const convertedAmount =
    currency === "VND" ? amountInVND : convertFromVND(amountInVND, currency);

  // Format the amount
  const formattedAmount = formatCurrency(convertedAmount, currency, {
    showSymbol: true,
    showCode,
    compact,
  });

  // Show VND by default during SSR to prevent hydration mismatch
  if (!mounted) {
    const vndFormatted = formatCurrency(amountInVND, "VND", {
      showSymbol: true,
      showCode,
      compact,
    });
    return <span className={className}>{vndFormatted}</span>;
  }

  if (!interactive) {
    return <span className={className}>{formattedAmount}</span>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "inline-flex items-center gap-1 hover:opacity-80 transition-opacity",
            className,
          )}
        >
          <span>{formattedAmount}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Chọn loại tiền tệ
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
          const currencyInfo = CURRENCIES[code];
          const isSelected = currency === code;

          return (
            <DropdownMenuItem
              key={code}
              onClick={() => setCurrency(code)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{currencyInfo.symbol}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{code}</span>
                  <span className="text-xs text-muted-foreground">
                    {currencyInfo.name}
                  </span>
                </div>
              </div>
              {isSelected && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <div className="px-2 py-1.5 text-xs text-muted-foreground">
          Giá trị:{" "}
          {formatCurrency(
            currency === "VND"
              ? amountInVND
              : convertFromVND(amountInVND, currency),
            currency,
            { showSymbol: true, compact: false },
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
