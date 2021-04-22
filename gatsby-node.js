const path = require('path')
const get = require('lodash/get')

const articlesQuery = `
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            img
          }
        }
      }
    }
  }
`

const createIndexPage = ({ createPage }) => {
  createPage({
    path: '/',
    component: path.resolve('./src/templates/blog-index.tsx'),
  })
}

const createArticlesPages = (graphql, { createPage }) => {
  return graphql(articlesQuery).then((result) => {
    const { errors, data } = result
    if (errors) {
      throw errors
    }
    const posts = get(data, 'allMarkdownRemark.edges', [])
    posts.forEach(({ node }) => {
      const { img, slug } = get(node, 'frontmatter', {})
      createPage({
        path: `${slug}/`,
        component: path.resolve('./src/templates/blog-article.tsx'),
        context: { slug, img },
      })
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  createIndexPage(actions)
  return createArticlesPages(graphql, actions)
}
