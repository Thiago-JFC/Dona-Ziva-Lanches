"use client";
import { Database } from "@/database.types";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { OrderCard } from "./_components/orderCard";

type Order = Database["public"]["Tables"]["order"]["Row"];

export default function Page() {
  const [orders, setOrders] = useState<Order[]>([]);
  const supabase = createClient();

  async function updateOrderStatus(status: Order["status"], id: Order["id"]) {
    const { data, error } = await supabase
      .from("order")
      .update({ status })
      .eq("id", id)
      .select();
    console.log(data, error);
  }

  /* FETCH ORDERS FOR THE FIRST TIME */
  useEffect(() => {
    async function fetchOrders() {
      const { data, error } = await supabase.from("order").select("*");

      if (data) setOrders(data);
      console.log(error);
    }

    fetchOrders();
  }, []);

  /* SUBSCRIBE ON REAL TIME CHANGES */
  useEffect(() => {
    const channel = supabase
      .channel("orders_channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "order",
        },
        (payload) => {
          if (payload.eventType === "UPDATE") {
            setOrders((prev) =>
              prev.map((o) =>
                o.id === payload.new.id ? (payload.new as Order) : o,
              ),
            );
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <>
      <main>
        <section>
          <h2 className="text-2xl font-bold">Aguardando confirmação</h2>

          <ul className="flex gap-4">
            {orders.map((order) => {
              if (order.status == "not started")
                return <OrderCard orderId={order.id} key={order.id} />;
            })}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Em preparo</h2>

          <ul className="flex gap-4">
            {orders.map((order) => {
              if (order.status == "preparing")
                return <OrderCard orderId={order.id} key={order.id} />;
            })}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Pronto pra entrega</h2>

          <ul className="flex gap-4">
            {orders.map((order) => {
              if (order.status == "ready")
                return <OrderCard orderId={order.id} key={order.id} />;
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
