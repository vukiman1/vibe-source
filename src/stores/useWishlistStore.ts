import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface WishlistItem {
  id: string;
  title: string;
  price: number;
  thumbnail?: string;
  addedAt: number; // timestamp
}

interface WishlistState {
  items: WishlistItem[];
  totalItems: number;
}

interface WishlistActions {
  addItem: (item: Omit<WishlistItem, 'addedAt'>) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: Omit<WishlistItem, 'addedAt'>) => boolean; // returns true if added, false if removed
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
}

type WishlistStore = WishlistState & WishlistActions;

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      // Initial state
      items: [],
      totalItems: 0,

      // Actions
      addItem: (item) => {
        set((state) => {
          // Check if item already exists
          if (state.items.some((i) => i.id === item.id)) {
            return state;
          }

          const newItem: WishlistItem = {
            ...item,
            addedAt: Date.now(),
          };

          const newItems = [...state.items, newItem];
          return {
            items: newItems,
            totalItems: newItems.length,
          };
        });
      },

      removeItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return {
            items: newItems,
            totalItems: newItems.length,
          };
        });
      },

      toggleItem: (item) => {
        const isInWishlist = get().isInWishlist(item.id);
        
        if (isInWishlist) {
          get().removeItem(item.id);
          return false;
        } else {
          get().addItem(item);
          return true;
        }
      },

      isInWishlist: (id) => {
        return get().items.some((item) => item.id === id);
      },

      clearWishlist: () => {
        set({ items: [], totalItems: 0 });
      },
    }),
    {
      name: 'wishlist-storage', // localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);

