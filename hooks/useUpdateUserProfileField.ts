import { createClient } from "@/lib/supabase/client";

export function useUpdateUserProfileField() {
  const supabase = createClient();

  async function getUserId() {
    const { data, error } = await supabase.auth.getUser();

    if (data.user) return { data: data.user.id, error };
    return { data: null, error };
  }

  async function updateUserCellphone(newCellphone: string) {
    const userId = await getUserId();

    if (userId.error) return { data: null, error: userId.error };

    const { data, error } = await supabase
      .from("profiles")
      .update({ cellphone: newCellphone })
      .eq("id", userId.data as string)
      .select();

    console.log(data, error);
    return { data, error };
  }

  async function updateUserFullname(newFullname: string) {
    const userId = await getUserId();

    if (userId.error) return { data: null, error: userId.error };

    const { data, error } = await supabase
      .from("profiles")
      .update({ full_name: newFullname })
      .eq("id", userId.data as string)
      .select();

    console.log(data, error);
    return { data, error };
  }

  return {
    updateUserCellphone,
    updateUserFullname,
  };
}
