import React from 'react'
import styled from 'styled-components'
import { get, map } from 'lodash'
import { graphql } from 'gatsby'

import { Bio, Footer, Header, Layout, SEO, Paragraph, ArticlePreview } from 'components'

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 32px;
`

const PreviewsContainer = styled.div`
  margin: 64px 0;
`

const BlogIndex = ({ data }: BlogIndexProps) => {
  const posts = get(data, 'allMarkdownRemark.edges')

  return (
    <Layout>
      <SEO />
      <Header />
      <main>
        <StyledParagraph>
          A blog with tech articles that might be helpful. Or not! Through my journey as a Software
          Engineer I come across concepts and fancy technologies I often do not understand. When I
          do, and wish it was explained in a certain way, I write a post about it.
        </StyledParagraph>
        <Bio />
        <PreviewsContainer>
          {map(posts, ({ node }) => (
            <ArticlePreview node={node} />
          ))}
        </PreviewsContainer>
      </main>
      <Footer />
    </Layout>
  )
}

interface BlogIndexProps {
  data: any
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            spoiler
            tags
            title
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
          id
          timeToRead
        }
      }
    }
  }
`

export default BlogIndex
