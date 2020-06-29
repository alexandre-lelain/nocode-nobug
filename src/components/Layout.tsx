import React, { useState, useEffect, useMemo } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BackToTop, StyledProvider } from 'components-extra'
import { Container } from '@material-ui/core'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'

import {
  ThemeModeProvider,
  isDark,
  getNextMode,
  getPreferedMode,
  setPreferedMode,
  ThemeMode, // eslint-disable-line no-unused-vars
} from 'hooks/ThemeContext' // why in the world can't eslint see that ThemeMode is used a type ?
import { lightTheme, darkTheme } from 'styles'

const StyledContainer = styled(Container)`
  padding: 48px 24px;
  max-width: 700px;
`

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    html {
      background: ${theme.palette.background.default};
      scrollbar-color: #bfbfbf ${theme.palette.background.default};
      transition: color 0.2s ease-out, background 0.2s ease-out;
    }
  `};
`

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [mode, setMode] = useState<ThemeMode>(null)
  const dark = isDark(mode)

  const theme = useMemo(() => (dark ? darkTheme : lightTheme), [dark])

  useEffect(() => {
    setMode(getPreferedMode())
    Prism.highlightAll()
  }, [])

  const toggleMode = () =>
    setMode((prevMode) => {
      const newMode = getNextMode(prevMode)
      setPreferedMode(newMode)
      return newMode
    })

  return (
    <ThemeModeProvider mode={mode} setMode={toggleMode}>
      <StyledProvider dark={dark} theme={theme}>
        <GlobalStyle />
        <StyledContainer maxWidth="sm">
          {children}
          <BackToTop />
        </StyledContainer>
      </StyledProvider>
    </ThemeModeProvider>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
