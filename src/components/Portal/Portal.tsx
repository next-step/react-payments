import React, { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const MODAL_ROOT = 'modal-root';

interface PortalProps extends PropsWithChildren {
  disablePortal?: boolean;
  container?: Element | (() => Element | null) | null;
}

function getContainer(container: PortalProps['container']) {
  return typeof container === 'function' ? container() : container;
}

function Portal({ disablePortal = false, container, children }: PortalProps) {
  const [mountNode, setMountNode] = useState<ReturnType<typeof getContainer>>(null);

  useEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.getElementById(MODAL_ROOT));
    }
  }, [container, disablePortal]);

  return mountNode ? createPortal(children, mountNode) : null;
}

export { Portal };
