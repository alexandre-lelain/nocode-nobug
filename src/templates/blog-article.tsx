import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import {
  ArticleMeta,
  Bio,
  Blockquote,
  Footer,
  Header,
  Header1,
  Heading,
  InlineCode,
  Image,
  Layout,
  RemarkParagraph,
  SEO,
} from 'components'
import { InternalLink, ExternalLink } from 'styles'

const StyledArticle = styled.article`
  margin: 64px 0;
`

const StyledBio = styled(Bio)`
  margin-top: 24px;
`

const StyledArticleMeta = styled(ArticleMeta)`
  margin-top: 8px;
`

const StyledSeparator = styled.hr`
  margin-top: 16px;
  margin-bottom: 48px;
`

const BlogArticle = ({ data }: BlogArticleProps) => {
  const { markdownRemark = {} } = data
  const { timeToRead, rawMarkdownBody } = markdownRemark
  const { date, title } = get(markdownRemark, 'frontmatter', {})

  return (
    <Layout>
      <SEO title={title} />
      <Header isArticle />
      <main>
        <StyledArticle>
          <Header1>{title}</Header1>
          <StyledArticleMeta date={date} timeToRead={timeToRead} />
          <StyledSeparator />
          <ReactMarkdown
            source={rawMarkdownBody}
            renderers={{
              heading: Heading,
              paragraph: RemarkParagraph,
              blockquote: Blockquote,
              inlineCode: InlineCode,
              link: ExternalLink,
              image: Image,
            }}
          />
        </StyledArticle>
        <InternalLink secondary to="/">
          ← Back to main page
        </InternalLink>
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
      html
      timeToRead
      rawMarkdownBody
      frontmatter {
        title
        spoiler
        slug
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
export default BlogArticle
