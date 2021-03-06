import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: block;
  padding: 1rem 1.8rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: 0;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 0.8rem 1.8rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ primary }) =>
    primary &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        background-color: transparent;
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.secondary};

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.secondary};
      }
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      padding: 1.8rem 5rem;
      border: 1px solid ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;

export default StyledButton;
