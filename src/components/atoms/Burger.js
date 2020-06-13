import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryTransparent};
  z-index: 10;

  @media screen and (min-width: ${({ theme }) => theme.screenWidth.small}) {
    display: none;
  }
`;

const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 3rem;
  background: 0;
  border: none;
  cursor: pointer;
  transform: ${({ open }) => (open ? 'translateX(4px)' : 'translateX(0)')};

  &:focus {
    outline: none;
  }

  div {
    position: relative;
    width: 3rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screenWidth.small}) {
    display: none;
  }
`;

const Burger = ({ open, setOpen }) => (
  <StyledWrapper open={open}>
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      aria-label={open ? 'Close the menu' : 'Open the menu'}
      aria-expanded={open}
    >
      <div aria-hidden="true" />
      <div aria-hidden="true" />
      <div aria-hidden="true" />
    </StyledBurger>
  </StyledWrapper>
);

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
