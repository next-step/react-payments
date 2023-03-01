import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import type { TooltipPortalProps } from './Tooltip.types';

const TooltipPortal = ({
  id,
  children,
}: PropsWithChildren<TooltipPortalProps>) => {
  const tooltipRoot = document.getElementById(id) as HTMLElement;
  return ReactDOM.createPortal(children, tooltipRoot);
};

export default TooltipPortal;
