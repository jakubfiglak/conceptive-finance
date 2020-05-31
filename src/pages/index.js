import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';
import SEO from '../components/seo';
import Hero from '../components/organisms/Hero';
import About from '../components/organisms/About';
import Offer from '../components/organisms/Offer';
import Pricing from '../components/organisms/Pricing';
import Contact from '../components/organisms/Contact';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO title="Home" />
    <Hero />
    <main>
      <About />
      <Offer />
      <Pricing />
      <Contact />
    </main>
  </ThemeProvider>
);

export default IndexPage;
