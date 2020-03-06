import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Footer, Header, Layout, SEO, Heading, Paragraph } from 'components'

const BlogArticle = ({ data }) => {
  const { markdownRemark = {} } = data
  const { rawMarkdownBody } = markdownRemark
  const { title } = get(markdownRemark, 'frontmatter', {})

  return (
    <Layout>
      <SEO title={title} />
      <Header isArticle />
      <main>
        <article>
          <ReactMarkdown
            source={rawMarkdownBody}
            renderers={{
              heading: Heading,
              paragraph: Paragraph,
            }}
          />
        </article>
      </main>
      <Footer />
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
