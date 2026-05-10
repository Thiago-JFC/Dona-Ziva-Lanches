"use client";

import { Database } from "@/database.types";
import { useEffect, useState } from "react";

type MenuItem = Database["public"]["Tables"]["menu_item"]["Row"];

export function useTemporaryCart() {
  const STORAGE_ITEM_NAME = "temporaryCart";

  const [cart, setCart] = useState<MenuItem[]>(() => {
    if (typeof window === "undefined") return [];

    const storedItems = localStorage.getItem(STORAGE_ITEM_NAME);
    return storedItems ? JSON.parse(storedItems) : [];
  });

  function setCartState(item: MenuItem) {
    setCart((prev) => [...prev, item]);
  }

  function deleteCartFromClient() {
    localStorage.removeItem(STORAGE_ITEM_NAME);
    setCart([]);
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(cart));
  }, [cart]);

  return {
    cart,
    setCartState,
    deleteCartFromClient,
  };
}
