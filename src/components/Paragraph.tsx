import React from 'react'
import styled from 'styled-components'
import { Typography, TypographyProps } from '@material-ui/core'

import isChildAnImg from 'utils/isChildAnImg'

const Paragraph: React.FC<TypographyProps> = (props) => (
  <Typography variant="body1" color="textPrimary" {...props} />
)

const SpacedParagraph = styled(Paragraph)`
  word-break: break-word;
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(3)}px;
  `}
`

const RemarkParagraph: React.FC<RemarkParagraphProps> = ({
  children,
  ...rest
}: RemarkParagraphProps) =>
  isChildAnImg(children) ? <>children</> : <SpacedParagraph {...rest}>{children}</SpacedParagraph>

interface RemarkParagraphProps {
  children?: React.ReactNode
}

export default Paragraph
export { RemarkParagraph, SpacedParagraph }
