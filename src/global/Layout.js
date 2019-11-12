import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/Header/Header";
import styled, { ThemeProvider } from "styled-components";
import themes from "../assets/themes";
import GlobalStyle from "./GlobalStyle";
import { ThemeContext } from "../components/ThemeContext";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={themes}>
      <ThemeContext.Consumer>
        {theme => (
          <div>
            <GlobalStyle />
            <Header theme={theme} themes={themes} />
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
