import styled, { css } from 'styled-components';
import Pattern from '../../assets/patterns/pattern.inline.svg';

export const PatternRed = styled(Pattern)`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  transform: translateX(calc(50% - 8px));

  ${({ bottom }) =>
    bottom &&
    css`
      top: 100%;
      transform: translate(calc(50% - 8px), -50%);
    `}

  circle {
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 812px) {
    /* transform: scale(0.75); */
  }
`;

export const PatternYellow = styled(Pattern)`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  transform: translate(calc(-50% + 8px), 50%);
`;
