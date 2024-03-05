import React from 'react'
import Card from '../../components/Card.tsx'
import Button from '../../components/Button.tsx'
import { useNavigate } from 'react-router-dom'
import Title from '../../components/Title.tsx'
const FinishAddingCard = () => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate('/list')
  }

  return (
    <>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
          <Title className="mb-10">카드등록이 완료되었습니다.</Title>
          </div>
          <Card />
          <div className="input-container flex-center w-100">
            <input
              className="input-underline w-75"
              type="text"
              placeholder="카드의 별칭을 입력해주세요."
            />
          </div>
          <Button onClick={handleOnClick}>확인</Button>
        </div>
      </div>
    </>
  )
}
export default FinishAddingCard
