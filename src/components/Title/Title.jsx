import {
  Container,
  SemiConainer,
  StyledImageBloks,
  StyledImageHand,
  TitleTxt,
} from './Title.styled';

import bloks from '../../assets/bloks-1.png';
import wavingHand1 from '../../assets/wavingHand1.png';

const Title = () => {
  return (
    <Container>
      <SemiConainer>
        <StyledImageHand src={wavingHand1} alt="wawin hand" />
        <TitleTxt>Hi, I'm a UI/UX Designer</TitleTxt>
        <StyledImageBloks src={bloks} alt="bloks" />
      </SemiConainer>
    </Container>
  );
};

export default Title;
