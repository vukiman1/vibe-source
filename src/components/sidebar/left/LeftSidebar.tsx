"use client";

import { Navigation } from "./Navigation";
import { Categories } from "./Categories";
import { UpgradeBanner } from "./UpgradeBanner";

export function LeftSidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 shrink-0 overflow-y-auto bg-background p-4">
      <Navigation />
      <Categories />
      <UpgradeBanner />
    </aside>
  );
}
