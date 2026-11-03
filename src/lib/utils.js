import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const toRupiah = (amount) => {
  return `Rp${amount.toLocaleString("id-ID")}`;
};

export const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp < Date.now() / 1000;
  } catch {
    return true;
  }
};

export const getInitials = (name) => {
  if (!name) {
    return "";
  }
  const words = name.split(" ");
  if (words.length === 1) {
    return words[0][0];
  }
  return words[0][0] + words[words.length - 1][0];
};

export const detectMimeType = (base64) => {
  if (base64.startsWith("/9j/")) {
    return "image/jpeg";
  } else if (base64.startsWith("iVBOR")) {
    return "image/png";
  } else if (base64.startsWith("R0lGOD")) {
    return "image/gif";
  } else if (base64.startsWith("UklGR")) {
    return "image/webp";
  }
  return "image/jpeg";
};

export const toImageSrc = (image) => {
  if (!image) {
    return;
  }
  const value = image.trim();
  if (value.startsWith("data:")) {
    return value;
  } else {
    return `data:${detectMimeType(value)};base64,${value}`;
  }
};

export const toRawBase64 = (image) => {
  if (!image) {
    return;
  }
  return image.startsWith("data:") ? image.split(",")[1] : image;
};
