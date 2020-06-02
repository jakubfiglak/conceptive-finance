import React from 'react';
import styled from 'styled-components';
import FooterNavLink from '../atoms/FooterNavLink';

const StyledList = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.medium}) {
    flex-direction: column;
  }
`;

const FooterNavList = () => (
  <StyledList>
    <li>
      <FooterNavLink href="#about">O nas</FooterNavLink>
    </li>
    <li>
      <FooterNavLink href="#offer">Oferta</FooterNavLink>
    </li>
    <li>
      <FooterNavLink href="#pricing">Cennik</FooterNavLink>
    </li>
    <li>
      <FooterNavLink href="#contact">Kontakt</FooterNavLink>
    </li>
  </StyledList>
);

export default FooterNavList;
