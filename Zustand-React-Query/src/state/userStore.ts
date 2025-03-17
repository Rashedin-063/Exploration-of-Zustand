import { create } from "zustand";

import { User } from "@/types/user"

type UserStore = {
  users: User[];
  setUsers: (user: User[]) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}))