"use client";

import { Button } from "@/components/ui/button";

export function UpgradeBanner() {
  return (
    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-white">
      <div className="mb-1 text-lg font-bold">Vibe Pro</div>
      <p className="mb-3 text-sm opacity-90">Unlock all premium templates.</p>
      <Button variant="secondary" className="w-full">
        UPGRADE NOW
      </Button>
    </div>
  );
}
