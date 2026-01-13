"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useSidebarStore } from "@/stores";
import { Navigation } from "./Navigation";
import { Categories } from "./Categories";
import { UpgradeBanner } from "./UpgradeBanner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LeftSidebar() {
  const { isLeftSidebarOpen, closeLeftSidebar } = useSidebarStore();

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      // Auto close on desktop
      if (window.innerWidth >= 1024 && isLeftSidebarOpen) {
        closeLeftSidebar();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLeftSidebarOpen, closeLeftSidebar]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isLeftSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLeftSidebarOpen]);

  return (
    <>
      {/* Overlay - chỉ hiện trên mobile khi sidebar mở */}
      {isLeftSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeLeftSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          // Base styles
          "fixed left-0 top-16 z-50 h-[calc(100vh-64px)] w-64 shrink-0 overflow-y-auto bg-background p-4 transition-transform duration-300 ease-in-out",
          // Desktop: always visible
          "lg:translate-x-0 lg:z-30",
          // Mobile: slide in/out
          isLeftSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Close button - chỉ hiện trên mobile */}
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLeftSidebar}
            className="h-8 w-8"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Đóng menu</span>
          </Button>
        </div>

        <Navigation />
        <Categories />
        <UpgradeBanner />
      </aside>
    </>
  );
}
