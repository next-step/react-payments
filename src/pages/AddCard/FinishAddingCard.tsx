import React, { useState } from 'react'
import Card, { CardInputProps } from '../../components/Card.tsx'
import Button from '../../components/Button.tsx'
import Title from '../../components/Title.tsx'

const FinishAddingCard = ({
  props,
  handleSubmit,
}: {
  props: CardInputProps
  handleSubmit: () => void
}) => {
  const [cardNickname, setCardNickname] = useState<string>('')

  return (
    <>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <Title className="mb-10">카드등록이 완료되었습니다.</Title>
          </div>
          <Card props={{ ...props, cardNickname }} />
          <div className="input-container flex-center w-100">
            <input
              className="input-underline w-75"
              type="text"
              placeholder="카드의 별칭을 입력해주세요."
              onChange={(e) => setCardNickname(e.target.value)}
            />
          </div>
          <Button onClick={handleSubmit}>확인</Button>
        </div>
      </div>
    </>
  )
}
export default FinishAddingCard
