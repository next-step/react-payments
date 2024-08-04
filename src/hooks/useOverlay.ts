import { ReactNode, useMemo, useCallback } from 'react';
import { useOverlayContext } from '@/context/Overlay';

export default function useOverlay() {
  const { open: openOverlay, close: closeOverlay } = useOverlayContext();

  const open = useCallback(
    (node: { node: ReactNode }) => openOverlay(node),
    [openOverlay]
  );

  const close = useCallback(() => closeOverlay(), [closeOverlay]);

  return useMemo(
    () => ({
      open,
      close,
    }),
    [open, close]
  );
}
