import React from 'react'
import styled from 'styled-components'
import Img, { FluidObject, GatsbyImageFluidProps } from 'gatsby-image'
import { find, includes } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

import Paragraph from './Paragraph'

const Container = styled.div`
  text-align: center;
  ${({ theme: { spacing } }) => `
    margin: ${spacing(4)}px auto;
  `}
`

const StyledImage = styled(Img)<GatsbyImageFluidProps>`
  margin: 0 auto;
  ${({ theme: { shape } }) => `
    border-radius: ${shape.borderRadius}px;
  `}
`

const Caption = styled(Paragraph).attrs(() => ({
  component: 'legend',
  variant: 'caption',
}))`
  margin-top: 8px;
  font-style: italic;
`

const getGatsbyFluidFromFileName = (nodes: [], src: string): Fluid | Record<string, unknown> => {
  const node = find(nodes, (node: ImageNode) => includes(src, node.fluid.originalName))
  return node ? node.fluid : {}
}

const Image: React.FC<ImageProps> = ({ alt, src, ...rest }: ImageProps) => {
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
        fluid={fluid as FluidObject}
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

interface Fluid extends FluidObject {
  presentationHeight?: string
  presentationWidth?: string
  originalName?: string
}

interface ImageProps {
  alt?: string
  src: string
}

export default Image
