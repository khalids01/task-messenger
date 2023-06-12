import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () => set({ theme: get() === "light" ? "dark" : "light" }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
