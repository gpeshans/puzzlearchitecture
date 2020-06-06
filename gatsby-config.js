module.exports = {
  siteMetadata: {
    title: `Puzzle architecture`,
    description: `Puzzle is a collective of young and enthusiastic architects established in 2018. As a team, we have worked on a wide spectrum of projects including exhibitions, interior design, architectural projects, conceptual projects, research, etc. and successfully participated in many competitions. Throughout our work, we try to have a research-oriented approach thus creating more sustainable, outspoken, and creative solutions for all architectural challenges.`,
    author: `@gpeshans`,
    lang: 'en',
    keywords: ['architecture', 'interior design', 'design', 'puzzle', 'planning'],
    siteUrl: 'https://www.puzzlearchitecture.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Courier+Prime:300,400`, `Montserrat:300,400`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`,
        },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/styles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.puzzlearchitecture.com/',
        sitemap: 'https://www.puzzlearchitecture.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: ['/thanks', '/404'] }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/thanks`, `/404`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site }) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl;
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `weekly`,
              priority: 0.7,
            };
          }),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Puzzle architecture`,
        short_name: `puzzle`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/puzzle-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/architecture', `/interior-design`, '/competitions', '/research', `/contact`, '/404'],
      },
    },
  ],
  // used by github pages for the deployment path prefix
  pathPrefix: '/puzzlearchitecture',
};
