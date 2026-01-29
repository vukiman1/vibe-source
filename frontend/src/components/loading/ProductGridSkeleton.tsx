import { Skeleton } from "@/components/ui/skeleton";

interface ProductGridSkeletonProps {
  count?: number;
  columns?: {
    default?: number;
    sm?: number;
    lg?: number;
    xl?: number;
  };
}

export function ProductGridSkeleton({
  count = 8,
  columns = {
    default: 1,
    sm: 2,
    lg: 3,
    xl: 4,
  },
}: ProductGridSkeletonProps) {
  const gridClasses = `grid gap-4 ${
    columns.default ? `grid-cols-${columns.default}` : "grid-cols-1"
  } ${columns.sm ? `sm:grid-cols-${columns.sm}` : "sm:grid-cols-2"} ${
    columns.lg ? `lg:grid-cols-${columns.lg}` : "lg:grid-cols-3"
  } ${columns.xl ? `xl:grid-cols-${columns.xl}` : "xl:grid-cols-4"}`;

  return (
    <div className="w-full space-y-6">
      <div className="space-y-4">
        <Skeleton className="h-8 w-48 rounded-lg" />
        <div className={gridClasses}>
          {[...Array(count)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3 rounded-xl border p-3">
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
    </div>
  );
}
