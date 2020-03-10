import React from 'react'
import styled from 'styled-components'

import Paragraph from './Paragraph'

const ListItemContent = styled(Paragraph).attrs(() => ({
  component: 'span',
}))``

// eslint-disable-next-line no-unused-vars
const ListItem = ({ children, ordered, tight, ...rest }: ListItem) => {
  return (
    <li {...rest}>
      <ListItemContent>{children}</ListItemContent>
    </li>
  )
}

interface ListItem {
  children: any
  ordered?: boolean
  tight?: boolean
  rest?: object
}

export default ListItem
