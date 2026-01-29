"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function SettingsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Header Skeleton */}
      <div className="mb-8 space-y-2">
        <Skeleton className="h-9 w-64" />
        <Skeleton className="h-5 w-96" />
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar Skeleton */}
        <nav className="w-full shrink-0 lg:w-72">
          <div className="sticky top-24 flex flex-col gap-6">
            {/* User Card Skeleton */}
            <div className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm">
              <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>

            {/* Menu Skeleton */}
            <div className="space-y-1 rounded-xl bg-card p-2 shadow-sm">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-full rounded-lg" />
              ))}
            </div>

            {/* Logout Button Skeleton */}
            <Skeleton className="h-11 w-full rounded-xl" />
          </div>
        </nav>

        {/* Main Content Skeleton */}
        <main className="flex-1 space-y-6">
          {/* Profile Settings Card */}
          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="border-b p-6">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="mt-2 h-4 w-96" />
            </div>
            <div className="space-y-8 p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <Skeleton className="h-24 w-24 rounded-full" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-64" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="col-span-2 h-32 w-full" />
              </div>
            </div>
          </div>

          {/* Security Settings Card */}
          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="border-b p-6">
              <Skeleton className="h-6 w-56" />
            </div>
            <div className="space-y-6 p-6">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
