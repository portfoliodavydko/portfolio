import { SliderBox, StyledLogo } from './HomePage.styled';

import DivSlider from '../../components/Slider/Slider';
import logo from '../../assets/logo.png';
import Separator from '../../components/Separator/Separator';
import Title from '../../components/Title/Title';
import About from '../../components/About/About';
import StickerList from '../../components/StickerList/StickerList';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <Title />
      <SliderBox>
        <DivSlider />
        <StyledLogo src={logo} alt="logo" />
      </SliderBox>
      <Button
        text={'Say hello 💭'}
        position="0 auto"
        handleOpen={toggleModal}
      />
      <Separator />
      <About about={'aboutMe'}/>
      <StickerList />
      <Separator />

      {showModal && (
        <Modal onClose={toggleModal} marginTop={'200px'}>
          <h1>ТУТ МОЖНА ЗРОБИТИ ЯКУСЬ ФОРМУ ЗВОРОТНЬОГО ЗВ'ЯЗКУ</h1>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
