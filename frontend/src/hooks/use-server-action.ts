import { useState, useTransition } from "react";

interface UseServerActionOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

export function useServerAction<
  T extends { success: boolean; error?: string },
  P,
>(action: (payload: P) => Promise<T>, options: UseServerActionOptions<T> = {}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | undefined>(undefined);

  const execute = async (payload: P) => {
    setError(null);
    startTransition(async () => {
      try {
        const response = await action(payload);

        if (!response.success) {
          const errorMessage = response.error || "Có lỗi xảy ra";
          setError(errorMessage);
          options.onError?.(errorMessage);
          return;
        }

        setData(response);
        options.onSuccess?.(response);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Có lỗi xảy ra";
        setError(message);
        options.onError?.(message);
      }
    });
  };

  return { execute, isPending, error, data };
}
