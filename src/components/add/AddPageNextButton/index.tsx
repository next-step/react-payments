import { useNavigate } from 'react-router-dom'

import BottomButton from '$components/common/BottomButton'

function AddPageNextButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/add/complete')
  }

  return <BottomButton onClick={handleClick}>다음</BottomButton>
}

export default AddPageNextButton
