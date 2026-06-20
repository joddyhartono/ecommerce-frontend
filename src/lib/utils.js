import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const toRupiah = (amount) => {
  return `Rp${amount.toLocaleString("id-ID")}`;
};
