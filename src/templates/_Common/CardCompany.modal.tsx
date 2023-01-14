import { useRef } from 'react';
//
import { Modal } from '@/components';
import { 카드_테마 } from '@/constants';

type CardCompanyModalProps = {
  open?: boolean;
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
};

const 카드_목록 = Object.entries(카드_테마).filter(([company]) => company !== '');

const CardCompanyModal = ({ open, onClose }: CardCompanyModalProps) => {
  const clickRef = useRef<HTMLDivElement>(null);
  return (
    <Modal open={open} onClose={onClose} modalRef={clickRef}>
      <div className="modal-dimmed" />
      <div className="modal" data-testid="select-modal" ref={clickRef}>
        <div className="flex-center flex-wrap">
          {카드_목록.map(([className, company]) => (
            <div key={className} className={`modal-item-container ${className}`}>
              <div className="modal-item-dot" />
              <span className="modal-item-name">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default CardCompanyModal;
