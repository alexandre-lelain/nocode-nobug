import React from 'react'
import styled from 'styled-components'
import { get, map } from 'lodash'
import { graphql } from 'gatsby'

import { Bio, Footer, Header, Layout, SEO, Paragraph, ArticlePreview } from 'components'

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 32px;
`

const PreviewsContainer = styled.div`
  margin-top: 64px;
  margin-bottom: 86px;
`

const BlogIndex: React.FC<BlogIndexProps> = ({ data }: BlogIndexProps) => {
  const posts = get(data, 'allMarkdownRemark.edges')
  const meta = [
    {
      name: `twitter:label1`,
      content: 'Made by',
    },
    {
      name: `twitter:label2`,
      content: 'Filed under',
    },
    {
      name: `twitter:data1`,
      content: 'Alexandre Le Lain',
    },
    {
      name: `twitter:data2`,
      content: 'Blog, Tech articles',
    },
  ]

  return (
    <Layout>
      <SEO meta={meta} keywords="Blog, Tech articles, React, FrontEnd" />
      <Header />
      <main>
        <StyledParagraph>
          A blog with tech articles that might be helpful. Or not! Through my journey as a Software
          Engineer I come across obscure concepts and fancy technologies that work in mysterious
          ways. When I lift the veil from them, and wish they were explained in a way that might
          help other developers, I write a post about it.
        </StyledParagraph>
        <Bio />
        <PreviewsContainer>
          {map(posts, ({ node }) => (
            <ArticlePreview key={node.id} node={node} />
          ))}
        </PreviewsContainer>
      </main>
      <Footer />
    </Layout>
  )
}

interface BlogIndexProps {
  data: {
    allMarkdownRemark: {
      edges: Record<string, unknown>[]
    }
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            spoiler
            tags
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
