import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Children from 'react-children-utilities'

import { slugify } from 'js-extra'
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

const StyledHeader2 = styled(Paragraph).attrs(() => ({
  component: 'h2',
  variant: 'h4',
}))`
  display: inline-block;
  ${commonStyle};
  ${({ theme: { spacing } }) => `
    margin: ${spacing(4)}px 0;
  `}
`

const StyledHeader3 = styled(Paragraph).attrs(() => ({
  variant: 'h5',
  component: 'h3',
}))`
  display: inline-block;
  ${commonStyle};
  ${({ theme: { spacing } }) => `
    margin: ${spacing(3)}px 0;
  `}
`

const AnchorHeader: React.FC<AnchorHeaderProps> = ({ children, id }: AnchorHeaderProps) => {
  const [showAnchor, setShowAnchor] = useState(false)
  return (
    <ResetLink
      anchor
      href={`#${id}`}
      onMouseOver={() => setShowAnchor(true)}
      onMouseLeave={() => setShowAnchor(false)}
    >
      <Anchor show={showAnchor} />
      {children}
    </ResetLink>
  )
}

const Header3: React.FC<AnchorHeaderProps> = ({ id, ...rest }: AnchorHeaderProps) => {
  return (
    <StyledHeader3 id={id}>
      <AnchorHeader id={id} {...rest} />
    </StyledHeader3>
  )
}

const Header2: React.FC<AnchorHeaderProps> = ({ id, ...rest }: AnchorHeaderProps) => {
  return (
    <StyledHeader2 id={id}>
      <AnchorHeader id={id} {...rest} />
    </StyledHeader2>
  )
}

const Heading: React.FC<HeadingProps> = ({ level, children, ...rest }: HeadingProps) => {
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
      return (
        <Header3 {...rest} id={id}>
          {children}
        </Header3>
      )
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
  children: React.ReactNode
}

interface AnchorHeaderProps {
  id: string
  children?: React.ReactNode
}

export { Heading, Header1, Header2 }
