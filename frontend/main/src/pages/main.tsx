import React from 'react'
import { themes } from '@shared/contexts/ThemeContext'
import useTheme from '@shared/hooks/useTheme'

const Main: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <input
      id='toggler'
      type='checkbox'
      onClick={() => {
        if (theme === themes.light) toggleTheme()
        if (theme === themes.dark) toggleTheme()
      }}
      checked={theme === themes.dark}
      readOnly
    />
  )
}

export default Main