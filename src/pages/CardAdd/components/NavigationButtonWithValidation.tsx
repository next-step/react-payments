import { NavigationButton } from '@/components/button'
import { Toast } from '@/components/toast'

type Destination = '/card-add' | '/card-completed' | '/'

interface NavigationButtonWithValidationProps {
  additionalClassNames?: string
  text: string
  to: Destination
  openValidToast?: boolean
  setOpenValidToast?: React.Dispatch<React.SetStateAction<boolean>>
  onBeforeNavigate?: () => void
  isNavigationEnabled?: () => boolean
}

const NavigationButtonWithValidation = (props: NavigationButtonWithValidationProps) => {
  const { openValidToast, setOpenValidToast } = props

  return (
    <>
      <Toast open={openValidToast} onOpenChange={setOpenValidToast} title="입력정보가 올바른지 확인해주세요❗️" />
      <NavigationButton {...props} />
    </>
  )
}

export default NavigationButtonWithValidation
