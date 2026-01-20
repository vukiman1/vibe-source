"use client";

import { ReactNode } from "react";
import { LeftSidebar } from "@/components/sidebar/left";
import { RightSidebar } from "@/components/sidebar/right";

interface HomeLayoutProps {
  children: ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <LeftSidebar />
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
      <RightSidebar />
    </div>
  );
}
