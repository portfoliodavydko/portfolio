import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { Backdrop, CloseX, Content } from './Modal.style';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children, marginTop }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content marginTop={marginTop}>
        <CloseX onClick={handleCloseClick}>X</CloseX>
        {children}
      </Content>
    </Backdrop>,
    modalRoot
  );
};
