import React from 'react'
import { Link } from 'gatsby'
import { map } from 'lodash'

const ArticlePreview = ({ node }: ArticlePreviewProps) => {
  const { date, tags, title, spoiler } = node.frontmatter
  const { slug } = node.fields
  const { id, timeToRead } = node

  return (
    <article key={id}>
      <h3>
        <Link to={slug}>{title}</Link>
      </h3>
      <p>{date}</p>
      <p>{spoiler}</p>
      <p>{timeToRead} min</p>
      <span>Tags:</span>
      {map(tags, tag => (
        <p key={`tag-${tag}`}>{tag}</p>
      ))}
    </article>
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
    id: string
    timeToRead: string
    fields: Fields
    frontmatter: Frontmatter
  }
}

export default ArticlePreview
