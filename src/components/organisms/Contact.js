import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../atoms/SectionHeading';
import ContactForm from '../molecules/ContactForm';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 10rem 0;
  /* max-width: 1000px; */
  background: ${({ theme }) => theme.colors.lightGray};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledWrapper = styled.div`
  max-width: 445px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.4;
  margin-top: 2rem;
`;

const Contact = () => (
  <StyledSection>
    <StyledWrapper>
      <SectionHeading>Skontaktuj się z nami!</SectionHeading>
      <StyledParagraph>
        Masz pytanie? Chcesz nawiązać współpracę? Skorzystaj z formularza kontaktowego, odpowiemy
        najszybciej, jak to możliwe!
      </StyledParagraph>
    </StyledWrapper>
    <ContactForm />
  </StyledSection>
);

export default Contact;
