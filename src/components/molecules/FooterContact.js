import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '../../assets/icons/facebook.inline.svg';
import LinkedinIcon from '../../assets/icons/linkedin.inline.svg';

const StyledWrapper = styled.address`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 2;
  font-style: normal;

  a {
    display: block;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
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
    <a href="mailto:damian@conceptivefinance.pl">damian@conceptivefinance.pl</a>
    <a href="tel:+48697-220-330">+48 697-220-330</a>
    <StyledIconsWrapper>
      <StyledIconLink
        href="https://www.facebook.com/Conceptive-Finance-109359720793266"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <FacebookIcon />
      </StyledIconLink>
      <StyledIconLink
        href="https://pl.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="linkedin"
      >
        <LinkedinIcon />
      </StyledIconLink>
    </StyledIconsWrapper>
  </StyledWrapper>
);

export default FooterContact;
