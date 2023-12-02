import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "@shared/contexts/ThemeContext";

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
