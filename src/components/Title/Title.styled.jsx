import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const appearThenSlideLeft = keyframes`
  0% {
    opacity: 0; 
    transform: translateX(300%); 
    display: block;
  }
  50% {
    opacity: 1;
    transform: translateX(300%);
    display: block;
  }
  100% {
    opacity: 0; 
    transform: translateX(-100%);
    display: none;
  }
`;

const appearThenSlideLeftLargeScreen = keyframes`
  0% {
    opacity: 0; 
    transform: translateX(700%);
  }
  50% {
    opacity: 0.5;
    transform: translateX(700%);
  }
  100% {
    opacity: 1; 
    transform: translateX(0);
    display: block;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1; 
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 100px 16px 0 16px;

  @media (min-width: 768px) {
    padding-top: 150px 0 0 0;
  }
`;

export const TitleTxt = styled.h1`
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  text-align: center;

  opacity: 0;

  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 1s;

  @media (min-width: 768px) {
    font-weight: 800;
    font-size: 48px;
    line-height: 59px;

    text-align: left;
  }
`;

export const SemiConainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
`;

export const StyledImageBloks = styled.img`
  width: 90px;
  height: 70px;
  object-fit: cover;

  position: absolute;
  top: -10px;
  right: 0;

  opacity: 0;

  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 1.3s;

  @media (min-width: 768px) {
    width: 194px;
    height: 143px;

    right: -36px;
  }
`;

export const StyledImageHand = styled.img`
  width: 56px;
  height: 56px;

  opacity: 0;
  transform: translateX(700%);

  animation: ${appearThenSlideLeft} 1s ease-out forwards;
  animation-delay: 0.3s;

  @media (min-width: 768px) {
    animation: ${appearThenSlideLeftLargeScreen} 1s ease-out forwards;
  }
`;
