import styled from 'styled-components';

export const ModalDimmed = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);

  border-radius: 15px;

  z-index: 5;
`;

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

export const ModalItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalItemDot = styled.div`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  background-color: #94dacd;
`;

export const ModalItemName = styled.span`
  font-size: 12px;
  letter-spacing: -0.085rem;
`;
