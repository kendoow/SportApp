import React, { createContext } from "react";

export const themes = {
  dark: "dark",
  light: "light",
} as const;

export type Theme = (typeof themes)[keyof typeof themes];

export interface ThemeContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
