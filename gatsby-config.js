require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.kendyhnguyen.com`,
    title: `Kendy Nguyen`,
    description: `Kendy Nguyen's Portfolio`,
    author: `@kendynguyen`,
    siteName: `Kendy Nguyen`,
    exampleUrl: `https://github.com/gatsbyjs/gatsby/tree/master/examples/using-typescript`,
  },
  plugins: [
    // `gatsby-plugin-typescript` is automatically included in gatsby
    // You only need to explicitly define it here if you need to configure
    // specific options in it
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //     omitGoogleFont: true,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-anchor-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-advanced-sitemap`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-CLPK5F9Z16", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `pages`,
        engine: `flexsearch`,
        query: `
          query {
              posts: allSanityPost {
                nodes {
                  title
                  _rawBody
                  slug {
                    current
                  }
                  categories{
                    title
                  }
                  description
                  _createdAt(formatString: "MMM D, YYYY")
                  _updatedAt(formatString: "MMM D, YYYY")
                  publishedAt(formatString: "MMM D, YYYY")
                  author {
                    name
                  }
                }
              }
            }
          `,
        ref: `slug`,
        index: [`title`, `description`, `text`],
        store: [
          `title`,
          `slug`,
          `description`,
          `publishedAt`,
          `author`,
          `category`,
          `text`,
        ],
        normalizer: ({ data }) =>
          data.posts.nodes.map((post) => ({
            title: post.title,
            text: post._rawBody,
            slug: post.slug.current,
            description: post.description,
            publishedAt: post.publishedAt,
            author: post.author.name,
            category: post.categories[0].title,
          })),
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/favicon-diamond.svg`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/static/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/static/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/static/safari-pinned-tab.svg`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
        name: `Kendy Nguyen's Portfolio`,
        short_name: `Kendy Nguyen`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3B82F6`,
        display: `standalone`,
        cache_busting_mode: "none",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/static*"],
        },
      },
    },
  ],
};
