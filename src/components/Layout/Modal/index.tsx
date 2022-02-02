import { ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Styled from './index.style'

const modalRoot = document.getElementById('modal') as HTMLElement

interface ModalProps {
  isOpen: boolean
  onClose?: () => void
  children: ReactNode
}

const Container = ({
  children,
  onClose = () => {},
}: Pick<ModalProps, 'children' | 'onClose'>) => {
  useEffect(() => {
    return () => onClose()
  }, [onClose])

  return (
    <Styled.Container>
      <Styled.RelativeBox>{children}</Styled.RelativeBox>
    </Styled.Container>
  )
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return isOpen
    ? createPortal(
        <Container onClose={onClose}>
          <Styled.ModalContainer>{children}</Styled.ModalContainer>
        </Container>,
        modalRoot
      )
    : null
}

export default Modal
