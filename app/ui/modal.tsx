"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className="fixed top-0 right-0 z-999 flex h-full w-full justify-center bg-black/50">
      <div className="bg-neutral-200">
        {children}

        <button onClick={router.back}>close modal</button>
      </div>
    </div>
  );
}
