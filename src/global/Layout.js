import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/Header/Header";
import styled, { ThemeProvider } from "styled-components";
import theme from "../assets/theme.js";
import GlobalStyle from "./GlobalStyle";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <div>
          {console.log(theme)}
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="default"
            />
          </Helmet>
          <GlobalStyle />
          <Header />
          <>{children}</>
        </div>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
