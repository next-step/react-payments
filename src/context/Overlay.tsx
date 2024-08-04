import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

interface OverlayContextType {
  open: (params: { node: ReactNode }) => void;
  close: () => void;
}

export const OverlayContext = createContext<OverlayContextType | null>(null);

export const OverlayProvider = ({ children }: PropsWithChildren) => {
  const [, setIsOpen] = useState(false);
  const [node, setNode] = useState<ReactNode>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const open = useCallback(({ node }: { node: ReactNode }) => {
    setNode(node);
    setIsOpen(true);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const close = useCallback(() => {
    setNode(null);
    setIsOpen(false);
  }, []);

  const overlayContext = useMemo(
    () => ({
      open,
      close,
    }),
    [open, close]
  );

  const portalRoot = document.getElementById('overlay');

  return (
    <OverlayContext.Provider value={overlayContext}>
      {children}
      {portalRoot && createPortal(<>{node}</>, portalRoot)}
    </OverlayContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOverlayContext = () => {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error('useOverlayContext must be used within a OverlayProvider');
  }

  return context;
};
