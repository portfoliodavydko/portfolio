import styled from '@emotion/styled';

export const SliderBox = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const StyledLogo = styled.img`
  position: relative;

  left: 50%;
  transform: translateX(-50%);
  background-color: white;

  @media (min-width: 768px) {
    position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  }
`;


