import { useEffect, useMemo, useState } from 'react'
import { CardFormProps } from '..'
import { CardProps } from '../../../components/Card'
import { useFormChangedState } from '../../../context/Form/hooks'
import CardNumber from './CardNumber'
import Styled from './index.style'

type CardModelKeys = (keyof CardProps)[]
interface CardProp {
  formRef: React.RefObject<CardFormProps>
}
const Card = ({ formRef }: CardProp) => {
  const state = useFormChangedState()
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [number3, setNumber3] = useState('')
  const [number4, setNumber4] = useState('')

  const stateKeys = useMemo(() => Object.keys(state) as CardModelKeys, [state])

  useEffect(() => {
    const key = stateKeys.filter((key) => state[key] === true)[0]

    switch (key) {
      case 'number1':
        setNumber1(formRef.current?.cardNumber1() ?? '')
        break
      case 'number2':
        setNumber2(formRef.current?.cardNumber2() ?? '')
        break
      case 'number3':
        setNumber3(formRef.current?.cardNumber3() ?? '')
        break
      case 'number4':
        setNumber4(formRef.current?.cardNumber4() ?? '')
        break
    }
  }, [formRef, state, stateKeys])

  return (
    <Styled.Card>
      <Styled.CardTop>
        <Styled.CardText>클린카드</Styled.CardText>
      </Styled.CardTop>
      <Styled.CardMiddle>
        <Styled.CardSmallChip />
      </Styled.CardMiddle>
      <Styled.CardBottom>
        {/* <Styled.CardBottomNumber>
          <Styled.CardText>
            {number1} - {number2} - {number3} - {number4}
          </Styled.CardText>
        </Styled.CardBottomNumber> */}
        <CardNumber
          number1={number1}
          number2={number2}
          number3={number3}
          number4={number4}
        />
        <Styled.CardBottomInfo>
          <Styled.CardText>NAME</Styled.CardText>
          <Styled.CardText>MM / YY</Styled.CardText>
        </Styled.CardBottomInfo>
      </Styled.CardBottom>
    </Styled.Card>
  )
}

export default Card
