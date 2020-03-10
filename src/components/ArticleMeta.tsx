import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

import { useThemeMode } from 'hooks/ThemeContext'

const Meta = styled(Typography)`
  ${({ small, isDark, theme: { palette } }) => `
    color: ${isDark ? palette.secondary.light : palette.secondary.dark};
    font-size: ${small ? '90%' : '100%'};
  `}
`

const ArticleMeta = ({ date, small = false, timeToRead, ...rest }: ArticleMetaProps) => {
  const [, , isDark] = useThemeMode()
  return (
    <Meta isDark={isDark} small={small} {...rest}>
      {date} - <b>{timeToRead} min read</b>
    </Meta>
  )
}

interface ArticleMetaProps {
  date: string
  small?: boolean
  timeToRead: string
  rest?: object
}

export default styled(ArticleMeta)``
