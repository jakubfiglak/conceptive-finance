import React, { useState } from 'react';
import styled from 'styled-components';
import FormControl from '../atoms/FormControl';
import Button from '../atoms/Button';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.4rem 3rem;

  @media screen and (max-width: 412px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    text: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const { name, phone, email, company, text } = formData;

  return (
    <StyledForm autoComplete="off" onSubmit={onSubmit}>
      <FormControl
        Tag="input"
        label="Imię i nazwisko"
        type="text"
        name="name"
        placeholder="Jan Nowak"
        onChange={onChange}
        value={name}
        required
      />
      <FormControl
        Tag="input"
        label="Nr telefonu"
        type="tel"
        name="phone"
        placeholder="+48-123-456-789"
        onChange={onChange}
        value={phone}
      />
      <FormControl
        Tag="input"
        label="E-mail"
        type="email"
        name="email"
        placeholder="jan.nowak@gmail.com"
        onChange={onChange}
        value={email}
        required
      />
      <FormControl
        Tag="input"
        label="Nazwa firmy"
        type="text"
        name="company"
        placeholder="Jan Nowak Sp. z o.o."
        onChange={onChange}
        value={company}
      />
      <FormControl
        Tag="textarea"
        label="Treść wiadomości"
        name="text"
        placeholder="Twoja wiadomość"
        onChange={onChange}
        value={text}
        required
      />
      <Button primary type="submit" value="wyślij" as="input" />
    </StyledForm>
  );
};

export default ContactForm;
