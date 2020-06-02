import React from 'react';
import styled from 'styled-components';
import { func, bool, string, arrayOf } from 'prop-types';
import Button from '../atoms/Button';
import FeaturesListElement from '../atoms/FeaturesListElement';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  padding-bottom: 2.4rem;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
  background: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
  border-radius: 8px;
`;

const StyledHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  margin-top: 4rem;
`;

const StyledPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding: 0 2.4rem;
  margin: 3rem 0;
`;

const PricingCard = ({ Icon, title, features, price, secondary, file }) => (
  <StyledWrapper data-sal="flip-right" data-sal-duration="500">
    <StyledHeader secondary={secondary}>
      <Icon />
      <StyledHeading>{title}</StyledHeading>
    </StyledHeader>
    <StyledList>
      {features.map((feature) => (
        <FeaturesListElement secondary={secondary} key={feature}>
          {feature}
        </FeaturesListElement>
      ))}
    </StyledList>
    <StyledPrice>{price}</StyledPrice>
    <Button
      href={file}
      as="a"
      secondary={secondary}
      primary={!secondary}
      target="_blank"
      rel="noopener noreferrer"
    >
      zobacz cennik
    </Button>
  </StyledWrapper>
);

PricingCard.propTypes = {
  Icon: func.isRequired,
  title: string.isRequired,
  features: arrayOf(string).isRequired,
  price: string.isRequired,
  secondary: bool.isRequired,
  file: string.isRequired,
};

export default PricingCard;
