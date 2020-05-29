import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';
import SEO from '../components/seo';
import Hero from '../components/organisms/Hero';

const IndexPage = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO title="Home" />
      <Hero />
      <h5>Hello</h5>
      <section id="section">hello</section>
    </ThemeProvider>
  </>
);

export default IndexPage;
