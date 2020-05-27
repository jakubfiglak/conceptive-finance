import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20rem 0;
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1rem;
`;

const StyledDescription = styled.p`
  margin: 4rem auto;
  max-width: 540px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.5;
`;

const Hero = () => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero_gradient.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  const imageData = desktop.childImageSharp.fluid;

  return (
    <StyledBackgroundImage Tag="section" fluid={imageData} role="img">
      <Navbar />
      <StyledContainer>
        <StyledTitle>Conceptive Finance</StyledTitle>
        <StyledDescription>
          Usługi księgowe, usługi kadrowo-płacowe, księgi handlowe, ryczałt, deklaracje, doradztwo,
          umowy{' '}
        </StyledDescription>
        <Button tertiary as={Link} to="#about">
          Dowiedz się więcej
        </Button>
      </StyledContainer>
    </StyledBackgroundImage>
  );
};

export default Hero;
