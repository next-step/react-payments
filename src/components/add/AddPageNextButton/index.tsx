import { useNavigate } from 'react-router-dom'

import BottomButton from '$components/common/BottomButton'

interface AddPageNextButtonProps {
  disabled: boolean
}

function AddPageNextButton({ disabled }: AddPageNextButtonProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (disabled) return
    navigate('/add/complete')
  }

  return <BottomButton onClick={handleClick}>다음</BottomButton>
}

export default AddPageNextButton
