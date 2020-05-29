import styled from 'styled-components';
import Pattern from '../../assets/patterns/Pattern_red.svg';

export const PatternRed = styled(Pattern)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const PatternYellow = styled(Pattern)`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(180deg) translateY(-50%);

  path {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;
