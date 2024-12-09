import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 10px;
  gap: 8px;

  border: 1.5px solid var(--color-accent);
  border-radius: 6px;
  padding: 14px;
`;

export const StyledImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const SliderBox = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
  padding-top: 50px;
  padding-bottom: 10px;

  @media (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 77px;
  }
`;
