import React, { useEffect, useMemo } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BackToTop, StyledProvider } from 'components-extra'
import { ThemeModeProvider, useThemeMode } from 'react-theme-mode'
import { Container } from '@material-ui/core'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'

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
      font-family: Roboto;
    }
  `};
`

const LayoutContent: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [mode] = useThemeMode()
  const dark = mode === 'dark'

  const theme = useMemo(() => (dark ? darkTheme : lightTheme), [dark])

  return (
    <StyledProvider dark={dark} theme={theme}>
      <GlobalStyle />
      <StyledContainer maxWidth="sm">
        {children}
        <BackToTop />
      </StyledContainer>
    </StyledProvider>
  )
}

const Layout: React.FC<LayoutProps> = (props) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <ThemeModeProvider defaultTheme="light" isSSR>
      <LayoutContent {...props} />
    </ThemeModeProvider>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
