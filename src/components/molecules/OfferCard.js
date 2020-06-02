import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { func, string, arrayOf, shape, number } from 'prop-types';
import FeaturesListElement from '../atoms/FeaturesListElement';

const StyledWrapper = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 15rem;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const StyledContentWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  padding: 2rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const StyledHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 2rem 0;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const OfferCard = ({ Icon, title, features, imageData }) => {
  return (
    <StyledWrapper data-sal="flip-right" data-sal-duration="500">
      <StyledImage fluid={imageData} alt={title} />
      <StyledContentWrapper>
        <Icon />
        <StyledHeading>{title}</StyledHeading>
        <StyledList>
          {features.map((feature) => (
            <FeaturesListElement key={feature}>{feature}</FeaturesListElement>
          ))}
        </StyledList>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

OfferCard.propTypes = {
  Icon: func.isRequired,
  title: string.isRequired,
  features: arrayOf(string).isRequired,
  imageData: shape({
    aspectRatio: number.isRequired,
    sizes: string.isRequired,
    src: string.isRequired,
    srcSet: string.isRequired,
    tracedSVG: string.isRequired,
  }).isRequired,
};

export default OfferCard;
