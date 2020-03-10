import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const linkStyle = css`
  color: inherit;
  display: inline-block;
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
  ${linkStyle};
`

const ResetLink = ({ anchor = false, ...rest }: ResetLinkProps) => {
  return anchor ? <StyledAnchor {...rest} /> : <StyledLink {...rest} />
}

interface ResetLinkProps {
  anchor?: boolean
  children: any
  rest?: object
  to?: string
}

export default ResetLink
