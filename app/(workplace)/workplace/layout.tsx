import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const signedInUser = await supabase.auth.getUser();

  if (signedInUser.error && !signedInUser) redirect("/menu");

  const user = await supabase
    .from("profiles")
    .select("*")
    .eq("id", signedInUser.data.user?.id)
    .single();

  if (user.data.role == "attendant") return <>{children}</>;
}
