import React from 'react'
import styled from 'styled-components'
import { Grid, Switch, Typography } from '@material-ui/core'

import { useThemeMode } from 'hooks/ThemeContext'

import { ResetLink } from 'styles'
import { Day, Night } from 'icons'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`

const ThemeModeContainer = styled(Grid).attrs(() => ({
  component: 'label',
}))`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
  }
`

const Header = ({ isArticle = false }: HeaderProps) => {
  const [mode, setMode, isDark] = useThemeMode()

  const titleVariant = isArticle ? 'h5' : 'h3'

  return (
    <StyledHeader>
      <Typography color={isDark ? 'textPrimary' : 'primary'} variant={titleVariant} component="h2">
        <ResetLink to="/">No Code, No Bug</ResetLink>
      </Typography>
      {isDark !== null && (
        <ThemeModeContainer>
          <Grid container item>
            <Day color={isDark ? 'disabled' : 'primary'} />
          </Grid>
          <Grid item>
            <Switch checked={isDark} value={mode} onChange={setMode} color="secondary" />
          </Grid>
          <Grid container item>
            <Night color={isDark ? 'action' : 'disabled'} />
          </Grid>
        </ThemeModeContainer>
      )}
    </StyledHeader>
  )
}

interface HeaderProps {
  isArticle?: boolean
}

export default Header
