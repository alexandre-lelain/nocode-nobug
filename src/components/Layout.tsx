import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { BackToTop, StyledProvider } from 'components-extra'
import { Container } from '@material-ui/core'

import { ThemeModeProvider, isDark, getNextMode, getPreferedMode } from 'hooks/ThemeContext'
import { theme } from 'styles'

type ThemeMode = 'dark' | 'light'

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

const Layout = ({ children }) => {
  const preferedMode = getPreferedMode()
  const [mode, setMode] = useState<ThemeMode>(preferedMode)
  const toggleMode = () => setMode(prevMode => getNextMode(prevMode))

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

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
