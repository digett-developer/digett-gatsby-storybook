module.exports = {
  siteMetadata: {
    name: 'Awesome Gatsby Starter',
    basepath: 'https://awesome-gatsby-starter.netlify.com',
    description: 'A starter for GatsbyJS with a preconfigured MDX, Storybook and ESLint environment',
    keywords: ['gatsby', 'gatsbyjs', 'gatsby starter', 'github'],
    type: 'website',
    image: 'https://awesome-gatsby-starter.netlify.com/ok.png',
    menu: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: '/about',
        submenu: [
          {
            name: 'Submenu Item 1',
            link: '/submenuitem1',
          },
          {
            name: 'Submenu Item 2',
            link: '/submenuitem2',
          },
        ],
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'iWJ8FY7unOE7sPVb8ySNJQtt',
        homeSlug: 'home',
        version: 'draft',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/logos/icon.png', // This path is relative to the root of the site
      },
    },

    // The following are all optional plugins that you may find useful.
    // If you choose not to use them, consider removing them from your package.json!

    // This plugin enables Progressive Web App + Offline functionality
    // https://gatsby.app/offline
    // 'gatsby-plugin-offline',

    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //     head: false,
    //     anonymize: false,
    //     respectDNT: false,
    //   },
    // },

    // (optional) Enable the following for Google tag manager
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'YOUR_GOOGLE_TAGMANAGER_ID',
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },

    // (optional) Enable the following for generation of an XML sitemap
    // https://www.gatsbyjs.org/packages/gatsby-plugin-advanced-sitemap/
    // 'gatsby-plugin-advanced-sitemap',
  ],
};
