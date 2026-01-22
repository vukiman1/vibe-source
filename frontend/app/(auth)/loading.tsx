"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function AuthLoading() {
  return (
    <div className="w-full flex flex-col gap-6 p-8 rounded-2xl border bg-card shadow-sm">
      <div className="space-y-2 text-center">
        <Skeleton className="h-8 w-32 mx-auto" />
        <Skeleton className="h-4 w-48 mx-auto opacity-70" />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>

      <Skeleton className="h-11 w-full rounded-md mt-2" />

      <div className="flex items-center gap-2">
        <Skeleton className="h-px flex-1" />
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-px flex-1" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
}
