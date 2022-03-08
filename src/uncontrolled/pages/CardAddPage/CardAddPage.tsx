import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CardNumsFieldSet from 'uncontrolled/components/Form/FieldSet/CardNumsFieldSet'

export default function UnControlledCardAddPage() {
  const navigate = useNavigate()
  const [cardsData, setCardsData] = useState({
    cardNums: ['', ''],
    expiredDate: ['', ''],
    ownerName: '',
  })
  const cardNumsInputRef = useRef<any>([])

  const handleFormChange = (e: React.FormEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return
    const [fieldName, fieldIndex] = e.target.name.split('-')
    const fieldIndexInt = parseInt(fieldIndex)
    if (fieldName === 'cardNums' && fieldIndexInt <= 2) {
      const cardNums = cardNumsInputRef.current.getFirstAndSecondCardNums()
      setCardsData({ ...cardsData, cardNums })
    }
  }

  return (
    <Box>
      <Header>
        <Button onClick={() => navigate(-1)}>&lt;</Button>
        <H1>카드 추가</H1>
      </Header>
      <Main>
        <form onChange={handleFormChange}>
          <CardNumsFieldSet ref={cardNumsInputRef} />
          <button>hello</button>
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
  border: 1px solid red;
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
`
