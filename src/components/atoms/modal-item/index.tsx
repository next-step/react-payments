import { memo } from 'react';

interface IModalItem {
  onClick: () => void;
  dotColor: string;
  title: string;
}

function ModalItem({ dotColor = '#bebebe', title, onClick }: IModalItem) {
  return (
    <div className="modal-item-container" onClick={onClick}>
      <div className="modal-item-dot" style={{ backgroundColor: dotColor }}></div>
      <span className="modal-item-name">{title}</span>
    </div>
  );
}

export default memo(ModalItem);
