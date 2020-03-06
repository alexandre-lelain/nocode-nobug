import React from 'react'
import ReactMarkdown from 'react-markdown'
import Children from 'react-children-utilities'

import Anchor from './Anchor'
import slugify from 'utils/slugify'

const Header2 = ({ children, id }: Header2Props) => {
  return (
    <h2 id={id}>
      <Anchor id={id} />
      {children}
    </h2>
  )
}

const Heading = ({ level, children, ...rest }: HeadingProps) => {
  const text = Children.onlyText(children)
  const id = slugify(text)
  const DefaultHeading = ReactMarkdown.renderers.heading
  switch (level) {
    case 2:
      return (
        <Header2 {...rest} id={id}>
          {children}
        </Header2>
      )
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

export { Heading, Header2 }
