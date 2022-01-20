import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
  InputDividerText,
} from '../../../../components/Form/FormInput'
import { useFormChangedDispatch } from '../../../../context/Form/hooks'
import {
  CREATE_EXPIRE_MONTH,
  CREATE_EXPIRE_YEAR,
  CREATE_OWNER_NAME,
} from '../constants/id'

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

  const onChange =
    (name: 'expireAtMonth' | 'expireAtYear') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'CHANGE', payload: { name } })

      if (event.currentTarget.value.length !== 2) {
        return
      }

      switch (name) {
        case 'expireAtMonth':
          document.getElementById(CREATE_EXPIRE_YEAR)?.focus()
          return
        case 'expireAtYear':
          document.getElementById(CREATE_OWNER_NAME)?.focus()
      }
    }

  return (
    <FormArea label="만료일">
      <FormInputBox>
        <FormInput
          id={CREATE_EXPIRE_MONTH}
          ref={inputMonth}
          maxLength={2}
          max={12}
          onChange={onChange('expireAtMonth')}
          placeholder="MM"
        />
        <InputDividerText color="black">/</InputDividerText>
        <FormInput
          id={CREATE_EXPIRE_YEAR}
          ref={inputYear}
          maxLength={2}
          max={31}
          onChange={onChange('expireAtYear')}
          placeholder="YY"
        />
      </FormInputBox>
    </FormArea>
  )
})

export default React.memo(CardExpireInput)
