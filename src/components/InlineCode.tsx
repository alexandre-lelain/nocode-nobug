import styled from 'styled-components'

const InlineCode = styled.code`
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 90%;
  font-family: Consolas, Roboto;
  ${({ theme: { palette } }) => `
    background-color: ${palette.inlineCode};
    color: ${palette.primary.dark};
  `}
`

export default InlineCode
