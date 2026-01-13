"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/i18n";

export function HeaderStats() {
  const t = useTranslations("header");

  return (
    <div className="hidden lg:flex items-center rounded-full border bg-background p-1 pr-4 shadow-sm">
      <div className="flex items-center gap-2 border-r px-4">
        <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">
          {t("balance")}
        </span>
        <span className="text-sm font-bold text-slate-800">2.450.000đ</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full ml-1 text-muted-foreground hover:bg-muted"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>

      <div className="flex items-center gap-2 pl-4">
        <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
          <div className="h-3 w-3 rounded-sm bg-purple-600 transform rotate-45" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
            {t("tokens")}
          </span>
          <span className="text-sm font-bold text-purple-600">1,250</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full ml-1 text-muted-foreground hover:bg-muted"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
