import React, { createContext, useContext } from 'react'

// We need null value because of ssr
export type ThemeMode = 'dark' | 'light' | null

interface ThemeModeProviderProps {
  children: any
  mode: ThemeMode
  setMode: React.Dispatch<any>
}

const STORAGE_KEY = 'mode'
const DEFAULT_MODE = 'light'

const ThemeModeContext = createContext<[ThemeMode, React.Dispatch<any>, boolean | null]>([
  DEFAULT_MODE,
  () => {},
  null,
])

const ThemeModeProvider = ({ children, mode, setMode }: ThemeModeProviderProps) => {
  const isDark = mode ? mode === 'dark' : null
  return (
    <ThemeModeContext.Provider value={[mode, setMode, isDark]}>
      {children}
    </ThemeModeContext.Provider>
  )
}

const useThemeMode = () => useContext(ThemeModeContext)

const isDark = (mode: ThemeMode = DEFAULT_MODE) => mode === 'dark'

const getNextMode = (mode: ThemeMode = DEFAULT_MODE): ThemeMode => (isDark(mode) ? 'light' : 'dark')

const setPreferedMode = (mode: ThemeMode) => mode && localStorage.setItem(STORAGE_KEY, mode)

const getPreferedMode = (): ThemeMode => {
  const storedTheme: ThemeMode = localStorage.getItem(STORAGE_KEY) as ThemeMode
  return storedTheme || DEFAULT_MODE
}

export { ThemeModeProvider, useThemeMode, isDark, getNextMode, getPreferedMode, setPreferedMode }
