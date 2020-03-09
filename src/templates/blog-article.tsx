import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Bio, Footer, Header, Layout, SEO, Heading, Paragraph } from 'components'
import { ResetLink } from 'styles'

const StyledArticle = styled.article`
  margin: 64px 0;
`

const ReturnLink = styled(ResetLink)``

const StyledBio = styled(Bio)`
  margin-top: 24px;
`

const BlogArticle = ({ data }: BlogArticleProps) => {
  const { markdownRemark = {} } = data
  const { rawMarkdownBody } = markdownRemark
  const title = get(markdownRemark, 'frontmatter.title', {})

  return (
    <Layout>
      <SEO title={title} />
      <Header isArticle />
      <main>
        <StyledArticle>
          <ReactMarkdown
            source={rawMarkdownBody}
            renderers={{
              heading: Heading,
              paragraph: Paragraph,
            }}
          />
        </StyledArticle>
        <ReturnLink to="/">← Back to main page</ReturnLink>
      </main>
      <StyledBio />
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
