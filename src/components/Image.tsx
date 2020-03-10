import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { find, includes } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

const StyledImage = styled(Img)`
  max-width: 500px;
  margin: 64px auto;
`

const getGatsbyFluidFromFileName = (nodes: [], src: string): Fluid => {
  const node = find(nodes, (node: ImageNode) => includes(src, node.fluid.originalName))
  return node ? node.fluid : {}
}

const Image = ({ src, ...rest }: ImageProps) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid {
            originalName
            srcWebp
            srcSet
            src
            sizes
            presentationHeight
            presentationWidth
            base64
            aspectRatio
          }
        }
      }
    }
  `)
  const { nodes = [] } = allImageSharp
  const fluid = getGatsbyFluidFromFileName(nodes, src)

  return <StyledImage fluid={fluid} {...rest} />
}

interface ImageNode {
  fluid: Fluid
}

interface Fluid {
  originalName?: string
  srcWebp?: string
  srcSet?: string
  src?: string
  sizes?: string
  presentationHeight?: string
  presentationWidth?: string
  base64?: string
  aspectRatio?: string
}

interface ImageProps {
  src: string
  rest?: object
}

export default Image
