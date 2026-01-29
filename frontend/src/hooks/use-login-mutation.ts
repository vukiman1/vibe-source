import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authService } from "@/services/auth.service";
import { ROUTES } from "@/constants";
import { useUserStore } from "@/stores/useUserStore";
import tokenService from "@/services/token.service";
import type { LoginCredentials } from "@/types";

export function useLoginMutation() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);

  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      // api.post correctly typed will return LoginResponseData (which includes user and accessToken)
      // due to the response interceptor in lib/request.ts unwrapping "data.data"
      return authService.login(credentials);
    },
    onSuccess: (data) => {
      // Update Zustand store
      setUser(data.user);
      setToken(data.accessToken);

      // Save to cookies via tokenService
      tokenService.saveAccessTokenAndRefreshTokenToCookie(data.accessToken);

      // React Query cache invalidation (if needed for other user-related queries)
      // queryClient.invalidateQueries({ queryKey: ["user"] });

      toast.success("Đăng nhập thành công");
      router.push(ROUTES.HOME);
    },
    onError: (error: Error) => {
      toast.error(error.message || "Đăng nhập thất bại");
    },
  });
}
