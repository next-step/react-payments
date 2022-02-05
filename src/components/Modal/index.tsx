import { useContext, FC } from 'react';
import {
  ModalDimmed,
  ModalEl,
  ModalInner,
  ModalItem,
  ModalItemDot,
  ModalItemName,
} from './modalStyle';
import { CardContext } from '@/context/cardContext';
import Button from '@components/Button';

const data = [
  {
    name: '클린 카드',
    color: '#baefe6',
  },
  {
    name: '우리 카드',
    color: '#c1d7f9',
  },
  {
    name: '신한 카드',
    color: '#efe8ba',
  },
  {
    name: '카뱅 카드',
    color: '#ffdb57',
  },
  {
    name: '토스 카드',
    color: '#9195fd',
  },
  {
    name: '국민 카드',
    color: '#cf933a',
  },
  {
    name: '기업 카드',
    color: '#92a8bf',
  },
  {
    name: '농협 카드',
    color: '#b4e7a3',
  },
];

const Modal: FC<{
  className?: string;
  onClose: () => void;
}> = ({ onClose }) => {
  const { cardState, setCardState } = useContext(CardContext);

  return (
    <ModalDimmed onClick={onClose}>
      <ModalEl>
        <ModalInner>
          {data.map(({ name, color }, i) => (
            <Button
              key={i}
              onClick={() => {
                setCardState({
                  ...cardState,
                  bgColor: color,
                  company: name,
                });
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
