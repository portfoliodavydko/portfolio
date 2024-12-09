import { Container, StyledSmile, Text, Title, TitleBox } from './About.styled';

import aboutSmile from '../../assets/aboutSmile.png';

const About = ({about}) => {
  return (
    <Container id={about}>
      <TitleBox>
        <StyledSmile src={aboutSmile} alt="aboutSmile" />
        <Title>About me</Title>
      </TitleBox>
      <Text>
        Hello! My name is David a little about me: you can play my
        <b> Spotify </b>
        playlist in the background as you read! I’m a creative and artistic
        individual with a passion for design. My journey began in art school,
        where I discovered a love for graphic design and started exploring
        digital drawing. Over time, I developed skills in creating logos,
        posters, and banners. While I haven’t pursued this professionally yet,
        it’s something I enjoy deeply. I recently completed Global GoIT courses,
        which provided me with a solid foundation in web design and development.
        You can check out their website here: <b> GoIT. </b>I’m actively seeking new
        opportunities to enhance my skills and kickstart my career. Always eager
        to learn, I’m looking for exciting roles that allow me to grow and
        refine my expertise!
      </Text>
    </Container>
  );
};

export default About;
