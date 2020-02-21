import React from 'react'

import Footer from 'components/Footer'

let myVar: string = '42'

const IndexPage = () => {
  return (
    <div>
      <h1>Hello, World! {myVar}</h1>
      <Footer />
    </div>
  )
}
export default IndexPage
