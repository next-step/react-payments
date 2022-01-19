import styled from '@emotion/styled';

export const Modal = styled.div`
  width: 375px;
  height: 220px;

  border-radius: 5px 5px 15px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background: #fff;
  z-index: 10;
`;

export const ModalDimmed = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;

  ${({ open }) => (open ? `display: flex;` : `display: none;`)}
  flex-direction: column;
  justify-content: flex-end;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);

  border-radius: 15px;

  z-index: 5;
`;

export const ModalItemConatainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalItemButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  padding: 0px;
`;

export const ModalItemDot = styled.div<{ color?: string }>`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;

  background-color: #94dacd;
  ${({ color }) => color && `background-color: ${color};`}
`;

export const ModalItemName = styled.div`
  font-size: 12px;
  letter-spacing: -0.085rem;
`;
