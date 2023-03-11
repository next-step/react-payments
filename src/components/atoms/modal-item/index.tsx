import { memo, useCallback } from 'react';

interface IModalItem {
  item: object;
  onClick: (item: object) => void;
  dotColor: string;
  title: string;
}

function ModalItem({ dotColor = '#bebebe', title, onClick, item }: IModalItem) {
  const handleClick = useCallback(() => {
    onClick(item);
  }, []);

  return (
    <div className="modal-item-container" onClick={handleClick}>
      <div className="modal-item-dot" style={{ backgroundColor: dotColor }}></div>
      <span className="modal-item-name">{title}</span>
    </div>
  );
}

export default memo(ModalItem);
