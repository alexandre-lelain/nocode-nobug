import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BackToTop, StyledProvider } from 'components-extra'
import { Container } from '@material-ui/core'

// eslint-disable-next-line no-unused-vars
import {
  ThemeModeProvider,
  isDark,
  getNextMode,
  getPreferedMode,
  setPreferedMode,
  ThemeMode,
  DEFAULT_MODE,
} from 'hooks/ThemeContext' //why in the world can't eslint see that ThemeMode is used a type ?
import { theme } from 'styles'

const StyledContainer = styled(Container)`
  padding: 48px 24px;
  max-width: 700px;
`

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    html {
      background: ${theme.palette.background.default};
    }
  `};
`

const Layout = ({ children }: LayoutProps) => {
  const [mode, setMode] = useState<ThemeMode>(DEFAULT_MODE)

  const toggleMode = () =>
    setMode(prevMode => {
      const newMode = getNextMode(prevMode)
      setPreferedMode(newMode)
      return newMode
    })

  useEffect(() => {
    setMode(getPreferedMode())
  }, [])

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
