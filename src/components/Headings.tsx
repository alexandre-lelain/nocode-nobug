import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Children from 'react-children-utilities'

import slugify from 'utils/slugify'
import { ResetLink } from 'styles'

import Anchor from './Anchor'
import Paragraph from './Paragraph'

const commonStyle = css`
  word-break: break-word;
  font-weight: bold;
`

const Header1 = styled(Paragraph).attrs(() => ({
  variant: 'h3',
  component: 'h1',
}))`
  ${commonStyle};
`

const Header3 = styled(Paragraph).attrs(() => ({
  variant: 'h5',
  component: 'h3',
}))`
  display: inline-block;
  ${commonStyle};
  ${({ theme: { spacing } }) => `
    margin: ${spacing(3)}px 0;
  `}
`

const Header4 = styled(Paragraph).attrs(() => ({
  variant: 'h6',
  component: 'h4',
}))`
  display: inline-block;
  ${commonStyle};
  ${({ theme: { spacing } }) => `
    margin: ${spacing(2)}px 0;
  `}
`

const Header2Link = styled(ResetLink)`
  cursor: text;
  ${({ theme: { spacing } }) => `
    margin: ${spacing(3)}px 0;
  `}
`

const StyledHeader2 = styled(Paragraph).attrs(() => ({
  component: 'h2',
  variant: 'h4',
}))`
  ${commonStyle};
`

const Header2 = ({ children, id }: Header2Props) => {
  const [showAnchor, setShowAnchor] = useState(false)
  return (
    <StyledHeader2>
      <Header2Link
        id={id}
        anchor
        href={`#${id}`}
        onMouseOver={() => setShowAnchor(true)}
        onMouseLeave={() => setShowAnchor(false)}
      >
        <Anchor show={showAnchor} />
        {children}
      </Header2Link>
    </StyledHeader2>
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
    case 4:
      return <Header4 {...rest}>{children}</Header4>
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
