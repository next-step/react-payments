import { useRef } from 'react';

import { CARD } from '@/constants/card';
import useOutsideClick from '@/hooks/common/useOutsideClick';

import CardSelectBox from '../CardSelectBox';

type CardSelectModalProps = {
  onClick: ({ name, color }: { name: string; color: string }) => void;
  onCloseModal: () => void;
};

export default function CardSelectModal({ onClick, onCloseModal }: CardSelectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onCloseModal);

  return (
    <div className="modal-dimmed">
      <div className="modal" ref={modalRef}>
        <div className="grid-center">
          {CARD.COMPANY.map(({ name, color }) => {
            return <CardSelectBox key={name} name={name} color={color} onClick={() => onClick({ name, color })} />;
          })}
        </div>
      </div>
    </div>
  );
}
