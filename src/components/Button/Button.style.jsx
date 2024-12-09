import styled from '@emotion/styled';

export const HelloButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  margin: ${(props) => props.position || '0 auto'};
  width: 200px;
  height: 50px;

  border: 1.5px solid var(--color-accent);
  border-radius: 10px;
  color: var(--color-accent);
  background-color: inherit;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;
