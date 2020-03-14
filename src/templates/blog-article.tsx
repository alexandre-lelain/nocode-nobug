import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import {
  ArticleMeta,
  Bio,
  Blockquote,
  CodeBlock,
  Footer,
  Header,
  Header1,
  Heading,
  Image,
  InlineCode,
  Layout,
  Link,
  List,
  ListItem,
  Paragraph,
  RemarkParagraph,
  SEO,
} from 'components'
import { InternalLink } from 'styles'

import getISOString from 'utils/getISOString'

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
  const { markdownRemark = {}, site = {} } = data
  const { timeToRead, rawMarkdownBody } = markdownRemark
  const { date, description, slug, tags, title, updated } = get(markdownRemark, 'frontmatter', {})
  const { author } = get(site, 'siteMetadata', {})

  const stringyfiedTags = tags.join`, `
  const meta = [
    {
      property: `og:type`,
      content: `article`,
    },
    {
      name: 'article:author',
      content: author,
    },
    {
      name: 'article:modified_time',
      content: getISOString(updated),
    },
    {
      name: 'article:published_time',
      content: getISOString(date),
    },
    {
      name: 'article:tag',
      content: stringyfiedTags,
    },
    {
      name: `twitter:label1`,
      content: 'Reading time',
    },
    {
      name: `twitter:label2`,
      content: 'Tags',
    },
    {
      name: `twitter:data1`,
      content: `${timeToRead} min read`,
    },
    {
      name: `twitter:data2`,
      content: stringyfiedTags,
    },
  ]

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        meta={meta}
        slug={slug}
        keywords={stringyfiedTags}
      />
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
              link: Link,
              image: Image,
              listItem: ListItem,
              list: List,
              code: CodeBlock,
            }}
          />
        </StyledArticle>
        <Paragraph>
          <InternalLink secondary to="/">
            ← Back to main page
          </InternalLink>
        </Paragraph>
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
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      rawMarkdownBody
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        description
        slug
        tags
        title
        updated
      }
    }
  }
`
export default BlogArticle
