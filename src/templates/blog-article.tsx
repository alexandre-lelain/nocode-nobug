import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Layout, SEO, Heading } from 'components'

const BlogArticle = ({ data }) => {
  const { markdownRemark = {} } = data
  const { rawMarkdownBody } = markdownRemark
  const { title } = get(markdownRemark, 'frontmatter', {})

  return (
    <Layout>
      <SEO title={title} />
      <article>
        <ReactMarkdown
          source={rawMarkdownBody}
          renderers={{
            heading: Heading,
          }}
        />
      </article>
    </Layout>
  )
}

BlogArticle.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      rawMarkdownBody
      frontmatter {
        title
        spoiler
        slug
        date
      }
    }
  }
`
export default BlogArticle
