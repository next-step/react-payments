import { NavigationButton } from '@/components/button'
import { Toast } from '@/components/toast'

import { useNavigationButtonWithValidation } from './hooks'

type Destination = '/card-add' | '/card-completed' | '/'

interface NavigationButtonWithValidationProps {
  additionalClassNames?: string
  text: string
  to: Destination
}

const NavigationButtonWithValidation = (props: NavigationButtonWithValidationProps) => {
  const { openToast, setOpenToast, onBeforeNavigate, isValidCardInfo } = useNavigationButtonWithValidation()

  return (
    <>
      <Toast open={openToast} onOpenChange={setOpenToast} title="입력정보가 올바른지 확인해주세요❗️" />
      <NavigationButton {...props} isNavigationEnabled={isValidCardInfo} onBeforeNavigate={onBeforeNavigate} />
    </>
  )
}

export default NavigationButtonWithValidation
