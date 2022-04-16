import { useNavigate } from 'react-router-dom'

import BottomButton from '$components/common/BottomButton'
import ROUTES from '$constants/routes'

function DetailPageButtons() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(ROUTES.LIST)
  }

  return <BottomButton onClick={handleClick}>확인</BottomButton>
}

export default DetailPageButtons
