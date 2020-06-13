import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Button from '../atoms/Button';
import { companyName, welcomeText } from '../../data';

const StyledBackgroundImage = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 13rem;

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
    padding-top: 7.2rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  align-self: center;
  padding-bottom: 2rem;
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    letter-spacing: 0.5rem;
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

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Hero = () => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero_gradient.png" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  const imageData = desktop.childImageSharp.fluid;

  return (
    <StyledBackgroundImage Tag="section" fluid={imageData} id="hero">
      <StyledContainer>
        <StyledTitle data-sal="slide-right" data-sal-duration="500">
          {companyName}
        </StyledTitle>
        <StyledDescription data-sal="slide-left" data-sal-duration="500">
          {welcomeText}
        </StyledDescription>
        <Button tertiary as="a" href="#about" data-sal="flip-up" data-sal-duration="500">
          Dowiedz się więcej
        </Button>
      </StyledContainer>
    </StyledBackgroundImage>
  );
};

export default Hero;
