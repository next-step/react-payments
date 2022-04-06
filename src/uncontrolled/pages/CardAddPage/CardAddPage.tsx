import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import DigitalCard from 'uncontrolled/components/Card/DigitalCard'
import CardExpiredDateFieldSet from 'uncontrolled/components/Form/FieldSet/CardExpiredDateFieldSet'
import CardNumsFieldSet from 'uncontrolled/components/Form/FieldSet/CardNumsFieldSet'
import CardPasswordFieldSet from 'uncontrolled/components/Form/FieldSet/CardPasswordFieldSet'
import CardOwnerNameInput from 'uncontrolled/components/Form/Input/CardOwnerNameInput'
import CardCvcInput from 'uncontrolled/components/Form/Input/CardCvcInput'

export default function UnControlledCardAddPage() {
  const navigate = useNavigate()
  const [cardsData, setCardsData] = useState({
    cardNums: ['', ''],
    expiredDate: ['', ''],
    ownerName: '',
  })

  const cardInputRef = useRef<any>({})

  const handleFormChange = (e: React.FormEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return
    const [fieldName, fieldIndexValue] = e.target.name.split('-')
    const fieldIndex = parseInt(fieldIndexValue, 10)
    if (fieldName === 'cardNums' && fieldIndex <= 2) {
      const cardNums = cardInputRef.current.getFirstAndSecondCardNums()
      setCardsData({ ...cardsData, cardNums })
    }
  }
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Box>
      <Header>
        <Button onClick={() => navigate(-1)}>&lt;</Button>
        <H1>카드 추가</H1>
      </Header>
      <Main>
        <form onSubmit={handleFormSubmit} onChange={handleFormChange}>
          <DigitalCardBlock>
            <DigitalCard />
          </DigitalCardBlock>
          <CardNumsFieldSet ref={cardInputRef} />
          <CardExpiredDateFieldSet ref={cardInputRef} />
          <CardOwnerNameInput ref={cardInputRef} />
          <CardCvcInput ref={cardInputRef} />
          <CardPasswordFieldSet ref={cardInputRef} />
          <NextButton ref={(el) => (cardInputRef.current.nextButton = el)}>다음</NextButton>
        </form>
      </Main>
    </Box>
  )
}

const Box = styled.div`
  height: 100%;
  padding: 20px 24px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
`

const Button = styled.button`
  border: none;
  background: none;
  font-size: 20px;
`

const H1 = styled.h1`
  font-size: 20px;
  margin: 0 4px;
`

const Main = styled.main`
  margin-top: 20px;
  position: relative;
`

const DigitalCardBlock = styled.div`
  display: flex;
  justify-content: center;
`

const NextButton = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  color: #04c09e;
  position: absolute;
  right: 0;
`
