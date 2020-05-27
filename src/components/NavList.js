import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  list-style: none;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  padding: 2rem 3rem;
  position: relative;

  &::before {
    display: block;
    content: '';
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: -100%;
    bottom: 10px;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover {
    &::before {
      opacity: 1;
      left: 0;
    }
  }
`;

const NavList = () => (
  <StyledList>
    <li>
      <StyledLink to="#about">O nas</StyledLink>
    </li>
    <li>
      <StyledLink to="#offer">Oferta</StyledLink>
    </li>
    <li>
      <StyledLink to="#pricing">Cennik</StyledLink>
    </li>
  </StyledList>
);

export default NavList;
