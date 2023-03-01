import { HTMLAttributes, ReactNode } from 'react';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: ReactNode;
}

export interface TooltipPortalProps {
  id: string;
}
