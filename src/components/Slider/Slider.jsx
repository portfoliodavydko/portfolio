import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Item, SliderBox, StyledImage } from './Slider.styled';
import slide1 from '../../assets/slide1.png';

const DivSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    variableWidth: true,
  };

  return (
    <SliderBox {...settings}>
      <Item>
        <p>Creativity in every detail</p>
        <StyledImage src={slide1} alt="slide1" />
      </Item>
      <Item>
        <p>200</p>
      </Item>
      <Item>
        <p>75</p>
      </Item>
      <Item>
        <p>300</p>
      </Item>
      <Item>
        <p>225</p>
      </Item>
      <Item>
        <p>175</p>
      </Item>
    </SliderBox>
  );
};

export default DivSlider;
