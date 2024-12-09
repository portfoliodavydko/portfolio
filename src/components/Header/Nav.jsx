import sprite from 'assets/sprite.svg';
import { IconWrapper, Navigation, StyledLink } from './Nav.style';

const Nav = () => {
  return (
    <Navigation>
      <StyledLink to="/">
        <IconWrapper>
          <use href={`${sprite}#icon-Dava`} />
        </IconWrapper>
      </StyledLink>
      <StyledLink to="#aboutMe">Features</StyledLink>
      <StyledLink to="#">Discover</StyledLink>
      <StyledLink to="#">Gallery</StyledLink>
      <StyledLink to="#">Templates</StyledLink>
      <StyledLink to="#">Updates</StyledLink>
    </Navigation>
  );
};

export default Nav;
