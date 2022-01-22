import { FC } from 'react';
import styled, { css } from 'styled-components';
import { newStateProps, changeCardStateType } from '@/pages/NewCard/type';
import Button from '@components/Button';

const data = Array(8).fill({
  name: '클린 카드',
  color: '#baefe6',
});

const Modal: FC<{
  className?: string;
  changeCardState: changeCardStateType;
  onClose: () => void;
}> = ({ changeCardState, onClose }) => {
  return (
    <ModalDimmed onClick={onClose}>
      <ModalEl>
        <ModalInner>
          {data.map(({ name, color }, i) => (
            <Button
              key={i}
              onClick={() => {
                changeCardState({
                  bgColor: color,
                  company: name,
                } as newStateProps);
              }}
            >
              <ModalItem>
                <ModalItemDot bgColor={color}></ModalItemDot>
                <ModalItemName>{name}</ModalItemName>
              </ModalItem>
            </Button>
          ))}
        </ModalInner>
      </ModalEl>
    </ModalDimmed>
  );
};

const ModalDimmed = styled.div`
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

const ModalEl = styled.div`
  width: 100%;
  height: 220px;
  margin-top: auto;

  border-radius: 5px 5px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background: #fff;
  z-index: 10;

  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-name: slideInUp;
`;

const ModalInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ModalItemDot = styled.div<{ bgColor?: string }>`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  ${({ bgColor }) => css`
    background-color: ${bgColor || '#94dacd'};
  `}
`;
const ModalItemName = styled.div`
  font-size: 12px;
  letter-spacing: -0.085rem;
`;

export default Modal;
