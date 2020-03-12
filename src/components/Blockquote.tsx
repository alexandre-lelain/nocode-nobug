import styled from 'styled-components'

const Blockquote = styled.blockquote`
  padding: 18px;
  margin: 32px 0px;
  font-style: italic;
  opacity: 0.8;
  p {
    margin: 0;
  }
  ${({ theme: { palette, shadows, shape } }) => `
    border-radius: ${shape.borderRadius};
    color: ${palette.text.secondary};
    background-color: ${palette.divider};
    border-left: 4px solid ${palette.text.secondary};
    box-shadow: ${shadows[1]};
  `}
`

export default Blockquote
