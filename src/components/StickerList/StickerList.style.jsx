import styled from '@emotion/styled';

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;

  color: var(--color-accent);
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 88px;
  }
`;
