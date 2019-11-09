import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const LogoStyled = styled.div`
  // ${({ theme }) => console.log(theme)};
  width:200px;
  .lightlogo {
    display: none;
  }
  .darklogo {
    display: block;
  }
  ${props =>
    props.colormode == "dark" &&
    css`
      .lightlogo {
        display: block;
      }
      .darklogo {
        display: none;
      }
    `}
`;

const Logo = props => {
  const { data } = props;
  return (
    <LogoStyled colormode="light">
      <Img className="lightlogo" fluid={data.lightLogo.childImageSharp.fluid} />
      <Img className="darklogo" fluid={data.darkLogo.childImageSharp.fluid} />
      {console.log(data.lightLogo.childImageSharp.fluid.src)}
    </LogoStyled>
  );
};

Logo.propTypes = {
  light: PropTypes.bool
};

export default Logo;
