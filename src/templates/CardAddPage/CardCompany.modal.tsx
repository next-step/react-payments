import { Modal } from '@/components';
import { 카드_회사_목록 } from '@/constants';
//
import { CardCompanyModalProps } from './CardAddPage.types';

const CardCompanyModal = ({ open, onClose, onSelect }: CardCompanyModalProps) => (
  <Modal open={open} onClose={onClose}>
    {카드_회사_목록.map(([className, company]) => (
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

export default CardCompanyModal;
