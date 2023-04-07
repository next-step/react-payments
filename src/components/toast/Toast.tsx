import * as RadixToast from '@radix-ui/react-toast'
import { Dispatch, SetStateAction } from 'react'

interface ToastProps {
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
  title: string
  description?: string
}

const Toast = ({ open, onOpenChange, title, description }: ToastProps) => {
  return (
    <>
      <RadixToast.Provider swipeDirection="down" duration={2000}>
        <RadixToast.Root className="toast-button position-top" open={open} onOpenChange={onOpenChange}>
          <div className="flex-column gap-2">
            <RadixToast.Title className="toast-title">{title}</RadixToast.Title>
            {description && (
              <RadixToast.Description className="toast-description">{description}</RadixToast.Description>
            )}
          </div>
        </RadixToast.Root>
        <RadixToast.Viewport className="ToastViewport" />
      </RadixToast.Provider>
    </>
  )
}

export default Toast
