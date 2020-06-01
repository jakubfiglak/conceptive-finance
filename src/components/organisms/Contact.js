import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../atoms/SectionHeading';
import ContactForm from '../molecules/ContactForm';
import ContactInfo from '../molecules/ContactInfo';

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.lightGray};
`;

const StyledFormWrapper = styled.div`
  display: flex;
  padding: 10rem 0;
  justify-content: center;

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
  <StyledSection id="contact">
    <StyledFormWrapper>
      <StyledWrapper data-sal="slide-right" data-sal-duration="500">
        <SectionHeading>Skontaktuj się z nami!</SectionHeading>
        <StyledParagraph>
          Masz pytanie? Chcesz nawiązać współpracę? Skorzystaj z formularza kontaktowego, odpowiemy
          najszybciej, jak to możliwe!
        </StyledParagraph>
      </StyledWrapper>
      <ContactForm />
    </StyledFormWrapper>
    <ContactInfo />
  </StyledSection>
);

export default Contact;
