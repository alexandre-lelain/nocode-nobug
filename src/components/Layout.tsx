import React from 'react'
import PropTypes from 'prop-types'
import { BackToTop, StyledProvider } from 'components-extra'

import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <StyledProvider>
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </StyledProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
