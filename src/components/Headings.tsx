import React from 'react'
import ReactMarkdown from 'react-markdown'
import Children from 'react-children-utilities'

import Anchor from './Anchor'
import slugify from 'utils/slugify'

const Header2 = ({ children, id }) => {
  return (
    <h2 id={id}>
      <Anchor id={id} />
      {children}
    </h2>
  )
}

const Heading = ({ level, ...rest }) => {
  const { children } = rest
  const text = Children.onlyText(children)
  const id = slugify(text)
  const DefaultHeading = ReactMarkdown.renderers.heading
  switch (level) {
    case 2:
      return <Header2 {...rest} id={id} />
    default:
      return <DefaultHeading level={level} {...rest} />
  }
}

export { Heading, Header2 }
