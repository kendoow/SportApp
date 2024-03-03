import { useEffect, useState } from 'react';

import getTheme from '@app/providers/ThemeProvider/lib/getTheme';
import { Theme, ThemeContext, themes } from '@shared/contexts/ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
