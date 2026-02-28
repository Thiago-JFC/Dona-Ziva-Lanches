"use client";
import { MenuItem } from "@/app/lib/menu";
import { CartContext } from "@/app/menu/context/cartContext";
import { CloseModalButton, Modal } from "@/app/ui/modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useContext } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const x = use(params);
  console.log(x.id);

  return (
    <Modal className="lg:flex lg:gap-16">
      <Image
        className="mb-6 w-full shadow-md lg:h-128 lg:w-128"
        src="/default-menu-item.png"
        alt="."
        width={300}
        height={300}
      />

      <div className="flex max-h-128 flex-col justify-between overflow-y-scroll">
        <div className="mb-12 flex justify-between gap-2">
          <div className="space-y-3">
            <h2 className="text-h2 mb-4">Coxinha com requeijão</h2>
            <p className="text-p wrap-break-word">
              Coxinha crocante por fora, recheada com frango desfiado e
              requeijão cremoso. Irresistível docomeço ao fim.
            </p>

            <strong className="text-xl">R$ 6,99</strong>
          </div>

          <button className="shrink-0">
            <Image
              src="/add-to-cart.svg"
              width="24"
              height="24"
              alt="adicionar ao carrinho"
            />
          </button>
        </div>

        <div className="mb-12">
          <h2 className="text-h2 mb-4">Recomendações</h2>

          <ul className="space-y-6 lg:space-y-9">
            <li className="flex items-center justify-between">
              <label>Coca-cola 400ml (R$ 6,99)</label>
              <button>
                <Image
                  src="/add-to-cart.svg"
                  width="24"
                  height="24"
                  alt="adicionar ao carrinho"
                />
              </button>
            </li>
            <li className="flex items-center justify-between">
              <label>Coca-cola 400ml (R$ 6,99)</label>
              <button>
                <Image
                  src="/add-to-cart.svg"
                  width="24"
                  height="24"
                  alt="adicionar ao carrinho"
                />
              </button>
            </li>
            <li className="flex items-center justify-between">
              <label>Coca-cola 400ml (R$ 6,99)</label>
              <button>
                <Image
                  src="/add-to-cart.svg"
                  width="24"
                  height="24"
                  alt="adicionar ao carrinho"
                />
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          <AddItemToCartButton />

          <CloseModalButton className="text-secondary-400 border-secondary-400 basis-1/3 cursor-pointer rounded-sm border-2 px-6 py-2">
            Cancelar
          </CloseModalButton>
        </div>
      </div>
    </Modal>
  );
}

function AddItemToCartButton() {
  const mockedItem: MenuItem = {
    id: "12",
    title: "Coxinha com requeijão",
    description:
      "Coxinha crocante por fora, recheada com frango desfiado e requeijão cremoso. Irresistível docomeço ao fim.",
    price: 7.99,
  };

  const { addItem, cart } = useContext(CartContext);
  const route = useRouter();

  function addItemToCart() {
    addItem(mockedItem);
    route.back();
    console.log(cart.length);
  }

  return (
    <button
      className="bg-primary-400 basis-2/3 cursor-pointer rounded-sm py-4 font-bold text-white"
      onClick={addItemToCart}
    >
      Confirmar (total R$ 6,99)
    </button>
  );
}
