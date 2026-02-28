"use client";

import { MenuItem } from "@/app/lib/menu";
import { createContext, ReactNode, useState } from "react";

export const CartContext = createContext<{
  cart: MenuItem[];
  addItem: (item: MenuItem) => void;
}>({
  cart: [],
  addItem: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<MenuItem[]>([]);

  function addItem(item: MenuItem) {
    setCart((prev) => [...prev, item]);
  }

  return (
    <CartContext.Provider value={{ cart, addItem: addItem }}>
      {children}
    </CartContext.Provider>
  );
}
