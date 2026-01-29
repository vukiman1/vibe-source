import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";

export function useUserCredit() {
  return useQuery({
    queryKey: ["user", "credit"],
    queryFn: async () => {
      return userService.getUserCredit();
    },
    // staleTime: 5 * 60 * 1000,
  });
}
