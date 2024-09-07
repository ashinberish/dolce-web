import { create } from "zustand";
import { createUserSlice, type UserSlice } from "./slices/user";
import { createJSONStorage, persist } from "zustand/middleware";

export const useStore = create<UserSlice>()(
  persist(
    (...args) => ({
      ...createUserSlice(...args),
    }),
    {
      name: "the-recipes-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
