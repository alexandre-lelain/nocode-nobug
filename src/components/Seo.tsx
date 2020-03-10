import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  keywords,
  slug = '',
}: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            image
          }
        }
      }
    `
  )

  const { author, image, title: metaTitle, description: metaDescription, url } = site.siteMetadata
  const pageTitle = title || metaTitle
  const pageTitleTemplate = title ? `%s | ${metaTitle}` : `%s`
  const pageDescription = description || metaDescription
  const pageUrl = `${url}${slug}`

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
          name: `author`,
          content: author,
        },
        {
          name: `application-name`,
          content: metaTitle,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:url`,
          content: pageUrl,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:site_name`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: pageDescription,
        },
        {
          property: `og:type`,
          content: `website.blog`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: pageDescription,
        },
        {
          name: `twitter:url`,
          content: pageUrl,
        },
        {
          name: `twitter:site`,
          content: author,
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
  keywords?: string
  lang?: string
  meta?: any[]
  slug?: string
  title?: string
}

export default SEO
