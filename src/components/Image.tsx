import React from 'react'
import styled from 'styled-components'
import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { find, includes } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

import Paragraph from './Paragraph'

const Container = styled.div`
  text-align: center;
  ${({ theme: { spacing } }) => `
    margin: ${spacing(4)}px auto;
  `}
`

const StyledImage = styled(GatsbyImage)`
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

const getGatsbyImagedFromFileName = (
  nodes: IallImageSharp[],
  src: string
): IGatsbyImageData | undefined => {
  const node = find(nodes, ({ parent }) => {
    return includes(src, parent.name)
  })
  return node ? getImage(node.gatsbyImageData) : undefined
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
      {image && <StyledImage image={image} alt={alt} />}
      <Caption>{alt}</Caption>
    </Container>
  )
}

interface IallImageSharp {
  parent: {
    name: string
  }
  gatsbyImageData: IGatsbyImageData
}

interface ImageProps {
  alt: string
  src: string
}

export default Image
