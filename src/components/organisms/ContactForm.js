import React, { useState } from 'react';
import styled from 'styled-components';
import FormControl from '../atoms/FormControl';
import Button from '../atoms/Button';
import Modal from './Modal';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.4rem 3rem;

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  company: '',
  text: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleModal = () => {
    setModalOpen(true);
    setTimeout(() => setModalOpen(false), 5000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleModal();
    setFormData(initialFormState);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      });

      setError('');
      handleModal();
      setFormData(initialFormState);
    } catch (err) {
      setError(err);
      handleModal();
    }
  };

  const { name, phone, email, company, text } = formData;

  return (
    <StyledForm
      autoComplete="off"
      onSubmit={onSubmit}
      data-sal="slide-left"
      data-sal-duration="500"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
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
        placeholder="+48 123-456-789"
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
      <Modal isOpen={isModalOpen} error={error} />
    </StyledForm>
  );
};

export default ContactForm;
