import styled from '@emotion/styled';

export const Dot = styled.div`
  position: relative;
  width: 48px;
  height: 48px;

  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 4px);
    left: calc(50% - 4px);
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #94dacd;
  }
`;

export const Bottom = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  bottom: 0;
  width: 100%;
  height: 50px;
`;
