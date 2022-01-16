import { useEffect, useMemo, useState } from 'react'
import { CardFormProps } from '..'
import Card from '../../../components/Card'
import {
  CardBaseFormProps,
  CardType,
  CardTypeAccordingToStartsWith,
} from '../../../components/Form'
import { useFormChangedState } from '../../../context/Form/hooks'

type CardModelKeys = (keyof CardBaseFormProps)[]
interface CreateCardProp {
  formRef: React.RefObject<CardFormProps>
}
const CreateCard = ({ formRef }: CreateCardProp) => {
  const state = useFormChangedState()
  const [type, setType] = useState<CardType>()
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [number3, setNumber3] = useState('')
  const [number4, setNumber4] = useState('')

  const [name, setName] = useState('')

  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  useEffect(() => {
    if (number1.length === 4 && number2.length === 4) {
      const startNumber =
        +number1[0] as keyof typeof CardTypeAccordingToStartsWith
      setType(CardTypeAccordingToStartsWith[startNumber])
    }
  }, [number1, number2])

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
      case 'owner':
        setName(formRef.current?.owner() ?? '')
        break

      default:
        break
    }
  }, [formRef, state, stateKeys])

  return (
    <Card
      type={type}
      number1={number1}
      number2={number2}
      number3={number3}
      number4={number4}
      month={month}
      year={year}
      name={name}
    />
  )
}

export default CreateCard
