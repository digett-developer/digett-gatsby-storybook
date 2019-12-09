import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// import Logo from "../Logo/Logo";
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

const MenuStyled = styled.header`
  width: calc(100% - 250px);
  padding: 0px 20px;
  .main-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    li {
      margin-left: 40px;
      a {
        font-size: 22px;
        color: ${props => props.themes.color.black};
        ${props =>
          props.theme.name == 'dark' &&
          css`
            color: ${props => props.themes.color.white};
          `};
      }
    }
    &:hover > ul {
      visibility: visible;
      opacity: 1;
      display: block;
      transition-duration: 0.5s;
    }
    ul {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      transition: all 0.5s ease;
      margin-top: 1rem;
      left: -15px;
      top: 0;
      display: none;
      z-index: 999999999999999;
      padding: 15px;
      width: 300px;
      li {
        background-color: rgba(255, 255, 255, 0.8);
        margin: 0px;
        padding: 10px 20px;
        border-bottom: thin solid black;
        a {
          color: black;
          font-size: 14px;
        }
      }
      &:hover {
        visibility: visible;
        opacity: 1;
        display: block;
      }
    }
  }
`;

const Menu = ({ data, theme, themes }) => (
  <MenuStyled theme={theme} themes={themes}>
    <ul className="main-menu">
      {data.site.siteMetadata.menu.map((menuitem, index) => (
        <li key={index}>
          <Link to={menuitem.link}>{menuitem.name}</Link>
          {menuitem.submenu && (
            <ul className="sub-menu">
              {menuitem.submenu.map((submenuitem, index) => (
                <li key={index}>
                  <Link to={submenuitem.link}>{submenuitem.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </MenuStyled>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            menu {
              name
              link
              submenu {
                name
                link
              }
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} {...props} />}
  />
);
