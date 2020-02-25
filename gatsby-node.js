const path = require('path')
const get = require('lodash/get')

createPreviewPage = actions => {
  const { createPage } = actions
  const previewPageTemplate = path.resolve('./src/templates/blog-index.tsx')
  createPage({
    path: '/',
    component: previewPageTemplate,
  })
}

createArticlesPages = actions => {}

exports.createPages = ({ graphql, actions }) => {
  createPreviewPage(actions)
  //createArticlesPages(actions)
}
