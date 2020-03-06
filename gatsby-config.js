module.exports = {
  siteMetadata: {
    title: `No Code, No Bug`,
    description: `No Code, No Bug. A blog with tech articles that might be helpful. Or not! A blog by Alexandre Le Lain.`,
    author: `Alexandre Le Lain @a_lelain`,
    github: 'https://github.com/alexandre-lelain',
    twitter_user: '@a_lelain',
    twitter: 'https://mobile.twitter.com/a_lelain',
    attineos: 'https://www.attineos.com/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
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
        plugins: ['gatsby-remark-reading-time', 'gatsby-plugin-slug'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `No Code, No Bug`,
        start_url: `/`,
        background_color: `#1976d2`,
        theme_color: `#1976d2`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
}
