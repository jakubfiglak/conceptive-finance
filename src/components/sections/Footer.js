import React from 'react';
import styled from 'styled-components';
import logoBlack from '../../assets/logo/logo_black.png';
import FooterNavList from '../molecules/FooterNavList';
import FooterContact from '../molecules/FooterContact';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 10rem;

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledLogo = styled.img`
  width: 150px;
`;

const Footer = () => (
  <StyledFooter>
    <a href="#hero">
      <StyledLogo src={logoBlack} alt="Conceptive Finance Logo" />
    </a>
    <FooterNavList />
    <FooterContact />
  </StyledFooter>
);

export default Footer;
