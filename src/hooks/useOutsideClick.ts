import { useEffect, RefObject } from 'react'

const useOutsideClick = (ref: RefObject<HTMLElement>, closeModal: () => void) => {
  useEffect(() => {
    const onClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        closeModal()
      }
    }

    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('mousedown', onClick)
    }
  }, [closeModal, ref])
}

export default useOutsideClick
