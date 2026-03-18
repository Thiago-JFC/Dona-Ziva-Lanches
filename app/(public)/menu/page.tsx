import { HeaderMenu } from "./_components/header";
import { CategoryMenuSection } from "./_components/categoryMenuSection";

export default async function MenuPage() {
  return (
    <>
      <HeaderMenu />

      <main className="scroll-smooth px-5 py-8">
        <CategoryMenuSection title="Salgados" categoryId={1} />
        <CategoryMenuSection title="Bebidas" categoryId={2} />
        <CategoryMenuSection title="Petiscos" categoryId={3} />
        <CategoryMenuSection title="Bolos de pote" categoryId={4} />
      </main>
    </>
  );
}
