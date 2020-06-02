import React from 'react';
import styled from 'styled-components';
import { string, oneOf, bool, func } from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 2rem 3rem;
    background: transparent;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fontFamily};

    &:focus {
      outline-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  textarea {
    resize: none;
    height: 10rem;
  }

  &:nth-child(5) {
    grid-column: 1 / span 2;
  }

  @media screen and (max-width: 667px) {
    &:nth-child(5) {
      grid-column: 1;
    }
  }
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin-bottom: 0.5rem;
`;

const FormControl = ({ Tag, label, type, name, placeholder, required, onChange, value }) => (
  <StyledWrapper>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <Tag
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
    />
  </StyledWrapper>
);

FormControl.propTypes = {
  Tag: oneOf(['input', 'textarea']).isRequired,
  label: string.isRequired,
  type: string,
  name: string.isRequired,
  placeholder: string.isRequired,
  required: bool,
  onChange: func.isRequired,
  value: string.isRequired,
};

FormControl.defaultProps = {
  type: null,
  required: false,
};

export default FormControl;
