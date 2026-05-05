import { ReactNode } from "react";

export async function EditProfileFieldValue({
  children,
}: {
  children: ReactNode;
}) {
  return <span className="text-sm text-gray-500">{children}</span>;
}
