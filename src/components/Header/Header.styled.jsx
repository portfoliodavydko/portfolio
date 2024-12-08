import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid var(--color-gray);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;


`;

export const StyledLink = styled(Link)`
  color: var(--color-gray);

  font-weight:400;
  font-size: 14px;
  line-height: 20px;

  &:hover,
  &:focus {
    color: var(--color-accent);
  }
`;

export const IconWrapper = styled.svg`
  width: 24px;
  height: 24px;
`;
