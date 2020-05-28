import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const StyledList = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 812px) {
    display: none;
  }
`;

const NavList = () => (
  <StyledList>
    <li>
      <NavLink to="#about">O nas</NavLink>
    </li>
    <li>
      <NavLink to="#offer">Oferta</NavLink>
    </li>
    <li>
      <NavLink to="#pricing">Cennik</NavLink>
    </li>
  </StyledList>
);

export default NavList;
