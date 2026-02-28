"use client";
import { MenuItem } from "@/app/lib/menu";
import { CartContext } from "@/app/menu/context/cartContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export function AddItemToCartButton({ item }: { item: MenuItem }) {
  const { addItem } = useContext(CartContext);
  const route = useRouter();

  function addItemToCart() {
    addItem(item);
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
