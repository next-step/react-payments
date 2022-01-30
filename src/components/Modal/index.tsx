import { FC } from 'react';
import {
  ModalDimmed,
  ModalEl,
  ModalInner,
  ModalItem,
  ModalItemDot,
  ModalItemName,
} from './modalStyle';
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

export default Modal;
