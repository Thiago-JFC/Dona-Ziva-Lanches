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
      {modal}
      {children}
      {sideCartSection}
    </>
  );
}
