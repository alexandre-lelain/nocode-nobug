import React from 'react'
import styled from 'styled-components'

import Paragraph from './Paragraph'

const StyledLi = styled.li`
  ${({ theme: { spacing } }) => `
    margin-bottom: ${spacing(1)}px;
  `}
`

const ListItemContent = styled(Paragraph).attrs(() => ({
  component: 'span',
}))``

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ListItem: React.FC<ListItem> = ({ children, ordered, tight, ...rest }: ListItem) => {
  return (
    <StyledLi {...rest}>
      <ListItemContent>{children}</ListItemContent>
    </StyledLi>
  )
}

interface ListItem {
  children: React.ReactNode
  ordered?: boolean
  tight?: boolean
}

export default ListItem
