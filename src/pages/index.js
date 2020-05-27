import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';
import SEO from '../components/seo';
import Heading from '../components/Heading';
import Hero from '../sections/Hero';

const IndexPage = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO title="Home" />
      <Hero />
      <Heading>Hello from Gatsby</Heading>
      <h5>Hello</h5>
      <section id="section">hello</section>
    </ThemeProvider>
  </>
);

export default IndexPage;
