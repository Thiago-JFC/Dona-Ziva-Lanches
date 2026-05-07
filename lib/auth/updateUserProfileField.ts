import { createClient } from "../supabase/server";
import { getUserId } from "./getUserId";

const supabase = await createClient();
const userId = await getUserId();

async function updateUserCellphone(newCellphone: string) {
  if (userId.error) return { data: null, error: userId.error };

  const { data, error } = await supabase
    .from("profiles")
    .update({ cellphone: newCellphone })
    .eq("id", userId.data)
    .select();

  return { data, error };
}

async function updateUserFullname(newFullname: string) {
  if (userId.error) return { data: null, error: userId.error };

  const { data, error } = await supabase
    .from("profiles")
    .update({ full_name: newFullname })
    .eq("id", userId.data)
    .select();

  return { data, error };
}

export { updateUserCellphone, updateUserFullname };
