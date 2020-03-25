import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({
  description = '',
  image,
  keywords,
  lang = 'en',
  meta = [],
  slug = '',
  title,
}: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            google
            image
            siteUrl
            title
          }
        }
      }
    `
  )

  const {
    author,
    description: metaDescription,
    google,
    image: metaImage,
    siteUrl,
    title: metaTitle,
  } = site.siteMetadata
  const pageTitle = title || metaTitle
  const pageTitleTemplate = title ? `%s | ${metaTitle}` : `%s`
  const pageDescription = description || metaDescription
  const pageUrl = `${siteUrl}/${slug}`
  const pageImage = image ? `${siteUrl}${image}` : metaImage

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
          content: `website`,
        },
        {
          property: `og:image`,
          content: pageImage,
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
          content: pageImage,
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
        {
          name: `google-site-verification`,
          content: google,
        },
      ].concat(meta)}
    >
      <link
        rel="stylesheet preconnect"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        media="print"
        // @ts-ignore
        onLoad="this.media='all'"
      />
    </Helmet>
  )
}

interface SEOProps {
  description?: string
  image?: string
  keywords?: string
  lang?: string
  meta?: any[]
  slug?: string
  title?: string
}

export default SEO
