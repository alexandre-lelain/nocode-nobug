import React, { createContext, useContext, useEffect } from 'react'

export type ThemeMode = 'dark' | 'light'

interface ThemeModeProviderProps {
  children: any
  mode: ThemeMode
  setMode: React.Dispatch<any>
}

const STORAGE_KEY = 'mode'
const DEFAULT_MODE = 'light'

const ThemeModeContext = createContext<[ThemeMode, React.Dispatch<any>, boolean]>([
  DEFAULT_MODE,
  () => {},
  false,
])

const ThemeModeProvider = ({ children, mode, setMode }: ThemeModeProviderProps) => {
  const isDark = mode === 'dark'
  return (
    <ThemeModeContext.Provider value={[mode, setMode, isDark]}>
      {children}
    </ThemeModeContext.Provider>
  )
}

const useThemeMode = () => useContext(ThemeModeContext)

const isDark = (mode: ThemeMode = DEFAULT_MODE) => mode === 'dark'

const getNextMode = (mode: ThemeMode = DEFAULT_MODE): ThemeMode => (isDark(mode) ? 'light' : 'dark')

const setPreferedMode = (mode: ThemeMode) => localStorage.setItem(STORAGE_KEY, mode)

const getPreferedMode = (): ThemeMode => {
  const storedTheme: ThemeMode = localStorage.getItem(STORAGE_KEY) as ThemeMode
  return storedTheme || DEFAULT_MODE
}

export {
  ThemeModeProvider,
  useThemeMode,
  isDark,
  getNextMode,
  getPreferedMode,
  setPreferedMode,
  DEFAULT_MODE,
}
