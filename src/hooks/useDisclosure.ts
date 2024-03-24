import { useCallback, useState } from 'react'

type useDisclosureParams = Partial<{
  defaultOpened: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}>

export const useDisclosure = ({
  defaultOpened = false,
  onOpen,
  onClose,
  onToggle
}: useDisclosureParams = {}) => {
  const [opened, setOpened] = useState(defaultOpened)

  const handleOpen = useCallback(() => {
    setOpened(true)
    onOpen?.()
  }, [onOpen])

  const handleClose = useCallback(() => {
    setOpened(false)
    onClose?.()
  }, [onClose])

  const handleToggle = useCallback(() => {
    setOpened(false)
    onToggle?.()
  }, [onToggle])

  return {
    opened,
    open: handleOpen,
    close: handleClose,
    toggle: handleToggle
  }
}
