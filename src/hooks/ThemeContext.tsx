import React, { createContext, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

const STORAGE_KEY = 'mode'

const ThemeModeContext = createContext<[string, (() => void) | undefined, boolean]>([
  'light',
  undefined,
  false,
])

const ThemeModeProvider = ({ children, mode, setMode }) => {
  const isDark = mode === 'dark'

  useEffect(() => {
    setPreferedMode(mode)
  }, [mode])

  return (
    <ThemeModeContext.Provider value={[mode, setMode, isDark]}>
      {children}
    </ThemeModeContext.Provider>
  )
}

const useThemeMode = () => useContext(ThemeModeContext)
const isDark = (mode = 'light') => mode === 'dark'
const getNextMode = (mode = 'light') => (isDark(mode) ? 'light' : 'dark')

const setPreferedMode = mode => localStorage.setItem(STORAGE_KEY, mode)

const getPreferedMode = () => {
  return localStorage.getItem(STORAGE_KEY) || 'light'
}

ThemeModeProvider.propTypes = {
  children: PropTypes.any,
  mode: PropTypes.oneOf(['dark', 'light']),
  setMode: PropTypes.func,
}

export { ThemeModeProvider, useThemeMode, isDark, getNextMode, getPreferedMode }
