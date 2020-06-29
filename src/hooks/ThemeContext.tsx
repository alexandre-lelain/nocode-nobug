import React, { createContext, useContext } from 'react'

const STORAGE_KEY = 'mode'
const DEFAULT_MODE = 'light'

// We need null value because of ssr
export type ThemeMode = 'dark' | 'light' | null

interface ThemeModeProviderProps {
  children: React.ReactNode
  mode: ThemeMode
  setMode: () => void
}

type ThemeModeContextType = [ThemeMode, () => void, boolean | null]

const ThemeModeContext = createContext<ThemeModeContextType>([DEFAULT_MODE, () => undefined, false])

const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({
  children,
  mode,
  setMode,
}: ThemeModeProviderProps) => {
  const isDark = mode ? mode === 'dark' : null
  return (
    <ThemeModeContext.Provider value={[mode, setMode, isDark]}>
      {children}
    </ThemeModeContext.Provider>
  )
}

const useThemeMode = (): ThemeModeContextType => useContext(ThemeModeContext)

const isDark = (mode: ThemeMode = DEFAULT_MODE): boolean => mode === 'dark'

const getNextMode = (mode: ThemeMode = DEFAULT_MODE): ThemeMode => (isDark(mode) ? 'light' : 'dark')

const setPreferedMode = (mode: ThemeMode): null | void =>
  mode && localStorage.setItem(STORAGE_KEY, mode)

const getPreferedMode = (): ThemeMode => {
  const storedTheme: ThemeMode = localStorage.getItem(STORAGE_KEY) as ThemeMode
  return storedTheme || DEFAULT_MODE
}

export { ThemeModeProvider, useThemeMode, isDark, getNextMode, getPreferedMode, setPreferedMode }
