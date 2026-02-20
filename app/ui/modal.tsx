"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

/* 
  // TODO: IMPLEMENT COMPOUND COMPONENT PATTERN 
*/

export function Modal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="fixed top-0 right-0 z-999 flex h-full w-full justify-center bg-black/50">
      <div
        className={`h-full w-full max-w-lg overflow-y-scroll rounded-3xl bg-white px-2 py-10 sm:p-8 lg:my-16 lg:h-fit lg:max-w-7xl lg:p-16 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export function CloseModalButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <button className={className} onClick={router.back}>
      {children}
    </button>
  );
}
