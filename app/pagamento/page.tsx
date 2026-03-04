import Image from "next/image";
import { MenuItem } from "../../lib/menu";

const mockedCart: MenuItem[] = [
  {
    id: "23",
    title: "Coxinha com requeijão",
    description: "aa",
    price: 6.99,
  },
];

export default function Page() {
  return (
    <>
      <main className="bg-primary-100 min-h-screen px-4 py-16">
        <h1 className="mb-4 text-center text-2xl font-bold lg:text-start">
          Finalizar pedido
        </h1>

        <div className="lg:grid lg:grid-cols-[max(700px)_max(300px)] lg:gap-16">
          <div className="m-auto max-w-175 space-y-4 lg:m-0">
            <section>
              <PaymentSectionCard>
                <h2 className="mb-4 text-lg font-medium">Resumo do pedido</h2>

                <ul className="mb-6">
                  {mockedCart.map((cartItem) => (
                    <li key={cartItem.id} className="text-sm text-gray-600">
                      {cartItem.title}
                    </li>
                  ))}
                </ul>

                <footer>
                  <b>Subtotal: R$ 6,99</b>
                </footer>
              </PaymentSectionCard>
            </section>

            <PaymentSection>
              <PaymentSectionCard>
                <fieldset>
                  <legend className="mb-4 text-lg font-medium">
                    Selecione endereço de entrega
                  </legend>

                  {/* Address option */}
                  <label className="mb-4 block cursor-pointer">
                    <input
                      type="radio"
                      name="address"
                      value="home"
                      className="peer sr-only"
                    />

                    <div className="peer-focus-visible:ring-primary-400 flex w-full items-center gap-4 rounded-sm border border-gray-400 px-4 py-2 peer-checked:bg-neutral-200 peer-focus-visible:ring-2">
                      <Image
                        src="/icons/address.svg"
                        width={32}
                        height={32}
                        alt=""
                      />

                      <div className="text-start">
                        <h3 className="text-md font-bold">Casa</h3>
                        <span className="text-sm text-gray-500">
                          Rua das palmeiras, 68
                        </span>
                      </div>
                    </div>
                  </label>

                  {/* Add address */}
                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="address"
                      value="add"
                      className="peer sr-only"
                    />

                    <div className="peer-focus-visible:ring-primary-400 flex w-full items-center gap-4 rounded-sm border border-gray-400 px-4 py-2 peer-checked:bg-neutral-200 peer-focus-visible:ring-2">
                      <Image
                        src="/icons/add.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                      <span>Adicionar endereço</span>
                    </div>
                  </label>
                </fieldset>
              </PaymentSectionCard>
            </PaymentSection>

            <PaymentSection>
              <PaymentSectionCard>
                <fieldset className="mb-4 space-y-4">
                  <legend className="text-lg font-semibold">
                    Selecione forma de pagamento
                  </legend>

                  {/* Pix */}
                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      className="peer sr-only"
                    />

                    <div className="peer-focus-visible:ring-primary-400 flex gap-4 rounded-sm border border-gray-400 p-6 transition peer-checked:bg-neutral-200 peer-focus-visible:ring-2">
                      <Image
                        src="/icons/pix.svg"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <span>Pix</span>
                    </div>
                  </label>

                  {/* Crédito */}
                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      className="peer sr-only"
                    />

                    <div className="peer-focus-visible:ring-primary-400 flex gap-4 rounded-sm border border-gray-400 p-6 transition peer-checked:bg-neutral-200 peer-focus-visible:ring-2">
                      <Image
                        src="/icons/credit-card.svg"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <span>Crédito</span>
                    </div>
                  </label>

                  {/* débito */}

                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="debit"
                      className="peer sr-only"
                    />

                    <div className="peer-focus-visible:ring-primary-400 flex gap-4 rounded-sm border border-gray-400 p-6 transition peer-checked:bg-neutral-200 peer-focus-visible:ring-2">
                      <Image
                        src="/icons/credit-card.svg"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <span>Débito</span>
                    </div>
                  </label>
                </fieldset>

                <span className="text-sm text-gray-500">
                  O pagamento será efetuado na entrega.
                </span>
              </PaymentSectionCard>
            </PaymentSection>
          </div>

          <PaymentSection className="h-fit lg:mt-0">
            <PaymentSectionCard>
              <span className="block">Subtotal: R$ 6,99</span>
              <span className="block">Entrega: R$ 6,99</span>
              <span className="block">Total: R$ 6,99</span>
              <button className="bg-primary-400 rounded-4xl px-10 py-4 font-bold text-white">
                Finalizar compra
              </button>
            </PaymentSectionCard>
          </PaymentSection>
        </div>
      </main>
    </>
  );
}

function PaymentSectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-light-card rounded-sm p-4 text-center shadow-md">
      {children}
    </div>
  );
}

function PaymentSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`has-focus-visible:ring-primary-400 has-focus-visible:ring-2 ${className}`}
    >
      {children}
    </section>
  );
}
