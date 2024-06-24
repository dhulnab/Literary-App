import { create } from "zustand";

export const useGlobalStates = create((set) => ({
  page: "Home",
  setPage: (page) => set({ page }),
}));
