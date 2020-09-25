import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Grid, Switch, Typography } from '@material-ui/core'
import { useThemeMode } from 'react-theme-mode'

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

const DARK = 'dark'
const LIGHT = 'light'

const Header: React.FC<HeaderProps> = ({ isArticle = false }: HeaderProps) => {
  const [mode, setMode] = useThemeMode()
  const [showSwitch, setShowSwitch] = useState(false)
  const isDark = mode === DARK

  useEffect(() => {
    /**
     * Not too proud of this tbh. But if I want to avoid the clipping effect
     * on the switch due to SRR + css-in-js, I need to make sure the
     * switch will only render once mounted, when we have the final theme-mode.
     * Note for later: make an article about that.
     */
    setShowSwitch(true)
  }, [])

  const onChangeMode = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const previousMode = e.target.value
    setMode(previousMode === DARK ? LIGHT : DARK)
  }

  return (
    <StyledHeader>
      <Title isArticle={isArticle} isDark={isDark}>
        <ResetLink to="/">No Code, No Bug</ResetLink>
      </Title>
      {showSwitch && (
        <ThemeModeContainer>
          <Grid container item>
            <Day color={isDark ? 'disabled' : 'primary'} />
          </Grid>
          <Grid item>
            <Switch
              checked={isDark}
              value={mode}
              onChange={onChangeMode}
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
