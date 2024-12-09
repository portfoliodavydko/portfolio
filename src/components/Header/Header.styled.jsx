import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  padding: 20px;
  border-bottom: 1px solid var(--color-gray);
  width: 100%;
  background-color: white;
  z-index: 10;
`;

export const MobileBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesctopNav = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Line = styled.div`
height: 1px;
width: 20px;
border: 1px solid;
`;