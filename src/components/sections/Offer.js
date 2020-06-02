import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SectionHeading from '../atoms/SectionHeading';
import OfferCard from '../molecules/OfferCard';
import { offerContent } from '../../data';

const StyledSection = styled.section`
  padding: 10rem 0;
  background: ${({ theme }) => theme.colors.lightGray};
`;

const StyledHeading = styled(SectionHeading)`
  text-align: center;
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10rem;
  justify-items: center;
  justify-content: center;
  padding: 10rem 3rem;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 0 auto;

  @media screen and (max-width: 812px) {
    grid-template-columns: 1fr;
  }
`;

const Offer = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { name: { regex: "/offer/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(quality: 100, maxWidth: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  );

  const offerContentWithImages = offerContent.map((offer, idx) => ({
    ...offer,
    fluid: allFile.edges[idx].node.childImageSharp.fluid,
  }));

  return (
    <StyledSection id="offer">
      <StyledHeading>Oferta</StyledHeading>
      <StyledWrapper>
        {offerContentWithImages.map((offer) => {
          const { icon, title, features, fluid } = offer;
          return (
            <OfferCard
              Icon={icon}
              title={title}
              features={features}
              imageData={fluid}
              key={title}
            />
          );
        })}
      </StyledWrapper>
    </StyledSection>
  );
};

export default Offer;
