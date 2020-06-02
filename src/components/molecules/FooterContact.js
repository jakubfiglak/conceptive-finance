import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '../../assets/icons/facebook.inline.svg';
import LinkedinIcon from '../../assets/icons/linkedin.inline.svg';

const StyledWrapper = styled.address`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 2;
  font-style: normal;
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  margin-top: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
    justify-content: center;
  }
`;

const StyledIconLink = styled.a`
  margin-right: 1rem;

  path {
    transition: all 0.3s;
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const FooterContact = () => (
  <StyledWrapper>
    damian@conceptivefinance.pl
    <br />
    +48 697-220-330
    <br />
    <StyledIconsWrapper>
      <StyledIconLink href="https://www.facebook.com/Conceptive-Finance-109359720793266">
        <FacebookIcon />
      </StyledIconLink>
      <StyledIconLink href="https://pl.linkedin.com/">
        <LinkedinIcon />
      </StyledIconLink>
    </StyledIconsWrapper>
  </StyledWrapper>
);

export default FooterContact;
