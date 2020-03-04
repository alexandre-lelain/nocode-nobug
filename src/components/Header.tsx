import React, { useMemo } from 'react'
import { Switch, Typography } from '@material-ui/core'
import styled from 'styled-components'

import { useThemeMode, isDark } from 'hooks/ThemeContext'

import { ResetLink } from 'styles'
import { Day, Night } from 'icons'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ThemeSwitchContainer = styled.div`
  display: flex;
  align-items: center;
`

export default () => {
  const [mode, setMode] = useThemeMode()
  const isDarkMode = useMemo(() => isDark(mode), [mode])
  return (
    <StyledHeader>
      <Typography color="textPrimary" variant="h3" component="h2">
        <ResetLink to="/">No Code, No Bug</ResetLink>
      </Typography>
      <ThemeSwitchContainer>
        <Day color={isDarkMode ? 'disabled' : 'primary'} />
        <Switch checked={isDarkMode} value={mode} onChange={setMode} color="secondary" />
        <Night color={isDarkMode ? 'action' : 'disabled'} />
      </ThemeSwitchContainer>
    </StyledHeader>
  )
}
