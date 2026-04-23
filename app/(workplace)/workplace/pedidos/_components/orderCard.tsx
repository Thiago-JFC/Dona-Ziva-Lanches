"use client";
import { Database, Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

type OrderItem = Tables<"order_item">;
type Order = Database["public"]["Tables"]["order"]["Row"];

export function OrderCard({ orderId }: { orderId: number }) {
  const supabase = createClient();

  const [orderItems, setOrderItems] = useState<OrderItem[]>();

  async function updateOrderStatus(status: Order["status"], id: Order["id"]) {
    const { data, error } = await supabase
      .from("order")
      .update({ status })
      .eq("id", id)
      .select();
    console.log(data, error);
  }

  useEffect(() => {
    const supabase = createClient();

    supabase
      .from("order_item")
      .select(
        `
        *,
        menu_item (
            title
        )
    `,
      )
      .eq("order_id", orderId)
      .then(({ data }) => {
        if (data) setOrderItems(data);
        console.log(data);
        console.log(orderId);
      });
  }, []);

  return (
    <li className="bg-light-card w-[25%] rounded-md p-4 shadow">
      <h3 className="mb-1.5 text-xl">Pedido de Mateus</h3>
      {orderItems?.map((item) => (
        <div key={item.id}>
          <p className="text-sm text-gray-600">
            {" "}
            {item.menu_item?.title} (R${item.price})
          </p>
        </div>
      ))}

      <h4>Atualizar status para:</h4>

      <select
        name=""
        id=""
        onChange={(e) =>
          updateOrderStatus(e.target.value as Order["status"], orderId)
        }
      >
        <option value="not started">Aguardando confirmação</option>
        <option value="preparing">Em preparo</option>
        <option value="ready">Pronto</option>
        <option value="canceled">Cancelado</option>
      </select>
    </li>
  );
}
