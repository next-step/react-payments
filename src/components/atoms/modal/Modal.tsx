import { MouseEvent, PropsWithChildren, useCallback } from "react";

interface IProps {
  onClose: () => void;
}

export default function Modal({
  children,
  onClose,
}: PropsWithChildren<IProps>) {
  const handleClickContent = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    },
    []
  );
  return (
    <div className="modal-dimmed" onClick={onClose}>
      <div className="modal" onClick={handleClickContent}>
        {children}
      </div>
    </div>
  );
}
