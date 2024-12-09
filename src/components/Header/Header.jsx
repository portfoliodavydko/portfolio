import { useState } from 'react';
import { DesctopNav, HeaderContainer, Line, MobileBtn } from './Header.styled';

import { Modal } from '../Modal/Modal';
import Nav from './Nav';

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
      <DesctopNav>
        <Nav />
      </DesctopNav>
      <MobileBtn onClick={toggleMobileMenu}>
        <Line></Line>
        <Line></Line>
      </MobileBtn>
      {showMobileMenu && (
        <Modal onClose={toggleMobileMenu}>
          <Nav />
        </Modal>
      )}
    </HeaderContainer>
  );
};
