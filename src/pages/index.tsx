import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

let myVar: string = '42'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="No Code, No Bug" />
      <h1>Hello, World! {myVar}</h1>
    </Layout>
  )
}
export default IndexPage
