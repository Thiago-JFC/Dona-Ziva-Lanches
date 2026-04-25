"use client";
import type { Tables } from "@/database.types";
import { OrderCard } from "./_components/orderCard";
import { useOrders } from "@/hooks/useOrders";

type OrderStatus = Tables<"order">["status"];

export default function Page() {
  const { orders } = useOrders();
  const orderStatus: OrderStatus[] = [
    "canceled",
    "not started",
    "preparing",
    "ready",
  ];

  return (
    <>
      <main>
        {orderStatus.map((status) => (
          <section key={status}>
            <h2 className="text-2xl font-bold">{status}</h2>

            <ul className="flex gap-4">
              {orders
                .filter((order) => order.status == status)
                .map((order) => (
                  <OrderCard orderId={order.id} key={order.id} />
                ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}
