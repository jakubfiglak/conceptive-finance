import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import SectionHeading from '../atoms/SectionHeading';
import { PatternRed, PatternYellow } from '../atoms/Pattern';
import { aboutText } from '../../data';

// TODO: download higher resolution section image
// make patterns symmetrical

const StyledSection = styled.section`
  position: relative;
  padding: 16rem 5rem;

  @media screen and (max-width: 1024px) {
    padding: 10rem 5rem;
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'title photo'
    'text photo';
  grid-gap: 5rem 12.5rem;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'title' 'photo' 'text';
  }
`;

const StyledHeading = styled(SectionHeading)`
  grid-area: title;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  grid-area: text;
  line-height: 1.4;
  text-align: justify;
  max-width: 445px;

  @media screen and (max-width: 1024px) {
    justify-self: center;
  }
`;

const StyledImg = styled(Image)`
  border-radius: 15px;
  grid-area: photo;
`;

const About = () => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  const imageData = desktop.childImageSharp.fluid;

  return (
    <StyledSection id="about">
      <PatternRed />
      <StyledWrapper>
        <StyledHeading>O nas</StyledHeading>
        <StyledParagraph>{aboutText}</StyledParagraph>
        <StyledImg fluid={imageData} alt="" />
      </StyledWrapper>
      <PatternYellow />
    </StyledSection>
  );
};

export default About;
