import Marquee from 'react-marquee-slider';
import { Item, SliderBox } from './Slider.styled';

const DivSlider = () => {
  return (
    <SliderBox>
      <Marquee velocity={20} resetAfterTries={200}>
        <Item>
          <p>Creativity in every detail 👨‍🎨</p>
          {/* <StyledImage src={slide1} alt="slide1" /> */}
        </Item>
        <Item>
          <p>Your style is my challenge 🎨</p>
        </Item>
        <Item>
          <p>💡Let's turn your idea into reality</p>
        </Item>
        <Item>
          <p>🤓Visual magic is my middle name</p>
          {/* <StyledImage src={slide4} alt="slide4" /> */}
        </Item>
        <Item>
          <p>Creativity is my superpower 💪🏼</p>
        </Item>
        <Item>
          <p>Visualization of dreams 💫</p>
        </Item>
        <Item>
          <p>💸</p>
        </Item>
      </Marquee>
    </SliderBox>
  );
};

export default DivSlider;
