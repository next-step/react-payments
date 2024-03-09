import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

export interface OverlayContextValue {
  open: (id: number) => (element: ReactNode) => void
  close: (id: number) => () => void
}

export interface OverlayState {
  id: number
  element: ReactNode
}

export const OverlayContext = createContext<OverlayContextValue | null>(null)

export const OverlayContextProvider = ({ children }: PropsWithChildren) => {
  const [overlay, setOverlay] = useState<OverlayState[]>([])

  const openOverlay = useCallback(
    (id: number) => (element: ReactNode) => {
      setOverlay(prev => [...prev, { id, element }])
    },
    [],
  )

  const closeOverlay = useCallback(
    (_id: number) => () => {
      setOverlay(prev => prev.filter(({ id }) => id !== _id))
    },
    [],
  )

  const contextValue = useMemo(
    () => ({
      open: openOverlay,
      close: closeOverlay,
    }),
    [openOverlay, closeOverlay],
  )

  return (
    <OverlayContext.Provider value={contextValue}>
      {overlay.map(({ element: OverlayElement }) => OverlayElement)}
      {children}
    </OverlayContext.Provider>
  )
}

export const useOverlayContext = () => {
  const context = useContext(OverlayContext)
  if (!context) throw new Error('OverlayContext should be used in OverlayContextProvider')
  return context
}
