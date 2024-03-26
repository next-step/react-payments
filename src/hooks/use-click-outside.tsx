import { useEffect, useRef } from 'react'

export interface UseClickOutsideParams {
  onClickOutside?: () => void
  event?: 'mousedown' | 'click'
}

export const useClickOutside = <T extends HTMLElement = HTMLDivElement>({
  onClickOutside,
  event = 'mousedown',
}: UseClickOutsideParams) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as Node
      if (!ref.current || !target) return
      const isOutside = !ref.current.contains(target)
      if (isOutside) {
        onClickOutside?.()
      }
    }

    window.addEventListener(event, handleClickOutside)
    return () => window.removeEventListener(event, handleClickOutside)
  }, [event, onClickOutside])

  return ref
}
