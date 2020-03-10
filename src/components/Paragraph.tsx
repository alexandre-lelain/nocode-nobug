import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Paragraph = props => <Typography variant="body1" color="textPrimary" {...props} />

const SpacedParagraph = styled(Paragraph)`
  margin-bottom: 24px;
`

const RemarkParagraph = ({ children, ...rest }) => {
  if (
    children &&
    children[0] &&
    children.length === 1 &&
    children[0].props &&
    children[0].props.src
  ) {
    // rendering media without p wrapper
    return children
  }

  return <SpacedParagraph {...rest}>{children}</SpacedParagraph>
}

export default Paragraph
export { RemarkParagraph, SpacedParagraph }
