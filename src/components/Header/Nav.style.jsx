import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 20px;
  }
`;

export const StyledLink = styled(HashLink)`
  color: var(--color-gray);

  font-weight: 400;
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
