import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../images/logo_white.png';
import NavList from './NavList';
import Button from './Button';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 17rem;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <img src={logo} alt="Conceptive Finance Logo" />
      <NavList />
      <Button as={Link} to="#contact">
        Kontakt
      </Button>
    </StyledNav>
  );
};

export default Navbar;
