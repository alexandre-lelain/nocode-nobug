import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { find, includes } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

import Paragraph from './Paragraph'

const Container = styled.div`
  text-align: center;
  ${({ theme }) => `
    margin: ${theme.spacing(4)}px auto;
  `}
`

const StyledImage = styled(Img)`
  margin: 0 auto;
`

const Caption = styled(Paragraph).attrs(() => ({
  component: 'legend',
  variant: 'caption',
}))`
  margin-top: 8px;
  font-style: italic;
`

const getGatsbyFluidFromFileName = (nodes: [], src: string): Fluid => {
  const node = find(nodes, (node: ImageNode) => includes(src, node.fluid.originalName))
  return node ? node.fluid : {}
}

const Image = ({ alt, src, ...rest }: ImageProps) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(quality: 100) {
            originalName
            presentationHeight
            presentationWidth
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { nodes = [] } = allImageSharp
  const fluid = getGatsbyFluidFromFileName(nodes, src)
  const { presentationHeight, presentationWidth } = fluid

  return (
    <Container>
      <StyledImage
        fluid={fluid}
        {...rest}
        style={{ maxWidth: presentationWidth, maxHeight: presentationHeight }}
      />
      <Caption>{alt}</Caption>
    </Container>
  )
}

interface ImageNode {
  fluid: Fluid
}

interface Fluid {
  aspectRatio?: string
  base64?: string
  originalName?: string
  presentationHeight?: string
  presentationWidth?: string
  sizes?: string
  src?: string
  srcSet?: string
  srcSetWebp?: string
  srcWebp?: string
}

interface ImageProps {
  alt?: string
  src: string
  rest?: object
}

export default Image
