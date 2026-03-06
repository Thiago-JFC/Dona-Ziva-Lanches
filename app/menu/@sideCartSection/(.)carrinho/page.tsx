"use client";
import { SideModal } from "@/app/ui/sideModal";
import { redirect, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useTemporaryCart } from "@/hooks/useTemporaryCart";

export default function Page() {
  const route = useRouter();
  const { getStoredItems } = useTemporaryCart();
  const cart = getStoredItems();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <SideModal>
      <button onClick={route.back}>fechar carrinho</button>

      <button onClick={handleSignOut}>sair da conta</button>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <button onClick={() => redirect("/pagamento")}>Finalizar compra</button>
    </SideModal>
  );
}
