import React from 'react';
import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import SuccessIcon from '../../assets/icons/check_green.inline.svg';
import ErrorIcon from '../../assets/icons/error.inline.svg';

const modalVariants = {
  hidden: {
    opacity: 0,
    x: '-50%',
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    x: '-50%',
    y: 0,
  },
};

const StyledWrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  max-width: 80vw;
  border-radius: 10px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  background: ${({ theme }) => theme.colors.white};
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-left: 1rem;
`;

const Modal = ({ isOpen, error }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledWrapper variants={modalVariants} initial="hidden" animate="visible" exit="hidden">
          {error ? (
            <>
              <ErrorIcon />
              <StyledParagraph>
                Przepraszamy, coś poszło nie tak. Spróbuj ponownie później.
              </StyledParagraph>
            </>
          ) : (
            <>
              <SuccessIcon />
              <StyledParagraph>Dziękujemy, Twoja wiadomość została wysłana</StyledParagraph>
            </>
          )}
        </StyledWrapper>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  error: string,
  isOpen: bool.isRequired,
};

Modal.defaultProps = {
  error: '',
};

export default Modal;
