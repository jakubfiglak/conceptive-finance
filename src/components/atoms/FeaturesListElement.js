import styled from 'styled-components';
import CheckRed from '../../assets/icons/check_red.svg';
import CheckYellow from '../../assets/icons/check_yellow.svg';

const StyledListElement = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 0.5rem 0;
  text-align: center;

  &::before {
    display: block;
    content: ${({ secondary }) => (secondary ? `url(${CheckYellow})` : `url(${CheckRed})`)};
    margin-right: 0.5rem;
  }
`;

export default StyledListElement;
