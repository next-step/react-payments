import { MouseEvent, PropsWithChildren, useRef, useState } from 'react';

import { StyledToolTip, StyledToolTopWrapper } from './style';

type Props = {
  message: string;
  onOpen: () => void;
  open: boolean;
};

export const useToolTip = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return {
    open,
    onClose,
    onOpen,
  };
};

export const ToolTip = ({
  message,
  children,
  open,
  onOpen,
}: PropsWithChildren<Props>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const toolTipRef = useRef<HTMLDivElement>(null);

  const handleClickToolTip = ({ clientX }: MouseEvent<HTMLDivElement>) => {
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
