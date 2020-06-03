import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: 0;
  border: none;
  cursor: pointer;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    position: relative;
    width: 100%;
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
);

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
