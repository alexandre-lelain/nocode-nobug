import React from 'react'
import styled from 'styled-components'
import { get, map } from 'lodash'
import { graphql, Link } from 'gatsby'

import { Bio, Footer, Header, Layout, SEO, Paragraph } from 'components'

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 32px;
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
        {map(posts, ({ node }) => {
          const { date, title, spoiler } = get(node, 'frontmatter', {})
          const { slug } = get(node, 'fields', {})
          const { id, timeToRead } = node
          return (
            <article key={id}>
              <h3>
                <Link to={slug}>{title}</Link>
              </h3>
              <p>{date}</p>
              <p>{spoiler}</p>
              <p>{timeToRead} min</p>
            </article>
          )
        })}
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
