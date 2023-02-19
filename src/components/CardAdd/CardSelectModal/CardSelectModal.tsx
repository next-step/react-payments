import { MouseEvent, useRef } from 'react';

import { CARD } from '@/constants/card';
import useOutsideClick from '@/hooks/common/useOutsideClick';
import CardSelectBox from '../CardSelectBox';

type CardSelectModalProps = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onCloseModal: () => void;
};

export default function CardSelectModal({ onClick, onCloseModal }: CardSelectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onCloseModal);

  return (
    <div className="modal-dimmed">
      <div className="modal" ref={modalRef}>
        <div className="grid-center">
          {CARD.COMPANY.map((company) => {
            const { name, color } = company;

            return <CardSelectBox key={company.name} name={name} color={color} onClick={onClick} />;
          })}
        </div>
      </div>
    </div>
  );
}
