import { Theme, themes } from '@shared/contexts/ThemeContext';





const getTheme = (): Theme => {
  const theme: Theme = `${window?.localStorage?.getItem('theme')}` as Theme;
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
  if (userMedia.matches) return themes.dark;

  return themes.dark;
};

export default getTheme;