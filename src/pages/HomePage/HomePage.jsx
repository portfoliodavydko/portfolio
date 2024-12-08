import {
  Container,
  SemiConainer,
  StyledImageBloks,
  StyledImageHand,
  Title,
} from './HomePage.styled';
import bloks from '../../assets/bloks-1.png';
import wavingHand1 from '../../assets/wavingHand1.png';
import DivSlider from '../../components/Slider/Slider';

const HomePage = () => {
  return (
    <Container>
      <SemiConainer>
        <StyledImageHand src={wavingHand1} alt="wawin hand" />
        <Title>Hi, I'm a UI/UX Designer</Title>
        <StyledImageBloks src={bloks} alt="bloks" />
      </SemiConainer>
      <DivSlider />
    </Container>
  );
};

export default HomePage;
