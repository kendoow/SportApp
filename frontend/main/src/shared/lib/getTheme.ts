import { Theme, themes } from '@shared/contexts/ThemeContext'

const getTheme = ():Theme => {
  const theme: Theme = `${window?.localStorage?.getItem('theme')}` as Theme;
  if (Object.values(themes).includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return themes.light

  return themes.dark
}

export default getTheme