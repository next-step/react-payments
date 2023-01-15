import { useRef } from 'react';
//
import { Modal } from '@/components';

const NumpadModal = () => {
  const clickRef = useRef<HTMLDivElement>(null);

  return (
    <Modal>
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

export default NumpadModal;
