import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full space-y-6 p-4 sm:p-6 lg:ml-64 lg:mr-72">
      {/* Top Progress Bar Simulation */}
      <div className="fixed top-0 left-0 right-0 z-100 h-1 bg-muted overflow-hidden">
        <div className="h-full bg-blue-600 animate-progress origin-left"></div>
      </div>

      {/* Hero Section Skeleton */}
      <Skeleton className="h-[300px] w-full rounded-[32px]" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4 rounded-[28px] border bg-card p-6">
            <Skeleton className="aspect-4/3 w-full rounded-[20px]" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <div className="flex justify-between items-center pt-4">
              <Skeleton className="h-10 w-24 rounded-[14px]" />
              <Skeleton className="h-10 w-32 rounded-[14px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
