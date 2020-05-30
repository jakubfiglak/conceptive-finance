import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Navbar from '../molecules/Navbar';
import Button from '../atoms/Button';
import { companyName, welcomeText } from '../../data';

const StyledBackgroundImage = styled(BackgroundImage)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1rem;

  @media screen and (max-width: 823px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    letter-spacing: 0.5rem;
  }

  @media screen and (max-width: 823px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledDescription = styled.p`
  margin: 4rem auto;
  padding: 0 1rem;
  max-width: 540px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.5;

  @media screen and (max-width: 823px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media screen and (max-width: 823px) and (orientation: landscape) {
    margin: 2rem auto;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
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
        <StyledTitle>{companyName}</StyledTitle>
        <StyledDescription>{welcomeText}</StyledDescription>
        <Button tertiary as="a" to="#about">
          Dowiedz się więcej
        </Button>
      </StyledContainer>
    </StyledBackgroundImage>
  );
};

export default Hero;
