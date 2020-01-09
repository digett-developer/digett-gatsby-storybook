import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset-advanced';

export default createGlobalStyle`
  ${reset};
  html{
    background: ${({ themes }) => themes.light.bg};
    color: ${({ themes }) => themes.light.text};
    ${({ theme }) =>
      theme.name == 'dark' &&
      css`
        background: ${({ themes }) => themes.dark.bg};
        color: ${({ themes }) => themes.dark.text};
      `}
  }
  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
  }
  img{
    width:100%;
    height:auto;
  }
`;
