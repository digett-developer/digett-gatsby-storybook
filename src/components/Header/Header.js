import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import Switch from 'react-switch';
import sunIcon from '../../assets/images/sun.svg';
import moonIcon from '../../assets/images/moon.svg';
import Menu from '../Menu/Menu';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 30px;
  height: 120px;
`;

const Header = ({ theme, themes }) => (
  <HeaderStyled theme={theme} themes={themes}>
    <Logo theme={theme} themes={themes} />
    <Menu theme={theme} themes={themes}></Menu>
    <Switch
      onChange={() => theme.updateTheme(theme.name === 'light' ? 'dark' : 'light')}
      checked={theme.name === 'dark'}
      onColor="#222"
      offColor="#333"
      checkedIcon={<img src={moonIcon} alt="moon icon" />}
      uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
      boxShadow="0 0 2px 3px #B38CD9"
      activeBoxShadow="0 0 2px 3px #dfb3e6"
    />
  </HeaderStyled>
);

// Header.propTypes = {
//   light: PropTypes.bool
// };

export default Header;
