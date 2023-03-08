import { DialogLayout } from 'components/ui/DialogLayout'
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'

type DialogContextType = {
  isOpen: boolean
  openDialog: (options: OpenDialogOptions) => void
  closeDialog: () => void
}

type OpenDialogOptions = {
  component: React.ReactNode
}

export const DialogContext = createContext<DialogContextType>(
  {} as DialogContextType,
)

export const DialogProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [component, setComponent] = useState<React.ReactNode | null>(null)

  const openDialog = (options: OpenDialogOptions) => {
    setComponent(options.component)
    setIsOpen(true)
  }
  const closeDialog = () => {
    setIsOpen(false)
    setComponent(null)
  }
  return (
    <DialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
      {isOpen && <DialogLayout>{component}</DialogLayout>}
    </DialogContext.Provider>
  )
}

export const useDialogContext = () => useContext(DialogContext)
