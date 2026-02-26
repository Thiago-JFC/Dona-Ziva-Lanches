export function SideModal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 left-0 z-999 flex h-screen w-screen justify-end bg-black/30">
      <div
        role="dialog"
        className="h-full w-full bg-neutral-100 px-4 py-8 sm:max-w-lg"
      >
        {children}
      </div>
    </div>
  );
}
