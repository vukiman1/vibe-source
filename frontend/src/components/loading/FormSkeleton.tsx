import { Skeleton } from "@/components/ui/skeleton";

interface FormSkeletonProps {
  fields?: number;
  hasSubmitButton?: boolean;
  hasSocialButtons?: boolean;
  className?: string;
}

export function FormSkeleton({
  fields = 2,
  hasSubmitButton = true,
  hasSocialButtons = false,
  className,
}: FormSkeletonProps) {
  return (
    <div className={className}>
      {/* Title and description */}
      <div className="space-y-2 text-center mb-6">
        <Skeleton className="h-8 w-32 mx-auto" />
        <Skeleton className="h-4 w-48 mx-auto opacity-70" />
      </div>

      {/* Form fields */}
      <div className="space-y-4">
        {[...Array(fields)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        ))}
      </div>

      {/* Submit button */}
      {hasSubmitButton && <Skeleton className="h-11 w-full rounded-md mt-6" />}

      {/* Social buttons */}
      {hasSocialButtons && (
        <>
          <div className="flex items-center gap-2 my-6">
            <Skeleton className="h-px flex-1" />
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-px flex-1" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </>
      )}
    </div>
  );
}
