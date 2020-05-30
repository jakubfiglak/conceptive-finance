import styled from 'styled-components';

const StyledLink = styled.a`
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

export default StyledLink;
