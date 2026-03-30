"use client";
import { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

type OrderItem = Tables<"order_item">;

export function OrderCard({ orderId }: { orderId: number }) {
  const [orderitems, setOrderItems] = useState<OrderItem[]>();

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
      {orderitems?.map((item) => (
        <div key={item.id}>
          <p className="text-sm text-gray-600">
            {" "}
            {item.menu_item.title} (R${item.price})
          </p>
        </div>
      ))}
    </li>
  );
}
