import React from 'react';
import styled from 'styled-components';
import { func, string, arrayOf } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import CheckRed from '../../assets/icons/check_red.svg';

// TODO: fix border radius issue

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  max-width: 400px;
  height: 350px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 15rem;
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

const StyledList = styled.li`
  list-style: none;
`;

const StyledListElement = styled.ul`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 0.5rem 0;
  text-align: center;

  &::before {
    display: block;
    content: url(${CheckRed});
    margin-right: 0.5rem;
  }
`;

const OfferCard = ({ Icon, title, features, imageData }) => {
  return (
    <StyledBackground Tag="div" role="img" fluid={imageData}>
      <StyledContentWrapper>
        <Icon />
        <StyledHeading>{title}</StyledHeading>
        <StyledList>
          {features.map((feature) => (
            <StyledListElement key={feature}>{feature}</StyledListElement>
          ))}
        </StyledList>
      </StyledContentWrapper>
    </StyledBackground>
  );
};

OfferCard.propTypes = {
  Icon: func.isRequired,
  title: string.isRequired,
  features: arrayOf(string).isRequired,
};

export default OfferCard;
