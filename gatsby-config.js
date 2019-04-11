module.exports = {
  siteMetadata: {
    title: 'Rory Green',
    author: 'Rory Green',
    description:
      'Rory Green is a digital tinkerer living in Sydney, Australia.',
    siteUrl: 'https://rory.green',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-minimal-portfolio-blog`,
        short_name: `gmpb`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#4973c2`,
        display: `minimal-ui`,
        icon: `src/assets/sparkles.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-markdown-pages',
      options: {
         path: './src/pages/work', // Path to markdown files to be converted to pages
         templatePath: './src/components', // Path to page templates
         template: 'layout', // Default template to use if none is supplied
      }
   },
  ],
}
