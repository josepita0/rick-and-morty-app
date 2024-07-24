"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IRegisterState {
  id?: number;
  userName?: string;
  password?: string;
}
interface IRegisterStore {
  registers: IRegisterState[];
  setRegister: (register: IRegisterState) => void;
}

export const useRegisterStore = create<IRegisterStore>((set) => ({
  registers: [],
  setRegister: (newState) =>
    set((oldState) => ({
      registers: [
        ...oldState.registers,
        { ...newState, id: oldState.registers.length + 1 },
      ],
    })),
}));
