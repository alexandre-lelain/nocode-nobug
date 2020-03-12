import styled from 'styled-components'

const List = styled.ul`
  margin: 32px 0px;
  ${({ theme: { palette } }) => `
    color: ${palette.text.primary};
  `}
`

export default List
