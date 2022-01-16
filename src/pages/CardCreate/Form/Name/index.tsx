import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
} from '../../../../components/Form/FormInput'
import { useFormChangedDispatch } from '../../../../context/Form/hooks'

type CardNameHandle = {
  name: () => string
}

const CardNameInput = forwardRef<CardNameHandle, {}>((props, ref) => {
  const inputName = useRef<FormInputElementRef | null>(null)
  const [nameLength, setNameLength] = useState(0)

  const dispatch = useFormChangedDispatch()

  useImperativeHandle(ref, () => ({
    name() {
      return inputName.current?.value() ?? ''
    },
  }))

  const onChange = (name: 'name') => () => {
    dispatch({ type: 'CHANGE', payload: { name } })
    setNameLength((inputName.current?.value() ?? '').length)
  }

  return (
    <FormArea
      label="카드 소유자 이름(선택)"
      maxLength={30}
      currentLength={nameLength}
    >
      <FormInputBox>
        <FormInput
          numberOnly={false}
          ref={inputName}
          maxLength={30}
          textAlign="left"
          onChange={onChange('name')}
        />
      </FormInputBox>
    </FormArea>
  )
})

export default React.memo(CardNameInput)
