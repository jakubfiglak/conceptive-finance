import styled from 'styled-components';

const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  padding: 2rem 3rem;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default StyledLink;
