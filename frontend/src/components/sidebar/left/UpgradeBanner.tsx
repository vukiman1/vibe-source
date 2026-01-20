"use client";

import { Button } from "@/components/ui/button";

export function UpgradeBanner() {
  return (
    <div className="absolute bottom-4 left-4 right-4 overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-blue-400 p-4 text-white">
      <div className="absolute bottom-6 -right-2">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-xl font-bold">
          <span
            className="font-bold opacity-50 text-blue-600"
            style={{ fontSize: "60px" }}
          >
            ?
          </span>
        </div>
      </div>

      <div className="relative mb-1 text-md font-bold">NEED HELP?</div>
      <p className="relative mb-3 text-sm opacity-90">
        Learn how to maximize your vibes and earnings.
      </p>
      <Button variant="secondary" className="relative w-full">
        <span className="text-blue-600">Read Guide</span>
      </Button>
    </div>
  );
}
