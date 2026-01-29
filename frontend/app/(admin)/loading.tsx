"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLoading() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-xl border bg-card p-6 shadow-sm">
            <Skeleton className="mb-2 h-4 w-24" />
            <Skeleton className="h-8 w-32" />
            <Skeleton className="mt-2 h-3 w-20" />
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <Skeleton className="mb-4 h-6 w-40" />
          <Skeleton className="h-64 w-full" />
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <Skeleton className="mb-4 h-6 w-40" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="border-b p-6">
          <Skeleton className="h-6 w-48" />
        </div>
        <div className="p-6">
          {/* Table Header */}
          <div className="mb-4 grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
          {/* Table Rows */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="mb-3 grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, j) => (
                <Skeleton key={j} className="h-10 w-full" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
