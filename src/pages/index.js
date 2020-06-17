import React from 'react';
import { ThemeProvider } from 'styled-components';
import { graphql } from 'gatsby';
import { shape, number, string } from 'prop-types';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';
import SEO from '../components/seo';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Offer from '../components/sections/Offer';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import Navbar from '../components/organisms/Navbar';

const IndexPage = ({ data }) => {
  const image = data.file.childImageSharp.resize;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO image={image} title="Conceptive Finance" />
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <About />
        <Offer />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "hero_gradient.png" }) {
      childImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: shape({
    file: shape({
      childImageSharp: shape({
        resize: shape({
          src: string.isRequired,
          width: number.isRequired,
          heigth: number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
