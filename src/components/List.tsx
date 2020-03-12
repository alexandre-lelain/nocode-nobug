import styled from 'styled-components'

const List = styled.ul`
  ${({ theme: { palette, spacing } }) => `
    color: ${palette.text.primary};
    margin: ${spacing(4)}px 0;
  `}
`

export default List
