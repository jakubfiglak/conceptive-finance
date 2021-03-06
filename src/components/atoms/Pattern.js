import styled, { css } from 'styled-components';
import Pattern from '../../assets/patterns/pattern.inline.svg';

export const PatternRed = styled(Pattern)`
  position: absolute;
  z-index: 4;
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

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.medium}) {
    transform: translate(calc(50% - 6px), -12.5%) scale(0.75);

    ${({ bottom }) =>
      bottom &&
      css`
        top: 100%;
        transform: translate(calc(50% - 6px), -50%) scale(0.75);
      `}
  }
`;

export const PatternYellow = styled(Pattern)`
  position: absolute;
  z-index: 4;
  bottom: 0;
  left: 0;
  transform: translate(calc(-50% + 8px), 50%);

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.medium}) {
    transform: translate(calc(-50% + 6px), 50%) scale(0.75);
  }
`;
