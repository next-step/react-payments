import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import urlcat from 'urlcat'

import BottomButton from '$components/common/BottomButton'
import ROUTES from '$constants/routes'
import { useCardForm } from '$contexts/CardFormContext'

function AddPageNextButton() {
  const { cardForm } = useCardForm()
  const navigate = useNavigate()
  const [isReadyToCreate, setReadyToCreate] = useState(false)

  const handleClick = () => {
    if (!isReadyToCreate) return
    navigate(urlcat(ROUTES.DETAIL, { id: '' }))
  }

  useEffect(() => {
    setReadyToCreate(
      cardForm.number.join('').length === 16 &&
        cardForm.expireDate.month.length === 2 &&
        cardForm.expireDate.year.length === 2 &&
        cardForm.cvc.length === 3 &&
        cardForm.password.join('').length === 2,
    )
  }, [
    cardForm.cvc.length,
    cardForm.expireDate.month.length,
    cardForm.expireDate.year.length,
    cardForm.number,
    cardForm.password,
  ])

  return (
    <BottomButton onClick={handleClick} disabled={!isReadyToCreate}>
      다음
    </BottomButton>
  )
}

export default AddPageNextButton
