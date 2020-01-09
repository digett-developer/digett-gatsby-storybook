// export const lightTheme = {
//   body: '#E2E2E2',
//   text: '#363537',
//   toggleBorder: '#FFF',
//   gradient: 'linear-gradient(#39598A, #79D7ED)',
// };

// export const darkTheme = {
//   body: '#363537',
//   text: '#FAFAFA',
//   toggleBorder: '#6B8096',
//   gradient: 'linear-gradient(#091236, #1E215D)',
// };
export const theme = {
  light: {
    bg: '#ffffff',
    lightGray: '#3c4856c2',
    text: '#3c4856',
    bg: '#ffffff',
    brandRed: '#da3654',
  },
  dark: {
    bg: '#100818',
    lightGray: '#3c4856c2',
    text: '#ffffff',
    darkGray: '#3c4856',
    brandRed: '#da3654',
  },
  size: {
    inner: '1260px',
  },
  breakpoints: ['812px', '1024px'],
  textStyles: {
    heading1: {
      fontSize: ['32px', '42px', '52px'],
      color: '#000',
      fontWeight: 800,
    },
    textStyle1: {
      fontSize: '16px',
      color: '#000',
      fontWeight: 400,
      lineHeight: '1.4',
    },
    blogExcerpt: {
      fontSize: '16px',
      color: '#000',
      fontWeight: 400,
      lineHeight: '1.4',
    },
  },
  mediaQueries: {
    tablet: '1024px',
    phone: '812px',
  },
};

export default theme;
