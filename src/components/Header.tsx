import React from 'react'
import styled from 'styled-components'
import { Grid, Switch, Typography } from '@material-ui/core'

import { useThemeMode } from 'hooks/ThemeContext'

import { ResetLink } from 'styles'
import { Day, Night } from 'icons'

const ThemeModeContainer = styled(Grid).attrs(() => ({
  component: 'label',
}))`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
  }
`

const Title = styled(Typography).attrs(() => ({
  component: 'h2',
}))``

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
  margin-top: -20px;

  ${ThemeModeContainer}, ${Title} {
    margin-top: 20px;
  }
`

const Header = ({ isArticle = false }: HeaderProps) => {
  const [mode, setMode, isDark] = useThemeMode()

  const titleVariant = isArticle ? 'h5' : 'h3'

  return (
    <StyledHeader>
      <Title color={isDark ? 'textPrimary' : 'primary'} variant={titleVariant}>
        <ResetLink to="/">No Code, No Bug</ResetLink>
      </Title>
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
