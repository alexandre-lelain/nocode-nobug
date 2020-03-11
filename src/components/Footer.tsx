import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

import { Github, LinkedIn, Rss, Twitter } from 'icons'
import { ExternalLink } from 'styles'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.footer`
  margin-top: 64px;
`

const InnerContainer = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 1.5em;
    height: 1.5em;
  }
`

const LinkSeparator = styled(Typography).attrs(() => ({
  color: 'textPrimary',
}))`
  margin: 0 12px;
`

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
          twitter
          linkedin
        }
      }
    }
  `)

  const { github, twitter, linkedin } = site.siteMetadata

  return (
    <Container>
      <hr />
      <InnerContainer>
        <ExternalLink aria-label="Github" title="Github" href={github}>
          <Github />
        </ExternalLink>
        <LinkSeparator>-</LinkSeparator>
        <ExternalLink aria-label="Twitter" title="Twitter" href={twitter}>
          <Twitter />
        </ExternalLink>
        <LinkSeparator>-</LinkSeparator>
        <ExternalLink aria-label="LinkedIn" title="Twitter" href={linkedin}>
          <LinkedIn />
        </ExternalLink>
        <LinkSeparator>-</LinkSeparator>
        <ExternalLink aria-label="rss-feed" title="RSS feed" href="/rss.xml">
          <Rss />
        </ExternalLink>
      </InnerContainer>
    </Container>
  )
}

export default Footer
