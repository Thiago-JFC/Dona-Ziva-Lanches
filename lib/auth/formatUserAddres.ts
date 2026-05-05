import { Tables } from "@/database.types";

export function formatUserAddress(address: Tables<"addresses">) {
  return `${address.rua}, ${address.numero_residencial} — ${address.CEP}`;
}
