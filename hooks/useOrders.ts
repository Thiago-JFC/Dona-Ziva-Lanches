"use client";

import { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

type Order = Tables<"order">;

export function useOrders() {
  const supabase = createClient();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      const { data } = await supabase.from("order").select("*");

      if (data) setOrders(data);
    }

    fetchOrders();
  }, [supabase]);

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

  return {
    orders,
    setOrders,
  };
}
