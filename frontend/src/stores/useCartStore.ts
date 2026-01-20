import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  thumbnail?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

interface CartActions {
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (id: string) => number;
}

type CartStore = CartState & CartActions;

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return { totalItems, totalPrice };
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // Initial state
      items: [],
      totalItems: 0,
      totalPrice: 0,

      // Actions
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          let newItems: CartItem[];
          if (existingItem) {
            // Increase quantity if item already exists
            newItems = state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
          } else {
            // Add new item with quantity 1
            newItems = [...state.items, { ...item, quantity: 1 }];
          }

          const { totalItems, totalPrice } = calculateTotals(newItems);
          return { items: newItems, totalItems, totalPrice };
        });
      },

      removeItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          const { totalItems, totalPrice } = calculateTotals(newItems);
          return { items: newItems, totalItems, totalPrice };
        });
      },

      updateQuantity: (id, quantity) => {
        set((state) => {
          if (quantity <= 0) {
            // Remove item if quantity is 0 or less
            const newItems = state.items.filter((item) => item.id !== id);
            const { totalItems, totalPrice } = calculateTotals(newItems);
            return { items: newItems, totalItems, totalPrice };
          }

          const newItems = state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          );
          const { totalItems, totalPrice } = calculateTotals(newItems);
          return { items: newItems, totalItems, totalPrice };
        });
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },

      getItemQuantity: (id) => {
        const item = get().items.find((i) => i.id === id);
        return item?.quantity || 0;
      },
    }),
    {
      name: 'cart-storage', // localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);

