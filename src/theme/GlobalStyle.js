import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth; 
    overflow-x: hidden;
  }
  
  body {
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.colors.grayishBlue};
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
