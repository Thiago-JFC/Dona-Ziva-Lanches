import { Modal } from "@/app/ui/modal";
import { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/client";
import { SubmitEvent, useState } from "react";

export function EditUserAddressModal({
  address,
  handleEditing,
}: {
  address: Tables<"addresses">;
  handleEditing: () => void;
}) {
  const supabase = createClient();
  const [newAddress, setNewAddress] = useState<Partial<Tables<"addresses">>>();
  const [isModalOpened, setIsModalOpened] = useState(true);

  function handleFieldChange(field: keyof Tables<"addresses">, value: string) {
    setNewAddress((address) => {
      return {
        ...address,
        [field]: value,
      };
    });
  }

  async function submitAdressChanges(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const userID = await supabase.auth.getUser();
    if (userID.data.user && newAddress) {
      const { data, error } = await supabase
        .from("addresses")
        .update(newAddress)
        .eq("user_id", userID.data.user.id)
        .eq("id", address.id)
        .select();
    }
    handleEditing();
    setIsModalOpened(false);
  }

  if (isModalOpened)
    return (
      <Modal>
        <form onSubmit={(e) => submitAdressChanges(e)}>
          <fieldset className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8">
            <div className="mb-8 space-y-10 lg:mb-0">
              <div className="flex flex-col">
                <label htmlFor="rua" className="cursor-pointer">
                  Rua
                </label>
                <input
                  type="text"
                  id="rua"
                  defaultValue={address.rua as string}
                  onChange={(e) =>
                    handleFieldChange(
                      e.target.id as keyof Tables<"addresses">,
                      e.target.value,
                    )
                  }
                  className="focus:border-b-primary-400 border-b border-b-gray-300 outline-none focus:border-b-2"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="bairro" className="cursor-pointer">
                  Bairro
                </label>
                <input
                  type="text"
                  id="bairro"
                  onChange={(e) =>
                    handleFieldChange(
                      e.target.id as keyof Tables<"addresses">,
                      e.target.value,
                    )
                  }
                  defaultValue={address.bairro as string}
                  className="focus:border-b-primary-400 border-b border-b-gray-300 outline-none focus:border-b-2"
                />
              </div>
            </div>

            <div className="space-y-10">
              <div className="flex flex-col">
                <label htmlFor="cep" className="cursor-pointer">
                  CEP
                </label>
                <input
                  type="text"
                  id="CEP"
                  defaultValue={address.CEP as string}
                  onChange={(e) =>
                    handleFieldChange(
                      e.target.id as keyof Tables<"addresses">,
                      e.target.value,
                    )
                  }
                  className="focus:border-b-primary-400 border-b border-b-gray-300 outline-none focus:border-b-2"
                />
              </div>

              <div className="lg:flex lg:gap-12">
                <div className="flex min-w-0 flex-col">
                  <label
                    htmlFor="numero_residencial"
                    className="cursor-pointer"
                  >
                    Número Residencial
                  </label>
                  <input
                    type="text"
                    id="numero_residencial"
                    onChange={(e) =>
                      handleFieldChange(
                        e.target.id as keyof Tables<"addresses">,
                        e.target.value,
                      )
                    }
                    defaultValue={address.numero_residencial as string}
                    className="focus:border-b-primary-400 border-b border-b-gray-300 outline-none focus:border-b-2"
                  />
                </div>

                <div className="flex min-w-0 flex-col">
                  <label htmlFor="complemento" className="cursor-pointer">
                    complemento
                  </label>
                  <input
                    type="text"
                    id="complemento"
                    onChange={(e) =>
                      handleFieldChange(
                        e.target.id as keyof Tables<"addresses">,
                        e.target.value,
                      )
                    }
                    defaultValue={address.complemento as string}
                    className="focus:border-b-primary-400 border-b border-b-gray-300 outline-none focus:border-b-2"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-2 flex min-w-0 flex-col">
              <label htmlFor="ponto_referencia" className="cursor-pointer">
                Ponto de referência
              </label>
              <input
                type="text"
                id="ponto_referencia"
                onChange={(e) =>
                  handleFieldChange(
                    e.target.id as keyof Tables<"addresses">,
                    e.target.value,
                  )
                }
                defaultValue={address.ponto_referencia as string}
                className="focus:border-b-primary-400 border-b border-b-gray-300 outline-none focus:border-b-2"
              />
            </div>
          </fieldset>

          <footer className="mt-14 flex justify-end gap-8">
            <button
              onClick={() => {
                handleEditing();
                setIsModalOpened(false);
              }}
            >
              Cancelar
            </button>
            <button>Confirmar</button>
          </footer>
        </form>
      </Modal>
    );
}
