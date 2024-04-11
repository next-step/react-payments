import {
  createContext,
  useState,
  useCallback,
  PropsWithChildren,
  useMemo,
  useContext,
  Fragment,
  ReactNode,
} from 'react';

export type OverlayContent = (options: { close: () => void; opened: boolean }) => ReactNode;
export type OverlayContextType = {
  openOverlay: (content: OverlayContent) => void;
};

export const OverlayContext = createContext<OverlayContextType | null>(null);

export const OverlayProvider = ({ children }: PropsWithChildren) => {
  const [overlays, setOverlays] = useState<{ key: string; content: OverlayContent }[]>([]);

  const openOverlay = useCallback((content: OverlayContent) => {
    const key = `overlay-${Date.now()}`;
    setOverlays((prevOverlays) => [...prevOverlays, { key, content }]);
    return () => {
      const opened = true;
      setOverlays((prevOverlays) => {
        if (!opened) {
          return prevOverlays;
        }
        const overlay = prevOverlays.find((overlay) => overlay.key === key);
        if (overlay) {
          overlay.content = (options) => content({ ...options, opened });
        }
        return prevOverlays;
      });
    };
  }, []);

  const closeOverlay = useCallback((key: string) => {
    setOverlays((prevOverlays) => prevOverlays.filter((overlay) => overlay.key !== key));
  }, []);

  const contextValue = useMemo(() => ({ openOverlay }), [openOverlay]);

  return (
    <OverlayContext.Provider value={contextValue}>
      {children}
      {overlays.slice(-1).map(({ key, content }) => (
        <Fragment key={key}>{content({ close: () => closeOverlay(key), opened: true })}</Fragment>
      ))}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);

  if (context === null) {
    throw new Error('useOverlay를 사용하려면 OverlayProvider를 상위에 제공해야 합니다.');
  }

  const { openOverlay } = context;
  const open = useCallback((content: OverlayContent) => openOverlay(content), [openOverlay]);

  return useMemo(
    () => ({
      open,
    }),
    [open],
  );
};
