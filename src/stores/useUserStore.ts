import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  tokens: number;
  role: 'user' | 'seller' | 'admin';
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}

interface UserActions {
  setUser: (user: User) => void;
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
      isAuthenticated: false,

      // Actions
      setUser: (user) => {
        set({ user, isAuthenticated: true });
      },

      updateUser: (updates) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        }));
      },

      updateTokens: (amount) => {
        set((state) => ({
          user: state.user
            ? { ...state.user, tokens: state.user.tokens + amount }
            : null,
        }));
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'user-storage', // localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);

