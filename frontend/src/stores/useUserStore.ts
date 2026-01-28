import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthUser } from "@/types";

export type User = AuthUser;

interface UserState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

interface UserActions {
  setUser: (user: User) => void;
  setToken: (token: string | null) => void;
  updateUser: (updates: Partial<User>) => void;
  updateTokens: (amount: number) => void;
  logout: () => void;
}

type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      token: null,
      isAuthenticated: false,

      // Actions
      setUser: (user) => {
        set({ user, isAuthenticated: true });
      },

      setToken: (token) => {
        set({ token });
      },

      updateUser: (updates) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        }));
      },

      updateTokens: (amount) => {
        set((state) => ({
          user: state.user
            ? { ...state.user, token: (state.user.token || 0) + amount }
            : null,
        }));
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: "user-storage", // localStorage key
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
