import React from 'react'

import isAnchor from 'utils/isAnchor'
import { ExternalLink, InternalLink } from 'styles'

const Link = ({ href, ...rest }: LinkProps) => {
  const isAnchorLink = isAnchor(href)

  return isAnchorLink ? (
    <InternalLink anchor href={href} {...rest} />
  ) : (
    <ExternalLink href={href} {...rest} />
  )
}

interface LinkProps {
  href: string
  rest?: object
}

export default Link
