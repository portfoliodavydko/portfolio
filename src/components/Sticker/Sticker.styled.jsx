import styled from '@emotion/styled';

import sticker from '../../assets/sticker.png';

export const Container = styled.div`
  background-image: url(${sticker});
  background-position: center;
  background-size: contain;
  width: 387px;
  height: 371px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 60px;
 

  @media (min-width: 768px) {
    padding: 70px;
    
  }
`;
