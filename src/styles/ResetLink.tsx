import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const linkStyle = css`
  color: inherit;
  text-decoration: none;
  &:visited {
    color: inherit;
    text-decoration: none;
  }
`

const StyledLink = styled(Link)`
  ${linkStyle};
`

const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  ${linkStyle};
  code {
    margin: 0 6px;
  }
`

const ResetLink: React.FC<ResetLinkProps> = ({
  anchor = false,
  to = '',
  ...rest
}: ResetLinkProps) => {
  return anchor ? <StyledAnchor {...rest} /> : <StyledLink to={to} {...rest} />
}

// TODO: extends correctly <a> props, or create two components instead
interface ResetLinkProps {
  id?: string
  onMouseOver?: () => void
  onMouseLeave?: () => void
  href?: string
  anchor?: boolean
  children: React.ReactNode
  to?: string
}

export default ResetLink
