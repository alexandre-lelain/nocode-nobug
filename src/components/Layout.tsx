import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BackToTop, StyledProvider } from 'components-extra'
import { Container } from '@material-ui/core'

import Footer from './Footer'
import Header from './Header'

const StyledContainer = styled(Container)`
  padding: 48px 24px;
`

const Layout = ({ children }) => {
  return (
    <StyledProvider>
      <StyledContainer maxWidth="sm">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </StyledContainer>
    </StyledProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
