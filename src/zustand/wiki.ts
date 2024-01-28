import { create } from 'zustand';

type WikiPageStore = {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  selectPage: (page: number) => void;
};

export const useWikiPageStore = create<WikiPageStore>((set) => ({
  currentPage: 1,
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
  selectPage: (page) => set(() => ({ currentPage: page })),
}));
