import React from 'react'
import { get, map } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const md = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                spoiler
                title
                date
              }
              id
              timeToRead
            }
          }
        }
      }
    `
  )
  const posts = get(md, 'allMarkdownRemark.edges')

  return map(posts, ({ node }) => {
    const { date, title, spoiler } = get(node, 'frontmatter', {})
    const { id, timeToRead } = node
    return (
      <article key={id}>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{spoiler}</p>
        <p>{timeToRead} min</p>
      </article>
    )
  })
}
