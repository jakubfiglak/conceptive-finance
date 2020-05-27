import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../images/logo_white.png';
import NavList from './NavList';
import Button from './Button';
import Burger from './Burger';
import MobileMenu from './MobileMenu';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 17rem;

  @media screen and (max-width: 1024px) {
    padding: 3rem;
  }
`;

const StyledContactButton = styled(Button)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <StyledNav>
      <img src={logo} alt="Conceptive Finance Logo" />
      <NavList />
      <StyledContactButton as={Link} to="#contact">
        Kontakt
      </StyledContactButton>
      <Burger open={isMobileMenuVisible} setOpen={setMobileMenuVisibility} />
      <MobileMenu open={isMobileMenuVisible} setOpen={setMobileMenuVisibility} />
    </StyledNav>
  );
};

export default Navbar;
