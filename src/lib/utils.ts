import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleTheme = (theme: string) => {
  let textColor;
  let bgColor;
  if (theme === "dark" || theme === "system") {
    textColor = "white";
  } else {
    textColor = "black";
    bgColor = "white";
  }
  return { textColor, bgColor };
};
