import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo/logo_white.png';
import NavList from './NavList';
import Button from '../atoms/Button';
import Burger from '../atoms/Burger';
import MobileMenu from './MobileMenu';

const StyledNav = styled.nav`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 17rem;

  @media screen and (max-width: 1024px) {
    padding: 3rem;
  }

  @media screen and (max-width: 812px) and (orientation: landscape) {
    padding: 1rem 3rem;
  }
`;

const StyledLogo = styled.img`
  @media screen and (max-width: 812px) {
    width: 150px;
  }
`;

const StyledContactButton = styled(Button)`
  @media screen and (max-width: 812px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <StyledNav>
      <StyledLogo src={logo} alt="Conceptive Finance Logo" />
      <NavList />
      <StyledContactButton as="a" to="#contact">
        Kontakt
      </StyledContactButton>
      <Burger open={isMobileMenuVisible} setOpen={setMobileMenuVisibility} />
      <MobileMenu open={isMobileMenuVisible} setOpen={setMobileMenuVisibility} />
    </StyledNav>
  );
};

export default Navbar;
