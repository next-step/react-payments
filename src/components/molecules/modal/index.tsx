import { memo, PropsWithChildren, useCallback } from 'react';

export interface IModal {
  onClickOutside: () => void;
}

function Modal({ onClickOutside, children }: PropsWithChildren<IModal>) {
  const handleClickInside = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <div className="modal-dimmed" onClick={onClickOutside}>
      <div className="modal" onClick={handleClickInside}>
        {children}
      </div>
    </div>
  );
}

export default memo(Modal);
