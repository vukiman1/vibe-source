"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Skeleton className="h-9 w-48" />
        <Skeleton className="mt-2 h-5 w-64" />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form Section */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <Skeleton className="mb-6 h-6 w-40" />
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <Skeleton className="mb-6 h-6 w-40" />
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-16 w-full rounded-lg" />
              ))}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border bg-card p-6 shadow-sm">
            <Skeleton className="mb-6 h-6 w-32" />
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-16 w-16 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              ))}
              <Skeleton className="my-4 h-px w-full" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
              <Skeleton className="mt-6 h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
