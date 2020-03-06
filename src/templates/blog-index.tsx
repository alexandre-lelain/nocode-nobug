import React from 'react'
import PropTypes from 'prop-types'
import { get, map } from 'lodash'
import { graphql, Link } from 'gatsby'

import { Footer, Header, Layout, SEO, Paragraph } from 'components'
import { ExternalLink } from 'styles'

const BlogIndex = ({ data }) => {
  const posts = get(data, 'allMarkdownRemark.edges')
  const siteMetadata = get(data, 'site.siteMetadata')

  return (
    <Layout>
      <SEO />
      <Header />
      <main>
        <Paragraph>
          A blog with tech articles that might be helpful. Or not! Through my journey as a Software
          Engineer I come across concepts and fancy technologies I often do not understand. When I
          do, and wish it was explained in a certain way, I write a post about it.
        </Paragraph>
        <br />
        <Paragraph>
          Brought to you by{' '}
          <ExternalLink href={siteMetadata.github}>Alexandre Le Lain</ExternalLink>.
        </Paragraph>
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

BlogIndex.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        github
      }
    }
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
