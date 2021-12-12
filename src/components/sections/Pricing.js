import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SectionHeading from '../atoms/SectionHeading';
import PricingCard from '../molecules/PricingCard';
import { pricingContent } from '../../data';
import { PatternYellow } from '../atoms/Pattern';

const StyledSection = styled.section`
  position: relative;
  padding: 10rem 0;
`;

const StyledHeading = styled(SectionHeading)`
  text-align: center;
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: ${({ theme }) => theme.contentWidth};
  justify-items: center;
  padding: 10rem 3rem;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
    grid-template-columns: 1fr;
    grid-gap: 5rem;
  }
`;

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query PdfQuery {
      kh: file(name: { eq: "KH" }) {
        publicURL
      }
      kpir: file(name: { eq: "KPiR" }) {
        publicURL
      }
    }
  `);

  const kpirPDF = data.kpir.publicURL;
  const khPDF = data.kh.publicURL;

  const pricingContentWithFile = [
    { ...pricingContent[0], file: kpirPDF },
    { ...pricingContent[1], file: khPDF },
  ];

  return (
    <StyledSection id="pricing">
      <StyledHeading>Cennik</StyledHeading>
      <StyledWrapper>
        {pricingContentWithFile.map((pricing) => {
          const { title, icon, features, price, secondary, file } = pricing;

          return (
            <PricingCard
              key={title}
              Icon={icon}
              title={title}
              features={features}
              price={price}
              secondary={secondary}
              file={file}
            />
          );
        })}
      </StyledWrapper>
      <PatternYellow />
    </StyledSection>
  );
};

export default Pricing;
