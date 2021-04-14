import React from 'react'
import styled from 'styled-components'
import { FluidObject, GatsbyImage, GatsbyImageFluidProps, getImage } from 'gatsby-plugin-image'
import { find, includes } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

import Paragraph from './Paragraph'

const Container = styled.div`
  text-align: center;
  ${({ theme: { spacing } }) => `
    margin: ${spacing(4)}px auto;
  `}
`

const StyledImage = styled(GatsbyImage)<GatsbyImageFluidProps>`
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

const getGatsbyImagedFromFileName = (nodes: [], src: string): Fluid | Record<string, unknown> => {
  const node = find(nodes, ({ parent }) => {
    return includes(src, parent.name)
  })
  return node ? getImage(node.gatsbyImageData) : {}
}

const Image: React.FC<ImageProps> = ({ alt, src }: ImageProps) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          gatsbyImageData(placeholder: BLURRED)
          parent {
            ... on File {
              id
              name
              relativePath
            }
          }
        }
      }
    }
  `)
  const { nodes = [] } = allImageSharp
  const image = getGatsbyImagedFromFileName(nodes, src)

  return (
    <Container>
      <StyledImage image={image} alt={alt} />
      <Caption>{alt}</Caption>
    </Container>
  )
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
