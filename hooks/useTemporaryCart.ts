import { Database } from "@/database.types";
import { useEffect, useState } from "react";

type menuItem = Database["public"]["Tables"]["menu_item"]["Row"];

export function useTemporaryCart() {
  const STORAGE_ITEM_NAME = "temporaryCart";
  const [cart, setCart] = useState<menuItem[]>([]);

  function getStoredItems(): menuItem[] {
    const storedItems = localStorage.getItem(STORAGE_ITEM_NAME) ?? "[]";
    return JSON.parse(storedItems);
  }

  function setCartState(item: menuItem) {
    const storedItems = getStoredItems();
    setCart(() => [...storedItems, item]);
  }

  function deleteCartFromClient() {
    localStorage.removeItem(STORAGE_ITEM_NAME);
    setCart([]);
  }

  useEffect(() => {
    if (cart.length != 0)
      localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(cart));
  }, [cart]);

  return {
    cart,
    setCartState,
    getStoredItems,
    deleteCartFromClient,
  };
}
