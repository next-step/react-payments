import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
  InputDividerText,
} from '../../../../components/Form/FormInput'
import { useFormChangedDispatch } from '../../../../context/Form/hooks'

type CardExpireHandle = {
  expireAtMonth: () => string
  expireAtYear: () => string
}

const CardExpireInput = forwardRef<CardExpireHandle, {}>((props, ref) => {
  const inputMonth = useRef<FormInputElementRef | null>(null)
  const inputYear = useRef<FormInputElementRef | null>(null)
  const dispatch = useFormChangedDispatch()

  useImperativeHandle(ref, () => ({
    expireAtMonth() {
      return inputMonth.current?.value() ?? ''
    },
    expireAtYear() {
      return inputYear.current?.value() ?? ''
    },
  }))

  const onChange = (name: 'expireAtMonth' | 'expireAtYear') => () => {
    dispatch({ type: 'CHANGE', payload: { name } })
  }

  return (
    <FormArea label="만료일">
      <FormInputBox>
        <FormInput
          ref={inputMonth}
          maxLength={2}
          max={12}
          onChange={onChange('expireAtMonth')}
          placeholder="MM"
        />
        <InputDividerText color="black">/</InputDividerText>
        <FormInput
          ref={inputYear}
          maxLength={2}
          onChange={onChange('expireAtYear')}
          placeholder="YY"
        />
      </FormInputBox>
    </FormArea>
  )
})

export default React.memo(CardExpireInput)
