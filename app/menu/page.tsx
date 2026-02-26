import { getAllMenuItems, MenuItem } from "@/app/lib/menu";
import { MenuProduct } from "./_components/menuItem";
import { HeaderMenu } from "./_components/header";

export default async function MenuPage() {
  const menuItems = await getAllMenuItems();

  return (
    <>
      <HeaderMenu />

      <main className="px-5 py-8">
        <section className="m-auto mt-16 max-w-300 sm:p-0">
          <h2 className="mb-6 text-3xl font-bold">Salgados</h2>

          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {menuItems.map((item: MenuItem) => (
              <MenuProduct key={item.id} item={item} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
