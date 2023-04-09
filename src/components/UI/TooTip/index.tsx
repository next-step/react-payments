import { MouseEvent, PropsWithChildren, useRef } from 'react';

import { StyledToolTip, StyledToolTopWrapper } from './style';

type Props = {
  message: string;
  onOpen?: () => void;
  onClose?: () => void;
  open: boolean;
};

export const ToolTip = ({
  message,
  children,
  open,
  onOpen,
  onClose,
}: PropsWithChildren<Props>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const toolTipRef = useRef<HTMLDivElement>(null);

  const handleClickToolTip = ({ clientX }: MouseEvent<HTMLDivElement>) => {
    if (open) {
      onClose?.();
      return;
    }

    if (!toolTipRef.current || !containerRef.current) return;
    const { right } = containerRef.current.getBoundingClientRect();
    toolTipRef.current.style.right = clientX - right + 'px';
    onOpen?.();
  };

  return (
    <StyledToolTopWrapper ref={containerRef} onClick={handleClickToolTip}>
      {children}
      <StyledToolTip css={{ opacity: open ? 100 : 0 }} ref={toolTipRef}>
        {message}
      </StyledToolTip>
    </StyledToolTopWrapper>
  );
};

export default ToolTip;
