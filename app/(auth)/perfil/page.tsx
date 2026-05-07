import {
  EditProfileFieldContainer,
  EditProfileFieldTitle,
} from "./_components/editProfileField";
import { EditProfileFieldValue } from "./_components/editProfileFieldValue";
import { getUserProfileField } from "@/lib/auth/getUserProfileField";
import { formatUserAddress } from "@/lib/auth/formatUserAddres";
import { Tables } from "@/database.types";

export default async function Page() {
  const userCellphone = await getUserProfileField("cellphone");
  const userFullName = await getUserProfileField("full_name");
  const userAddresses = await getUserProfileField("address");

  return (
    <main>
      <div className="m-auto my-6 max-w-5xl rounded-2xl bg-[#FEFBFB] p-8 shadow-md">
        <h1 className="mb-5 text-[32px] font-bold">Perfil</h1>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-medium">Informações de contato</h2>

          <ul className="space-y-3 md:grid md:grid-cols-2 md:gap-6">
            <EditProfileFieldContainer
              fieldValue={userFullName.data as string}
              fieldType="full_name"
            >
              <EditProfileFieldTitle>Nome completo</EditProfileFieldTitle>
            </EditProfileFieldContainer>

            <EditProfileFieldContainer
              fieldValue={userCellphone.data as string}
              fieldType="cellphone"
            >
              <EditProfileFieldTitle>Celular</EditProfileFieldTitle>
            </EditProfileFieldContainer>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-medium">Endereços</h2>

          <ul className="space-y-3 md:grid md:grid-cols-2 md:gap-6">
            {userAddresses.data &&
              (userAddresses.data as Tables<"addresses">[]).map(
                (address: Tables<"addresses">) => (
                  <EditProfileFieldContainer
                    key={address.id}
                    fieldValue={formatUserAddress(address)}
                    fieldType="address"
                    editingType="modal"
                    address={address}
                  >
                    <EditProfileFieldTitle>
                      {address.label}
                    </EditProfileFieldTitle>
                  </EditProfileFieldContainer>
                ),
              )}
          </ul>
        </section>
      </div>
    </main>
  );
}
