"use client";

import { FlashSale } from "./FlashSale";
import { TopSellers } from "./TopSellers";

export function RightSidebar() {
  return (
    <aside className="fixed right-0 top-16 h-[calc(100vh-64px)] w-72 flex-shrink-0 overflow-y-auto border-l bg-background p-4">
      <FlashSale />
      <TopSellers />
    </aside>
  );
}
