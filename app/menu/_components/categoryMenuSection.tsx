import { createClient } from "@/lib/supabase/client";
import { MenuProduct } from "./menuItem";
import { MenuItem } from "@/lib/menu";

type ICategoryMenuSection = {
  title: "Salgados" | "Bebidas" | "Petiscos" | "Bolos de pote";
  categoryId: 1 | 2 | 3 | 4;
};

export async function CategoryMenuSection({
  categoryId,
  title,
}: ICategoryMenuSection) {
  const menuItems = await getMenuItemsByCategoryId(categoryId);

  /* TODO: HANDLE AND DISPLAY WHEN FETCH FAILS */
  if (menuItems.data)
    return (
      <section
        id={title}
        className="m-auto mt-16 max-w-300 scroll-mt-35 sm:p-0"
      >
        <h2 className="mb-6 text-3xl font-bold">{title}</h2>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {menuItems.data.map((item: MenuItem) => (
            <MenuProduct key={item.id} item={item} />
          ))}
        </ul>
      </section>
    );
}

async function getMenuItemsByCategoryId(id: 1 | 2 | 3 | 4) {
  const supabase = createClient();
  const menuItems = await supabase
    .from("menu_item")
    .select("*")
    .eq("category", id);

  return menuItems;
}
