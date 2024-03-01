import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { twJoin } from 'tailwind-merge';

interface PortalProps extends PropsWithChildren {
  dropShadow?: boolean;
}

export default function Portal({ dropShadow = true, children }: PortalProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById('portal'));
  }, []);

  if (!element) return null;

  return createPortal(
    <div className={twJoin('fixed inset-0', dropShadow && 'bg-[rgba(51, 55, 61, 0.50)]')}>{children}</div>,
    element
  );
}

// Fnull
