import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Paragraph from './Paragraph'

import { ExternalLink } from 'styles'

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  p:first-child {
    margin-bottom: 12px;
  }
`

const StyledImage = styled(Img)`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-right: 24px;
`

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: -12px;

  ${StyledImage}, ${TextContainer} {
    margin-top: 12px;
  }
`

const Bio = props => {
  const { placeholderImage, site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            github
            attineos
            twitter
            twitter_user
          }
        }
        placeholderImage: file(relativePath: { eq: "bio.webp" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  const { fluid } = placeholderImage.childImageSharp
  const { github, twitter, twitter_user, attineos } = site.siteMetadata

  return (
    <Container {...props}>
      <StyledImage fluid={fluid} />
      <TextContainer>
        <Paragraph>
          <b>
            Alexandre Le Lain &#8249;<ExternalLink href={twitter}>{twitter_user}</ExternalLink>
            &#x203A;
          </b>
        </Paragraph>
        <Paragraph>
          Software Engineer at <ExternalLink href={attineos}>Attineos</ExternalLink>. I write code
          to fix my code.
        </Paragraph>
        <Paragraph>
          You can check out my github <ExternalLink href={github}>here</ExternalLink>.
        </Paragraph>
      </TextContainer>
    </Container>
  )
}

export default styled(Bio)``
