import { useRef } from 'react';

import { CARD } from '@/constants/card';
import { useCardCompanyModalContext } from '@/context/CardCompanyModal';
import useOutsideClick from '@/hooks/common/useOutsideClick';

import CardSelectBox from '../CardSelectBox';

export default function CardSelectModal() {
  const { handleClickCard, handleClickCloseModal } = useCardCompanyModalContext();
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, handleClickCloseModal);

  return (
    <div className="modal-dimmed">
      <div className="modal" ref={modalRef}>
        <div className="grid-center">
          {CARD.COMPANY.LIST.map(({ name, color }) => {
            return (
              <CardSelectBox key={name} name={name} color={color} onClick={() => handleClickCard({ name, color })} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
