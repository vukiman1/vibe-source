"use client";

import { Plus, Wallet, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/i18n";
import { CurrencyDisplay } from "@/components";

export function HeaderStats() {
  const t = useTranslations("header");

  return (
    <div className="hidden lg:flex items-center gap-4">
      {/* Balance Badge */}
      <div className="flex items-center overflow-hidden rounded-full border bg-background/50 shadow-sm transition-all hover:bg-background group">
        <div className="flex h-8 items-center gap-2 pl-3 border-r px-3 bg-slate-50 group-hover:bg-slate-100 transition-colors">
          <Wallet className="h-3.5 w-3.5 text-blue-600" />
          <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">
            {t("balance")}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-3">
          <CurrencyDisplay
            amountInVND={2450000}
            className="text-sm font-black text-slate-800"
            compact={false}
          />
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Tokens Badge */}
      <div className="flex items-center overflow-hidden rounded-full border bg-background/50 shadow-sm transition-all hover:bg-background group">
        <div className="flex h-8 items-center gap-2 pl-3 border-r px-3 bg-purple-50 group-hover:bg-purple-100 transition-colors">
          <Coins className="h-3.5 w-3.5 text-purple-600" />
          <span className="text-[10px] font-bold uppercase text-purple-500 tracking-wider">
            {t("tokens")}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-3">
          <span className="text-sm font-black text-purple-700">1,250</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full text-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
