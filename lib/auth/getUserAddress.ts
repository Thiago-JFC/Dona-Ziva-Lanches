import { createClient } from "../supabase/server";
import { getUserId } from "./getUserId";

export async function getUserAddress() {
  const supabase = await createClient();
  const fechedUserId = await getUserId();

  if (fechedUserId.error) return { error: fechedUserId.error, data: null };

  const userAdresses = await supabase
    .from("addresses")
    .select("*")
    .eq("user_id", fechedUserId.data);

  if (userAdresses.error) return { error: userAdresses.error, data: null };
  return {
    error: null,
    data: userAdresses.data,
  };
}
