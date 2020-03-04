import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const ThemeModeContext = createContext([undefined, undefined, false])

const ThemeModeProvider = ({ children, mode, setMode }) => (
  <ThemeModeContext.Provider value={[mode, setMode]}>{children}</ThemeModeContext.Provider>
)

const useThemeMode = () => useContext(ThemeModeContext)
const isDark = (mode = 'light') => mode === 'dark'
const getNextMode = (mode = 'light') => (isDark(mode) ? 'light' : 'dark')

ThemeModeProvider.propTypes = {
  children: PropTypes.any,
  mode: PropTypes.oneOf(['dark', 'light']),
  setMode: PropTypes.func,
}

export { ThemeModeProvider, useThemeMode, isDark, getNextMode }
