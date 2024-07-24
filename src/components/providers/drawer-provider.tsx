"use client";

import * as React from "react";
import { type ThemeProviderProps } from "next-themes/dist/types";

import { useDrawerStore } from "@/lib/stores/use-drawer-store";
import { Drawer } from "../ui/drawer";
export function DrawerProvider({ children }: ThemeProviderProps) {
  const { isOpen } = useDrawerStore();

  return (
    <Drawer direction="right" dismissible={false} open={isOpen}>
      {children}
    </Drawer>
  );
}
