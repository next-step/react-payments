import { createContext, PropsWithChildren, useContext, useState } from 'react'

type ModalContextType = {
  isOpen: boolean
  toggleModalOpen: () => void
}

export const ModalContext = createContext<ModalContextType | null>(null)

export const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModalOpen = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <ModalContext.Provider value={{ isOpen, toggleModalOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = useContext(ModalContext)
