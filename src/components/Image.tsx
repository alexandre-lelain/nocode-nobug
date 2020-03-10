import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { find, includes } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

const StyledImage = styled(Img)`
  max-width: 500px;
  margin: 64px auto;
`

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
  const { fluid } = find(nodes, ({ fluid }) => includes(src, fluid.originalName))

  return <StyledImage fluid={fluid} {...rest} />
}

interface ImageProps {
  src: string
  rest?: object
}

export default Image
