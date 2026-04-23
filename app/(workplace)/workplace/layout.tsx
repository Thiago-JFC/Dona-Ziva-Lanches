import { getUserRole } from "@/lib/auth/getUserRole";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const signedInUser = await getUserRole();

  /* = TODO: PAGE DE ERROR HANDLER = */
  if (signedInUser.error) redirect("/menu");
  if (signedInUser.data?.role == "attendant") return <>{children}</>;
}
