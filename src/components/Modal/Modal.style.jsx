import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(4, 4, 4, 0.4);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  min-height: 280px;
  max-width: 380px;
  transform: translate(-50%, -50%);
  padding: 48px 24px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  margin-top: ${(props) => props.marginTop || '0'};
  @media (min-width: 768px) {
    top: 16px;
    min-width: 430px;
    max-width: 694px;
    width: fit-content;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const CloseX = styled.p`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;

  @media (min-width: 768px) {
    top: 16px;
    right: 16px;
    width: 26px;
    height: 26px;
  }
`;
