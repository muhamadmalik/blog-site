import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export type TabState = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};
export type LoadingState = {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
};
export const useTabStore = create<TabState>()(
  persist(
    (set) => ({
      activeTab: '',
      setActiveTab: (tab) => set({ activeTab: tab }),
    }),
    {
      name: 'tab-storage',
    }
  )
);

export const useLoadingStore = create<LoadingState>()((set) => ({
  isLoading: true,
  setLoading: (value: boolean) => set({ isLoading: value }),
}));
