import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BackToTop, StyledProvider } from 'components-extra'
import { Container } from '@material-ui/core'

import {
  ThemeModeProvider,
  isDark,
  getNextMode,
  getPreferedMode,
  setPreferedMode,
  ThemeMode, // eslint-disable-line no-unused-vars
} from 'hooks/ThemeContext' // why in the world can't eslint see that ThemeMode is used a type ?
import { theme } from 'styles'

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

const Layout = ({ children }: LayoutProps) => {
  const [mode, setMode] = useState<ThemeMode>(null)

  useEffect(() => {
    setMode(getPreferedMode())
  }, [])

  const toggleMode = () =>
    setMode(prevMode => {
      const newMode = getNextMode(prevMode)
      setPreferedMode(newMode)
      return newMode
    })

  return (
    <ThemeModeProvider mode={mode} setMode={toggleMode}>
      <StyledProvider dark={isDark(mode)} theme={theme}>
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
  children: any
}

export default Layout
