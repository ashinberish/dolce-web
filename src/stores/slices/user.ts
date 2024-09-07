import { UserType } from "@/types/user";
import { StateCreator } from "zustand";

export type UserSlice = {
  auth_token: string | null;
  user: UserType | null;
  setAuthToken: (token: string) => void;
};

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  auth_token: null,
  user: null,
  setAuthToken: (_token: string) => set(() => ({ auth_token: _token })),
  setUser: (_user: UserType) => set(() => ({ user: _user })),
});
