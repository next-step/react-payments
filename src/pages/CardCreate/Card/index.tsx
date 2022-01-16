import { useEffect, useMemo, useState } from 'react'
import { CardFormProps } from '..'
import { CardProps } from '../../../components/Card/Card'
import { useFormChangedState } from '../../../context/Form/hooks'
import CardExpire from './CardExpire'
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

  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

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
      case 'expireAtMonth':
        setMonth(formRef.current?.expiredAtMonth() ?? '')
        break
      case 'expireAtYear':
        setYear(formRef.current?.expiredAtYear() ?? '')
        break

      default:
        break
    }
  }, [formRef, state, stateKeys])

  useEffect(() => {
    console.log('parameter is changed', month, year)
  }, [year, month])
  return (
    <Styled.Card>
      <Styled.CardTop>
        <Styled.CardText>클린카드</Styled.CardText>
      </Styled.CardTop>
      <Styled.CardMiddle>
        <Styled.CardSmallChip />
      </Styled.CardMiddle>
      <Styled.CardBottom>
        <CardNumber
          number1={number1}
          number2={number2}
          number3={number3}
          number4={number4}
        />
        <Styled.CardBottomInfo>
          <Styled.CardText>NAME</Styled.CardText>
          <CardExpire month={month} year={year} />
        </Styled.CardBottomInfo>
      </Styled.CardBottom>
    </Styled.Card>
  )
}

export default Card
