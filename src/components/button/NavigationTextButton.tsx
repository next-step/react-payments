import { useNavigate } from 'react-router-dom'

type Destination = '/card-add' | '/card-completed' | '/'

interface NavigationTextButtonProps {
  additionalClassNames?: string
  text: string
  preNavigation?: () => void
  to: Destination
}

const NavigationTextButton = ({ additionalClassNames = '', text, preNavigation, to }: NavigationTextButtonProps) => {
  const navigate = useNavigate()

  const goToSpecifiedPage = (to: Destination) => {
    if (preNavigation) {
      preNavigation()
    }
    navigate(to)
  }
  return (
    <div className={`button-box ${additionalClassNames}`}>
      <button onClick={() => goToSpecifiedPage(to)} className="button-text">
        {text}
      </button>
    </div>
  )
}

export default NavigationTextButton
