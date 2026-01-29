import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { cn } from "@/lib/utils";

interface LoadingPageProps {
  message?: string;
  className?: string;
}

export function LoadingPage({ message, className }: LoadingPageProps) {
  return (
    <div
      className={cn(
        "flex min-h-[400px] w-full flex-col items-center justify-center gap-4",
        className,
      )}
    >
      <LoadingSpinner size="lg" />
      {message && (
        <p className="text-sm text-muted-foreground animate-pulse">{message}</p>
      )}
    </div>
  );
}
