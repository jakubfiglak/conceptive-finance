import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/Button';
import NavLink from '../atoms/NavLink';

const StyledMenu = styled.nav`
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

const MobileMenu = ({ open, setOpen }) => (
  <StyledMenu open={open} aria-hidden={!open}>
    <StyledList>
      <li>
        <NavLink href="#about" onClick={() => setOpen(!open)} tabIndex={open ? '0' : '-1'}>
          O nas
        </NavLink>
      </li>
      <li>
        <NavLink href="#offer" onClick={() => setOpen(!open)} tabIndex={open ? '0' : '-1'}>
          Oferta
        </NavLink>
      </li>
      <li>
        <NavLink href="#pricing" onClick={() => setOpen(!open)} tabIndex={open ? '0' : '-1'}>
          Cennik
        </NavLink>
      </li>
    </StyledList>
    <StyledButton
      as="a"
      href="#contact"
      onClick={() => setOpen(!open)}
      tabIndex={open ? '0' : '-1'}
    >
      Kontakt
    </StyledButton>
  </StyledMenu>
);

MobileMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default MobileMenu;
