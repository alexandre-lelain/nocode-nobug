const path = require('path')
require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `No Code, No Bug`,
    description: `No Code, No Bug. A blog with tech articles that might be helpful. Or not! A blog by Alexandre Le Lain.`,
    author: `Alexandre Le Lain`,
    siteUrl: 'https://nocode-nobug.com',
    image: 'https://nocode-nobug.com/icons/icon-512x512.png',
    github: 'https://github.com/alexandre-lelain',
    twitter_user: '@a_lelain',
    twitter: 'https://mobile.twitter.com/a_lelain',
    attineos: 'https://www.attineos.com/',
    linkedin: 'https://linkedin.com/in/alexandre-lelain',
    google: process.env.GOOGLE || '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: `${__dirname}/src/components`,
          images: `${__dirname}/src/images`,
          templates: `${__dirname}/src/templates`,
          styles: `${__dirname}/src/styles`,
          utils: `${__dirname}/src/utils`,
          hooks: `${__dirname}/src/hooks`,
          icons: `${__dirname}/src/icons`,
          lodash: `${__dirname}/node_modules/lodash-es`,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-reading-time',
          'gatsby-plugin-slug',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `No Code, No Bug`,
        short_name: `No Code, No Bug`,
        start_url: `/`,
        background_color: `#1976d2`,
        theme_color: `#1976d2`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.png',
        icons: [
          {
            src: '/icons/favicon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
}
