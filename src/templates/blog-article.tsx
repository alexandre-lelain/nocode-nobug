import React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Layout, SEO } from 'components'

export default ({ data, pageContext }) => {
  const { rawMarkdownBody } = get(data, 'markdownRemark', {})

  return (
    <Layout>
      <SEO />
      <h1>Hello Article!</h1>
      <ReactMarkdown source={rawMarkdownBody} />
    </Layout>
  )
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
