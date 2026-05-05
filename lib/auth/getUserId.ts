import { createClient } from "../supabase/server";

export async function getUserId() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) return { error, data: null };
  return { error: null, data: data.user.id };
}
