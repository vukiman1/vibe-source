import { create } from "zustand";

interface SidebarState {
  isLeftSidebarOpen: boolean;
  isRightSidebarOpen: boolean;
  isSearchExpanded: boolean;
}

interface SidebarActions {
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
  closeLeftSidebar: () => void;
  closeRightSidebar: () => void;
  openLeftSidebar: () => void;
  openRightSidebar: () => void;
  toggleSearch: () => void;
  expandSearch: () => void;
  collapseSearch: () => void;
}

type SidebarStore = SidebarState & SidebarActions;

export const useSidebarStore = create<SidebarStore>((set) => ({
  // Initial state
  isLeftSidebarOpen: false,
  isRightSidebarOpen: false,
  isSearchExpanded: false,

  // Actions
  toggleLeftSidebar: () =>
    set((state) => ({ isLeftSidebarOpen: !state.isLeftSidebarOpen })),

  toggleRightSidebar: () =>
    set((state) => ({ isRightSidebarOpen: !state.isRightSidebarOpen })),

  closeLeftSidebar: () => set({ isLeftSidebarOpen: false }),

  closeRightSidebar: () => set({ isRightSidebarOpen: false }),

  openLeftSidebar: () => set({ isLeftSidebarOpen: true }),

  openRightSidebar: () => set({ isRightSidebarOpen: true }),

  toggleSearch: () =>
    set((state) => ({ isSearchExpanded: !state.isSearchExpanded })),

  expandSearch: () => set({ isSearchExpanded: true }),

  collapseSearch: () => set({ isSearchExpanded: false }),
}));
