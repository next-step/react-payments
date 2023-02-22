import { useId, useRef, useState } from 'react';

import TooltipPortal from './TooltipPortal';
import type { TooltipProps } from './Tooltip.types';
import * as Styled from './Tooltip.styled';

const Tooltip = ({ children, content }: TooltipProps) => {
  const id = useId();
  const [show, setShow] = useState<boolean>(false);

  const handleMouseOver = () => {
    setShow(true);
  };
  const handleMouseOut = () => {
    setShow(false);
  };

  return (
    <Styled.Tooltip
      id={id}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      {children}

      {show && (
        <TooltipPortal id={id}>
          <Styled.Content>{content}</Styled.Content>
        </TooltipPortal>
      )}
    </Styled.Tooltip>
  );
};

export default Tooltip;
