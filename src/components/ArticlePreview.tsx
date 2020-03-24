import React from 'react'
import styled from 'styled-components'
import { map } from 'lodash'
import { Typography } from '@material-ui/core'

import { ResetLink } from 'styles'
import { Tag as TagIcon } from 'icons'

import ArticleMeta from './ArticleMeta'
import Paragraph from './Paragraph'

const StyledArticle = styled.article`
  margin-bottom: 64px;
`

const Title = styled(Typography).attrs(() => ({
  component: 'h2',
  variant: 'h4',
}))`
  font-weight: bold;
  display: block;
  ${({ theme: { palette } }) => `
    color: ${palette.links};
  `};
`

const Spoiler = styled(Paragraph)`
  margin-top: 12px;
  margin-bottom: 8px;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 4px;
`

const Tag = styled(Paragraph).attrs(() => ({
  variant: 'body2',
}))`
  margin-left: 8px;
`

const ArticlePreview = ({ node }: ArticlePreviewProps) => {
  const { date, tags, title, spoiler } = node.frontmatter
  const { slug } = node.fields
  const { timeToRead } = node

  return (
    <StyledArticle>
      <Title>
        <ResetLink to={`${slug}/`}>{title}</ResetLink>
      </Title>
      <Spoiler>{spoiler}</Spoiler>
      <ArticleMeta date={date} timeToRead={timeToRead} small />
      <Tags>
        <TagIcon color="action" />
        {map(tags, tag => (
          <Tag key={`tag-${tag}`}>
            <b>#</b>
            {tag}
          </Tag>
        ))}
      </Tags>
    </StyledArticle>
  )
}

interface Frontmatter {
  date: string
  tags: string[]
  title: string
  spoiler: string
}

interface Fields {
  slug: string
}

interface ArticlePreviewProps {
  node: {
    timeToRead: string
    fields: Fields
    frontmatter: Frontmatter
  }
}

export default ArticlePreview
