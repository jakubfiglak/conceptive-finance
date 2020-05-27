import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from './Button';
import NavLink from './NavLink';

const StyledMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.blackTransparent};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 3rem;
`;

const MobileMenu = ({ open }) => (
  <StyledMenu open={open}>
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
    <StyledButton as={Link} to="#contact">
      Kontakt
    </StyledButton>
  </StyledMenu>
);

MobileMenu.propTypes = {
  open: bool.isRequired,
};

export default MobileMenu;
