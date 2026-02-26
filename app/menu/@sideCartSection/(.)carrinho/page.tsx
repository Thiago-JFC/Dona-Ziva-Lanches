"use client";
import { SideModal } from "@/app/ui/sideModal";
import { useRouter } from "next/navigation";

export default function Page() {
  const route = useRouter();

  return (
    <SideModal>
      <button onClick={route.back}>fechar carrinho</button>
    </SideModal>
  );
}
