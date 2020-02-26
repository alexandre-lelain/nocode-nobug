import React from 'react'
import PropTypes from 'prop-types'
import { get, map } from 'lodash'
import { graphql, Link } from 'gatsby'

import { Layout, SEO } from 'components'

const BlogIndex = ({ data }) => {
  const posts = get(data, 'allMarkdownRemark.edges')
  return (
    <Layout>
      <SEO />
      <h1>Hello World!</h1>
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
    </Layout>
  )
}

BlogIndex.propTypes = {
  data: PropTypes.object,
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
