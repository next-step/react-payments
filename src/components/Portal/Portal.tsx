import React, { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const MODAL_ROOT = 'modal-root';

type ElementOrNull = Element | null;

interface PortalProps extends PropsWithChildren {
  disablePortal?: boolean;
  container?: ElementOrNull | (() => ElementOrNull);
}

function getContainer(container: PortalProps['container']) {
  return typeof container === 'function' ? container() : container;
}

export function Portal({ disablePortal = false, container, children }: PortalProps) {
  const [mountNode, setMountNode] = useState<ElementOrNull>();

  useEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.getElementById(MODAL_ROOT));
    }
  }, [container, disablePortal]);

  return mountNode ? createPortal(children, mountNode) : null;
}
