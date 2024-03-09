import { useOverlayContext } from '@/contexts/overlay-context'

let overlayId = 0
export const useOverlay = () => {
  const currentOverlayId = overlayId++
  const { open, close } = useOverlayContext()

  return [open(currentOverlayId), close(currentOverlayId)] as const
}
