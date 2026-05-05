import { createClient } from "../supabase/server";
import { getUserAddress } from "./getUserAddress";
import { getUserId } from "./getUserId";

const supabase = await createClient();
const fetchedUserId = await getUserId();

export async function getUserProfileField(
  field: "cellphone" | "full_name" | "address",
) {
  if (fetchedUserId.error) {
    return { error: fetchedUserId.error, data: null };
  }

  switch (field) {
    case "cellphone":
      return fetchUserCellphone();
    case "full_name":
      return fetchUserFullName();
    case "address": {
      return fetchUserAddresses();
    }
  }

  async function fetchUserCellphone() {
    const result = await supabase
      .from("profiles")
      .select("cellphone")
      .eq("id", fetchedUserId.data as string)
      .single();

    if (result.error) {
      return {
        error: result.error,
        data: null,
      };
    }

    return {
      error: null,
      data: result.data.cellphone,
    };
  }

  async function fetchUserFullName() {
    const result = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", fetchedUserId.data as string)
      .single();

    if (result.error) {
      return {
        error: result.error,
        data: null,
      };
    }

    return {
      error: null,
      data: result.data.full_name,
    };
  }

  async function fetchUserAddresses() {
    const result = await getUserAddress();

    if (result.error) {
      return {
        error: result.error,
        data: null,
      };
    }

    return {
      error: null,
      data: result.data,
    };
  }
}
