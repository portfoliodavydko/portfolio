import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideInFromCenter = keyframes`
  0% {
    transform: translateX(700%);
    opacity: 0;
  }
  50% {
    transform: translateX(0); /* Элемент на своем месте */
    opacity: 0.5; /* Полупрозрачный */
  }
  100% {
    transform: translateX(0); 
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`;

export const TitleTxt = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 59px;

  animation: ${slideInFromRight} 1s ease-out forwards;
  animation-delay: 1s;
`;

export const SemiConainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
`;

export const StyledImageBloks = styled.img`
  width: 194px;
  height: 143px;
  object-fit: cover;

  position: absolute;
  right: -36px;

  animation: ${slideInFromRight} 1s ease-out forwards;
  animation-delay: 1.3s;
`;

export const StyledImageHand = styled.img`
  width: 56px;
  height: 56px;

  animation: ${slideInFromCenter} 1s ease-out forwards;
  animation-delay: 0.3s;
`;
