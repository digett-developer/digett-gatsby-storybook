import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const LogoStyled = styled.div`
  width: 200px;
  .lightlogo {
    display: none;
  }
  .darklogo {
    display: block;
  }
  ${props =>
    props.theme.name == "dark" &&
    css`
      .lightlogo {
        display: block;
      }
      .darklogo {
        display: none;
      }
    `}
`;

const Logo = ({ theme, themes }) => (
  <StaticQuery
    query={graphql`
      {
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
      <LogoStyled theme={theme} themes={themes}>
        <Img
          className="lightlogo"
          fluid={data.lightLogo.childImageSharp.fluid}
        />
        <Img className="darklogo" fluid={data.darkLogo.childImageSharp.fluid} />
      </LogoStyled>
    )}
  />
);

// Logo.propTypes = {
//   light: PropTypes.bool
// };

export default Logo;
