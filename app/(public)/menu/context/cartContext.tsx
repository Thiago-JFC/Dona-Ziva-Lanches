"use client";

import { Database } from "@/database.types";
import { createContext, ReactNode, useState } from "react";

type menuItem = Database["public"]["Tables"]["menu_item"]["Row"];

export const CartContext = createContext<{
  cart: menuItem[];
  addItem: (item: menuItem) => void;
}>({
  cart: [],
  addItem: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<menuItem[]>([]);

  function addItem(item: menuItem) {
    setCart((prev) => [...prev, item]);
  }

  return (
    <CartContext.Provider value={{ cart, addItem: addItem }}>
      {children}
    </CartContext.Provider>
  );
}
