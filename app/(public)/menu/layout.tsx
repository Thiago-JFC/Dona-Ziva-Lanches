import { CartProvider } from "./context/cartContext";

export default function MenuLayout({
  children,
  modal,
  sideCartSection,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  sideCartSection: React.ReactNode;
}) {
  return (
    <>
      <CartProvider>
        {modal}
        {children}
        {sideCartSection}
      </CartProvider>
    </>
  );
}
