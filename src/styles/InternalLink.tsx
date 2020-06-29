import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { useThemeMode } from 'hooks/ThemeContext'

const getColor = ({ isDark, secondary, theme: { palette } }) => {
  if (secondary) {
    return css`
      color: ${isDark ? palette.secondary.light : palette.secondary.main};
    `
  }
  return css`
    color: ${palette.links};
  `
}

const linkStyle = css`
  ${getColor};
  display: inline-block;
  text-decoration: none;
  &:visited {
    ${getColor};
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledLink = styled(({ isDark, secondary, to = '/', ...rest }: StyledLinkProps) => (
  <Link to={to} {...rest} />
))`
  ${linkStyle};
`

const StyledAnchor = styled.a`
  ${linkStyle};
`

const InternalLink = ({ anchor = false, secondary = false, ...rest }: InternalLinkProps) => {
  const [, , isDark] = useThemeMode()
  const props = { isDark, secondary, ...rest }
  return anchor ? <StyledAnchor {...props} /> : <StyledLink {...props} />
}

interface StyledLinkProps extends InternalLinkProps {
  isDark: boolean | null
  secondary: boolean
}

interface InternalLinkProps {
  children: React.ReactNode
  anchor?: boolean
  secondary?: boolean
  href?: string
  to?: string
}

export default styled(InternalLink)``
