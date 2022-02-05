import styled, { css } from 'styled-components';

export const ModalDimmed = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export const ModalEl = styled.div`
  width: 100%;
  height: 220px;
  margin-top: auto;
  padding-bottom: calc(1rem + constant(safe-area-inset-bottom));
  padding-bottom: calc(1rem + env(safe-area-inset-bottom));

  border-radius: 5px 5px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background: #fff;
  z-index: 10;

  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-name: slideInUp;
`;

export const ModalInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ModalItemDot = styled.div<{ bgColor?: string }>`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  ${({ bgColor }) => css`
    background-color: ${bgColor || '#94dacd'};
  `}
`;
export const ModalItemName = styled.div`
  font-size: 12px;
  letter-spacing: -0.085rem;
`;
