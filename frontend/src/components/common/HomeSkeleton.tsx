"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function HomeSkeleton() {
  return (
    <div className="space-y-10">
      {/* Hero Banner Skeleton */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="h-[200px] sm:h-[240px] lg:h-[280px] rounded-2xl lg:col-span-2 overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-[120px] rounded-2xl" />
          <Skeleton className="h-[120px] rounded-2xl" />
        </div>
      </div>

      {/* Keywords Skeleton */}
      <div className="rounded-lg bg-card p-4 shadow-sm space-y-3">
        <Skeleton className="h-4 w-32" />
        <div className="flex flex-wrap gap-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Product Sections Skeleton */}
      {[...Array(2)].map((_, sectionIdx) => (
        <div
          key={sectionIdx}
          className="p-6 md:p-8 rounded-2xl bg-muted/50 border border-border"
        >
          <div className="mb-4 flex items-center justify-between">
            <Skeleton className="h-7 w-48" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex gap-4 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-[280px] sm:w-[320px] shrink-0 space-y-3 p-3 border rounded-xl bg-background"
              >
                <Skeleton className="aspect-video w-full rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
