import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const HeaderTitleStyled = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${props => props.theme.color.white};
`;

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.color.black};
  padding: 20px 30px;
  height: 120px;

  ${props =>
    props.light &&
    css`
      background: ${props => props.theme.color.lightGray};

      ${HeaderTitleStyled} {
        color: ${props => props.theme.color.black};
      }
    `}
    @media (max-width:${props => props.theme.mediaQueries.tablet}) {
      background: ${props => props.theme.color.purple};
     }
`;

const Header = props => {
  return (
    <HeaderStyled light={props.light}>
      <HeaderTitleStyled>Digett Gatsby Starter + Storybook</HeaderTitleStyled>
    </HeaderStyled>
  );
};

Header.propTypes = {
  light: PropTypes.bool
};

export default Header;
