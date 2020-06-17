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

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
    padding: 6rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.contentWidth};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.medium}) {
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  address {
    font-style: normal;
    margin-left: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.screenWidth.medium}) {
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
        <a
          href="https://www.google.pl/maps/place/Ko%C5%9Bciuszki+107D,+62-030+Lubo%C5%84/@52.3550512,16.8612683,17z/data=!3m1!4b1!4m5!3m4!1s0x47044557acc34361:0xd386f145beac21dd!8m2!3d52.3550479!4d16.863457"
          target="_blank"
          rel="noopener noreferrer"
        >
          <address>
            {' '}
            Conceptive Finance sp. z o.o.
            <br />
            ul. Tadeusza Kościuszki 107D
            <br />
            62-030 Luboń
            <br />
          </address>
        </a>
      </StyledInfoContainer>
      <StyledInfoContainer data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
        <PhoneIcon />
        <a href="tel:+48697-220-330">
          <address>+48 697-220-330</address>
        </a>
      </StyledInfoContainer>
      <StyledInfoContainer data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
        <MailIcon />
        <a href="mailto:damian@kasprzakksiegowosc.pl">
          <address>damian@kasprzakksiegowosc.pl</address>
        </a>
      </StyledInfoContainer>
    </StyledWrapper>
  </StyledFooter>
);

export default ContactInfo;
