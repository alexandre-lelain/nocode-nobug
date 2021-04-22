import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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

const StyledImage = styled(GatsbyImage)`
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

const Bio = (props) => {
  const { bio, site } = useStaticQuery(
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
        bio: file(relativePath: { eq: "bio.webp" }) {
          childImageSharp {
            gatsbyImageData(width: 128, placeholder: BLURRED)
          }
        }
      }
    `
  )
  const image = getImage(bio)
  const { github, twitter, twitter_user, attineos } = site.siteMetadata

  return (
    <Container {...props}>
      {image && <StyledImage image={image} alt="Alexandre Le Lain" />}
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
          You can check out my <ExternalLink href={github}>Github</ExternalLink> anytime.
        </Paragraph>
      </TextContainer>
    </Container>
  )
}

export default styled(Bio)``
