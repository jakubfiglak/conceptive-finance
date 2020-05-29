import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import SectionHeading from '../atoms/SectionHeading';
import { PatternRed, PatternYellow } from '../atoms/Pattern';

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
        <StyledParagraph>
          Jesteśmy grupą wykwalifikowanych księgowych, którzy zadbają o spokój w finansach Twojej
          firmy. Kładziemy nacisk na profesjonalizm oraz jakość świadczonych przez nas usług.
          Zapewniamy pełną obsługę finansowo - księgową, a także kadrowa i płacową podmiotów
          gospodarczych niezależnie od formy prawnej. Naszym klientom oferujemy doradztwo w
          kwestiach podatkowych oraz biznesowych i reprezentację w urzędach. Pomagamy w założeniu
          firmy. Każdy klient otrzymuje wsparcie księgowego i możliwośc indywidualnych konsultacji.
          Przejmujemy na siebie pełnię kwestii księgowo - podatkowych tak, aby klient mógł w pełni
          skupić się na prowadzeniu biznesu.
        </StyledParagraph>
        <StyledImg fluid={imageData} alt="" />
      </StyledWrapper>
      <PatternYellow />
    </StyledSection>
  );
};

export default About;
