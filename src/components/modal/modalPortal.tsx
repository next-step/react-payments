import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const ModalPortal = ({ children }: any) => {
  const [elem, setElem] = useState<HTMLElement | null>(null)
  useEffect(() => {
    const $root = document.getElementById('modalRoot')
    if (!$root) return
    setElem($root)
    $root.classList.add('show')

    return () => {
      $root.classList.remove('show')
    }
  }, [])

  return elem ? createPortal(children, elem) : null
}

export default ModalPortal
