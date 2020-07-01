import React from 'react'
import styled, { css } from 'styled-components'
import { Grid, Switch, Typography } from '@material-ui/core'

import { useThemeMode } from 'hooks/ThemeContext'

import { ResetLink } from 'styles'
import { Day, Night } from 'icons'

const getTitleColor = ({ isArticle, isDark, theme: { palette } }) => {
  if (isArticle) {
    return css`
      color: ${isDark ? palette.primary.light : palette.primary.main};
    `
  }
  return css`
    color: ${palette.text.primary};
  `
}

const ThemeModeContainer = styled(Grid).attrs(() => ({
  component: 'label',
}))`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Title = styled(({ isArticle, isDark, ...rest }) => <Typography {...rest} />).attrs(
  ({ isArticle }) => ({
    component: 'h2',
    variant: isArticle ? 'h5' : 'h3',
  })
)`
  font-weight: bold;
  margin-right: 12px;
  ${getTitleColor};
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
  margin-top: -20px;
  min-height: 58px;

  ${ThemeModeContainer}, ${Title} {
    margin-top: 20px;
  }
`

const Header: React.FC<HeaderProps> = ({ isArticle = false }: HeaderProps) => {
  const [mode, setMode, isDark] = useThemeMode()

  return (
    <StyledHeader>
      <Title isArticle={isArticle} isDark={isDark}>
        <ResetLink to="/">No Code, No Bug</ResetLink>
      </Title>
      {isDark !== null && (
        <ThemeModeContainer>
          <Grid container item>
            <Day color={isDark ? 'disabled' : 'primary'} />
          </Grid>
          <Grid item>
            <Switch
              checked={isDark}
              value={mode}
              onChange={setMode}
              color="secondary"
              inputProps={{ 'aria-label': 'toggle theme to light/dark mode' }}
            />
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
