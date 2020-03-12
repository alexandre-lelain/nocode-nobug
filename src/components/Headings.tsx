import React, { useState } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Children from 'react-children-utilities'

import slugify from 'utils/slugify'
import { ResetLink } from 'styles'

import Anchor from './Anchor'
import Paragraph from './Paragraph'

const Header1 = styled(Paragraph).attrs(() => ({
  variant: 'h3',
  component: 'h1',
}))`
  font-weight: bold;
`

const Header3 = styled(Paragraph).attrs(() => ({
  variant: 'h5',
  component: 'h3',
}))`
  font-weight: bold;
  margin-bottom: 38px;
  margin-top: 38px;
`

const Header2Link = styled(ResetLink)`
  margin-top: 38px;
  margin-bottom: 38px;
  cursor: text;
`

const StyledHeader2 = styled(Paragraph).attrs(() => ({
  component: 'h2',
  variant: 'h4',
}))`
  font-weight: bold;
`

const Header2 = ({ children, id }: Header2Props) => {
  const [showAnchor, setShowAnchor] = useState(false)
  return (
    <Header2Link
      id={id}
      anchor
      href={`#${id}`}
      onMouseOver={() => setShowAnchor(true)}
      onMouseLeave={() => setShowAnchor(false)}
    >
      <StyledHeader2>
        <Anchor show={showAnchor} />
        {children}
      </StyledHeader2>
    </Header2Link>
  )
}

const Heading = ({ level, children, ...rest }: HeadingProps) => {
  const text = Children.onlyText(children)
  const id = slugify(text)
  const DefaultHeading = ReactMarkdown.renderers.heading
  switch (level) {
    case 1:
      return <Header1 {...rest}>{children}</Header1>
    case 2:
      return (
        <Header2 {...rest} id={id}>
          {children}
        </Header2>
      )
    case 3:
      return <Header3 {...rest}>{children}</Header3>
    default:
      return (
        <DefaultHeading level={level} {...rest}>
          {children}
        </DefaultHeading>
      )
  }
}

interface HeadingProps {
  level: number
  children: any
  rest?: any
}

interface Header2Props {
  children?: any
  id: string
}

export { Heading, Header1, Header2 }
