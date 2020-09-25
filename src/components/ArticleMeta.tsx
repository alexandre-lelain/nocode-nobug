import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { useThemeMode } from 'react-theme-mode'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Meta = styled(({ small, isDark, ...rest }) => <Typography {...rest} />)`
  ${({ small, isDark, theme: { palette } }) => `
    color: ${isDark ? palette.secondary.light : palette.secondary.main};
    font-size: ${small ? '90%' : '100%'};
  `}
`

const ArticleMeta = ({ date, small = false, timeToRead, ...rest }: ArticleMetaProps) => {
  const [mode] = useThemeMode()
  return (
    <Meta isDark={mode === 'dark'} small={small} {...rest}>
      {date} - <b>{timeToRead} min read</b>
    </Meta>
  )
}

interface ArticleMetaProps {
  date: string
  small?: boolean
  timeToRead: string
}

export default styled(ArticleMeta)``
