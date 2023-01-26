import { Modal } from '@/components';
import { 카드_테마 } from '@/constants';
//
import type { 카드_테마_키, 카드_테마_타입 } from 'literal';

type CardCompanyModalProps = {
  open: boolean;
  onClose: (event: KeyboardEvent | MouseEvent) => void;
  onSelect: (params: { className: 카드_테마_타입; company: 카드_테마_키 }) => void;
};

const 카드_목록 = (Object.entries(카드_테마) as Array<[카드_테마_타입, 카드_테마_키]>).filter(
  ([company]) => company !== 'base-theme',
);

const CardCompanyModal = ({ open, onClose, onSelect }: CardCompanyModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      {카드_목록.map(([className, company]) => (
        <div
          key={className}
          className={`modal-item-container ${className}`}
          onClick={() => onSelect({ className, company })}
        >
          <div className="modal-item-dot" />
          <span className="modal-item-name">{company}</span>
        </div>
      ))}
    </Modal>
  );
};

export default CardCompanyModal;
