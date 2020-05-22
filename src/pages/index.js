import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';
import SEO from '../components/seo';
import Heading from '../components/Heading';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO title="Home" />
    <Heading>Hello from Gatsby</Heading>
    <h5>Hello</h5>
  </ThemeProvider>
);

export default IndexPage;
