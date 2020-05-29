import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';
import SEO from '../components/seo';
import Hero from '../components/organisms/Hero';
import About from '../components/organisms/About';
import Offer from '../components/organisms/Offer';

const IndexPage = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO title="Home" />
      <Hero />
      <main>
        <About />
        <Offer />
      </main>
      <h5>Hello</h5>
      <section id="section">hello</section>
    </ThemeProvider>
  </>
);

export default IndexPage;
