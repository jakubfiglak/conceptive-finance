import styled from 'styled-components';

const SectionHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.2;
`;

export default SectionHeading;
