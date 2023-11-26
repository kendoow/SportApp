import styles from './ThemeToggler.module.scss'
import {useCallback, useEffect, useState} from 'react'

const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
}

const ThemeToggler = () => {

  const [theme, toggleTheme] = useState<boolean>(false) // false = light
  const body = document.querySelector('body')

  useEffect(() => {
    const userMedia = window.matchMedia(`(prefers-color-scheme: ${THEME.LIGHT})`)
    toggleTheme(!userMedia.matches)

    const themeLS = `${window?.localStorage?.getItem('theme')}`
    themeLS && toggleTheme(themeLS === THEME.DARK)
  }, [])

  useEffect(() => onThemeSet(theme ? THEME.DARK : THEME.LIGHT), [theme])
  const onThemeChanged = useCallback(() => toggleTheme(prevState => !prevState), [theme])

  const onThemeSet = (theme: string) => {
    // @ts-ignore
    body?.classList.remove(...body?.classList)
    body?.classList.add(theme)
    localStorage.setItem("theme", theme.toString())
  }

  return (
    <label className={styles.container}>
      <input type="checkbox" checked={theme} onChange={onThemeChanged}/>
      <div/>
    </label>
  )
}

export default ThemeToggler