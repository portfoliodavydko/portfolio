import {
  HeaderContainer,
  IconWrapper,
  Navigation,
  StyledLink,
} from './Header.styled';
import sprite from 'assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <IconWrapper>
          <use href={`${sprite}#icon-Dava`} />
        </IconWrapper>
        <StyledLink to="#">Features</StyledLink>
        <StyledLink to="#">Discover</StyledLink>
        <StyledLink to="#">Gallery</StyledLink>
        <StyledLink to="#">Templates</StyledLink>
        <StyledLink to="#">Updates</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
