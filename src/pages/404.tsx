import React from 'react'
import styled from 'styled-components'

import { Layout, SEO, Header1, Paragraph } from 'components'
import { InternalLink } from 'styles'

const StyledParagraph = styled(Paragraph)`
  margin-top: 32px;
  margin-bottom: 12px;
`

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header1>NO CODE, NOT FOUND</Header1>
    <StyledParagraph>
      Congratulations, you found a page with <b>no code!</b>... almost ;)
    </StyledParagraph>
    <InternalLink to="/">Back to home page</InternalLink>
  </Layout>
)

export default NotFoundPage
