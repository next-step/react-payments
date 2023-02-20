import { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

type ContextPortalProps = {
  children: React.ReactNode
  wrapperId: string
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const appendId = document.getElementById(wrapperId)
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

const ContextPortal = ({ children, wrapperId }: ContextPortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<Element | null>(null)

  useLayoutEffect(() => {
    const element =
      document.getElementById(wrapperId) || (createWrapperAndAppendToBody(wrapperId) as Element)
    setWrapperElement(element)

    return () => {
      if (element?.parentNode) {
        element.parentNode?.removeChild(element)
      }
    }
  }, [wrapperId])

  if (!wrapperElement) return null
  return createPortal(children, wrapperElement)
}

export default ContextPortal
