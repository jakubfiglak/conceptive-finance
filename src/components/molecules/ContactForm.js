import React from 'react';
import styled from 'styled-components';
import FormControl from '../atoms/FormControl';
import Button from '../atoms/Button';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.4rem 3rem;
`;

const ContactForm = () => (
  <StyledForm autoComplete="off">
    <FormControl
      Tag="input"
      label="Imię i nazwisko"
      type="text"
      name="name"
      placeholder="Jan Nowak"
    />
    <FormControl
      Tag="input"
      label="Nr telefonu"
      type="tel"
      name="phone"
      placeholder="+48-123-456-789"
    />
    <FormControl
      Tag="input"
      label="E-mail"
      type="e-mail"
      name="email"
      placeholder="jan.nowak@gmail.com"
    />
    <FormControl
      Tag="input"
      label="Nazwa firmy"
      type="text"
      name="company"
      placeholder="Jan Nowak Sp. z o.o."
    />
    <FormControl
      Tag="textarea"
      label="Treść wiadomości"
      name="text"
      placeholder="Twoja wiadomość"
    />
    <Button primary type="submit" value="wyślij" as="input" />
  </StyledForm>
);

export default ContactForm;
