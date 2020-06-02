import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';
import SEO from '../components/seo';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Offer from '../components/sections/Offer';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';

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
