import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Logo from "../Logo/Logo";
// import MainMenu from "../Logo/Logo";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.color.lightGray};
  padding: 20px 30px;
  height: 120px;
  ${props =>
    props.colormode == "dark" &&
    css`
      background: ${props => props.theme.color.black};
    `}
`;

const Header = props => {
  const { data } = props;
  return (
    <HeaderStyled colormode="light">
      <Logo data={data}></Logo>
      {/* <MainMenu data={data}></MainMenu> */}
    </HeaderStyled>
  );
};

Header.propTypes = {
  light: PropTypes.bool
};

export default Header;
