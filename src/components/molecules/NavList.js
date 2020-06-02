import React from 'react';
import styled from 'styled-components';
import NavLink from '../atoms/NavLink';

const StyledList = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
    display: none;
  }
`;

const NavList = () => (
  <StyledList>
    <li>
      <NavLink href="#about">O nas</NavLink>
    </li>
    <li>
      <NavLink href="#offer">Oferta</NavLink>
    </li>
    <li>
      <NavLink href="#pricing">Cennik</NavLink>
    </li>
  </StyledList>
);

export default NavList;
