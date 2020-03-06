import React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Bio, Footer, Header, Layout, SEO, Heading, Paragraph } from 'components'

const BlogArticle = ({ data }: BlogArticleProps) => {
  const { markdownRemark = {} } = data
  const { rawMarkdownBody } = markdownRemark
  const title = get(markdownRemark, 'frontmatter.title', {})

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
      <Bio />
      <Footer />
    </Layout>
  )
}

interface BlogArticleProps {
  data: any
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
