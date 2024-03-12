import React, { useState } from 'react'
import AddCardInfo from './AddCard.tsx'
import FinishAddingCard from './FinishAddingCard.tsx'

export interface CardData {
  cardNumberOne: string
  cardNumberTwo: string
  cardNumberThree: string
  cardNumberFour: string
  expiredMonth: string
  expiredYear: string
  ownerName: string
  CVC: string
  cardPasswordOne: string
  cardPasswordTwo: string
}
const AddCard = () => {
  const [step, setStep] = useState<'카드정보' | '카드선택' | '생성완료'>(
    '카드정보'
  )

  const [inputs, setInputs] = useState<CardData>({
    cardNumberOne: '',
    cardNumberTwo: '',
    cardNumberThree: '',
    cardNumberFour: '',
    expiredMonth: '',
    expiredYear: '',
    ownerName: '',
    CVC: '',
    cardPasswordOne: '',
    cardPasswordTwo: '',
  })

  return (
    <div>
      {step === '카드정보' && (
        <AddCardInfo
          inputs={inputs}
          setInputs={setInputs}
          handleSubmit={() => {
            setStep('생성완료')
          }}
        />
      )}
      {/* {step==='카드선택'&& <ChooseCard />} */}
      {step === '생성완료' && (
        <FinishAddingCard
          props={{
            cardNumberOne: inputs.cardNumberOne,
            cardNumberTwo: inputs.cardNumberTwo,
            ownerName: inputs.ownerName,
            expiredMonth: inputs.expiredMonth,
            expiredYear: inputs.expiredYear,
          }}
        />
      )}
    </div>
  )
}
export default AddCard
