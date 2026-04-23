import { createClient } from "../supabase/server";

export async function getUserRole() {
  const supabase = await createClient();
  const signedInUser = await supabase.auth.getUser();

  if (signedInUser.error || !signedInUser)
    return { error: signedInUser.error, data: null };

  const user = await supabase
    .from("profiles")
    .select("role")
    .eq("id", signedInUser.data.user?.id)
    .single();

  return { error: null, data: user.data };
}
