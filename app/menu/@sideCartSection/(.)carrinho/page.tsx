"use client";
import { SideModal } from "@/app/ui/sideModal";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/app/menu/context/cartContext";

export default function Page() {
  const route = useRouter();
  const { cart } = useContext(CartContext);

  return (
    <SideModal>
      <button onClick={route.back}>fechar carrinho</button>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </SideModal>
  );
}
