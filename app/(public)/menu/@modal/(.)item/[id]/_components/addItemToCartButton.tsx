"use client";
import { CartContext } from "@/app/(public)/menu/context/cartContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Database } from "@/database.types";
import { useTemporaryCart } from "@/hooks/useTemporaryCart";

type IAddItemToCartButton = {
  item: Database["public"]["Tables"]["menu_item"]["Row"];
};

export function AddItemToCartButton({ item }: IAddItemToCartButton) {
  const { addItem } = useContext(CartContext);
  const { setCartState } = useTemporaryCart();

  const route = useRouter();

  function addItemToCart() {
    addItem(item);
    setCartState(item);
    route.back();
  }

  return (
    <button
      className="bg-primary-400 basis-2/3 cursor-pointer rounded-sm py-4 font-bold text-white"
      onClick={addItemToCart}
    >
      Confirmar (total R$ {item.price})
    </button>
  );
}
