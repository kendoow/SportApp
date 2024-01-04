import { useEffect, useState } from "react";
import { Theme, ThemeContext, themes } from "@shared/contexts/ThemeContext";
import getTheme from "@app/providers/ThemeProvider/lib/getTheme";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
