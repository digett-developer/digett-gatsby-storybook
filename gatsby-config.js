module.exports = {
  siteMetadata: {
    title: "Gatsby Storybook Starter",
    menu: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "About",
        link: "/about",
        submenu: [
          {
            name: "Submenu Item 1",
            link: "/submenuitem1"
          },
          {
            name: "Submenu Item 2",
            link: "/submenuitem2"
          }
        ]
      },
      {
        name: "Contact",
        link: "/contact"
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Storybook Starter",
        short_name: "Gatsby Storybook Starter",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#744C9E",
        display: "standalone",
        icon: "src/assets/logos/icon.png"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images"
      }
    },
    "gatsby-plugin-root-import",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components"
  ]
};
