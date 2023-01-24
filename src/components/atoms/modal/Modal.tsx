import { MouseEvent, PropsWithChildren, useCallback } from "react";

interface IProps {
  onClickDimmed?: () => void;
}

export default function Modal({
  children,
  onClickDimmed,
}: PropsWithChildren<IProps>) {
  const handleClickContent = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    },
    []
  );
  return (
    <div className="modal-dimmed" onClick={onClickDimmed}>
      <div className="modal" onClick={handleClickContent}>
        {children}
      </div>
    </div>
  );
}
