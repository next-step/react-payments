import { useNavigate } from 'react-router-dom'

type Destination = '/card-add' | '/card-completed' | '/'

interface NavigationButtonProps {
  additionalClassNames?: string
  text: string
  onBeforeNavigate?: () => void
  to: Destination
  isNavigationEnabled?: boolean
}

const NavigationButton = ({
  additionalClassNames = '',
  text,
  onBeforeNavigate,
  to,
  isNavigationEnabled = true,
}: NavigationButtonProps) => {
  const navigate = useNavigate()

  const goToSpecifiedPage = async (to: Destination) => {
    if (onBeforeNavigate) {
      await Promise.resolve(onBeforeNavigate())
    }
    if (isNavigationEnabled) {
      navigate(to)
    }
  }

  return (
    <div className={`button-box ${additionalClassNames}`}>
      <button onClick={() => goToSpecifiedPage(to)} className="button-text">
        {text}
      </button>
    </div>
  )
}

export default NavigationButton
