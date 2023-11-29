import { useEffect, useState } from 'react'
import { Theme, ThemeContext, themes } from '../contexts/ThemeContext'
import getTheme from '@shared/lib/getTheme'

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getTheme)

 useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme):Theme => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider