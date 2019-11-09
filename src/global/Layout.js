import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/Header/Header";
import styled, { ThemeProvider } from "styled-components";
import theme from "../assets/theme.js";
import GlobalStyle from "./GlobalStyle";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true
    };
  }
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          {
            siteMetaQuery: site {
              siteMetadata {
                title
              }
            }
            lightLogo: file(relativePath: { eq: "lightlogo.png" }) {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            darkLogo: file(relativePath: { eq: "darklogo.png" }) {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <div>
              <Helmet>
                <title>{data.siteMetaQuery.siteMetadata.title}</title>
                <meta
                  name="apple-mobile-web-app-status-bar-style"
                  content="default"
                />
              </Helmet>
              <GlobalStyle />
              <Header data={data} />
              <>{children}</>
            </div>
          </ThemeProvider>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
