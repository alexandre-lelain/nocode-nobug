import React from 'react'

import { Layout, SEO } from 'components'
import PostsList from 'templates'

let myVar: string = '42'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="No Code, No Bug" />
      <h1>Hello, World! {myVar}</h1>
      <PostsList />
    </Layout>
  )
}
export default IndexPage
