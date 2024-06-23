import { create } from "zustand";

export const useGlobalStates = create((set) => ({
  openAccount: false,
  setOpenAccount: (openAccount) => set({ openAccount }),
}));
