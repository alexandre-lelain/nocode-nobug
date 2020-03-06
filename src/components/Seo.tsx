import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description = '', lang = 'en', meta = [], title }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const { title: metaTitle, description: metaDescription } = site.siteMetadata
  const pageTitle = title || metaTitle
  const pageTitleTemplate = title ? `%s | ${metaTitle}` : `%s`
  const pageDescription = description || metaDescription

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={pageTitleTemplate}
      meta={[
        {
          name: `description`,
          content: pageDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: pageDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: pageDescription,
        },
      ].concat(meta)}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        media="print"
        onLoad={function(this: HTMLLinkElement) {
          this.media = 'all'
        }}
      />
    </Helmet>
  )
}

interface SEOProps {
  description?: string
  lang?: string
  title?: string
  meta?: any[]
}

export default SEO
