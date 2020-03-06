import styled from 'styled-components'
import { Link } from '@material-ui/core'

export default styled(Link).attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  ${({ theme: { palette } }) => `
    color: ${palette.links};
    text-decoration: none;
    &:visited {
      color: ${palette.links};
      text-decoration: none;
    }
  `}
`
