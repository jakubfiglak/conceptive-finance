import React from 'react';
import styled from 'styled-components';
import LocationIcon from '../../assets/icons/location.inline.svg';
import PhoneIcon from '../../assets/icons/phone.inline.svg';
import MailIcon from '../../assets/icons/mail.inline.svg';

const StyledFooter = styled.footer`
  padding: 6rem;
  background: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 375px) {
    padding: 6rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  address {
    font-style: normal;
    margin-left: 1rem;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ContactInfo = () => (
  <StyledFooter>
    <StyledWrapper>
      <StyledInfoContainer data-sal="slide-up" data-sal-duration="500">
        <LocationIcon />
        <address>
          {' '}
          Conceptive Finance sp. z o.o.
          <br />
          ul. Tadeusza Kościuszki 107D
          <br />
          62-030 Luboń
          <br />
        </address>
      </StyledInfoContainer>
      <StyledInfoContainer data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
        <PhoneIcon />
        <address>+48 697-220-330</address>
      </StyledInfoContainer>
      <StyledInfoContainer data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
        <MailIcon />
        <address>damian@conceptivefinance.pl</address>
      </StyledInfoContainer>
    </StyledWrapper>
  </StyledFooter>
);

export default ContactInfo;
