import {
  forwardRef,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import FormItem, { FormInputProps } from '../../components/Form/FormItem'
import Header from '../../components/Layout/Header'
import withForwardRef from '../../hoc/WithForwardRef'
import Card from './Card'
import Styled from './index.style'

// interface CardCreateFormProps {
// cardNumber?: string
// expireDate?: string
// cvc?: string
// password?: string
// name?: string
// }

const CardCreate = () => {
  const formRef = useRef<WrapperHandle | null>(null)

  const NumberInput = withForwardRef<FormInputProps, WrapperHandle>(
    FormItem,
    () => ({ value1: '1', value2: '1' })
  )
  const handleSubmit = () => {
    if (!formRef.current) {
      return
    }

    console.log(formRef.current)
    // console.log(formRef.current.value2)
  }

  useEffect(() => {
    // console.log(formRef.current?.value1)
  }, [formRef])
  return (
    <>
      <Header title="카드추가" lintTo="/" />
      <Styled.CardCreateContainer>
        <Card />
        <NumberInput
          forwardedRef={formRef}
          label="dd"
          children={<Wrapper ref={formRef} />}
        />
        <button onClick={handleSubmit}>버튼</button>
      </Styled.CardCreateContainer>
    </>
  )
}

interface WrapperWrapperProps {
  formRef: MutableRefObject<WrapperHandle | null>
}

const WrapperWrapper = ({ formRef }: WrapperWrapperProps) => {
  return (
    <div>
      ㅇ안뇽ㅇ!!
      <Wrapper ref={formRef} />
    </div>
  )
}
type WrapperElement = React.ElementRef<typeof Wrapper>
type InputElement = React.ElementRef<typeof Input>
type Input2Element = React.ElementRef<typeof Input2>

type WrapperProps = {}
type WrapperHandle = {
  // values: () => {
  // value1: string
  // value2: string
  // },
  value1: string
  value2: string
}

type Value1RefProps = {}
type Value1RefHandle = {
  value1: () => string
}

type Value2RefProps = {}
type Value2RefHandle = {
  value2: () => string
  value3: () => string
}

const Wrapper = forwardRef<WrapperHandle, WrapperProps>((props, ref) => {
  const value1Ref = useRef<InputElement | null>(null)
  const value2Ref = useRef<Input2Element | null>(null)

  useImperativeHandle(
    ref,
    // () => ({
    // values() {
    // return {
    // value1: value1Ref.current?.value1() ?? '',
    // value2:
    // (value2Ref.current?.value2() ?? '') + value2Ref.current?.value3() ??
    // '',
    // }
    // },
    // }
    () => ({
      value1: value1Ref.current?.value1() ?? '',
      value2:
        (value2Ref.current?.value2() ?? '') +
        (value2Ref.current?.value3() ?? ''),
    })
  )
  return (
    <>
      <Input ref={value1Ref} />
      <Input2 ref={value2Ref} />
    </>
  )
})

const Input = forwardRef<Value1RefHandle, Value1RefProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useImperativeHandle(ref, () => ({
    value1() {
      return inputRef.current?.value ?? ''
    },
  }))

  return <input ref={inputRef} />
})

const Input2 = forwardRef<Value2RefHandle, Value2RefProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const inputRef2 = useRef<HTMLInputElement | null>(null)

  useImperativeHandle(
    ref,
    () => ({
      value2() {
        return inputRef.current?.value ?? ''
      },
      value3() {
        return inputRef2.current?.value ?? ''
      },
    }),
    [inputRef, inputRef2]
  )

  return (
    <>
      <input ref={inputRef} />
      <input type="password" ref={inputRef2} />
      {/* <input ref={inputRef2} /> */}
    </>
  )
})

export default CardCreate
