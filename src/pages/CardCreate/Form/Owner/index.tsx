import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
} from '../../../../components/Form/FormInput'
import { useFormChangedDispatch } from '../../../../context/Form/hooks'

type CardOwnerHandle = {
  owner: () => string
}

const CardOwnerInput = forwardRef<CardOwnerHandle, {}>((props, ref) => {
  const inputOwner = useRef<FormInputElementRef | null>(null)
  const [ownerNameLength, setOwnerNameLength] = useState(0)

  const dispatch = useFormChangedDispatch()

  useImperativeHandle(ref, () => ({
    owner() {
      return inputOwner.current?.value() ?? ''
    },
  }))

  const onChange = (name: 'owner') => () => {
    dispatch({ type: 'CHANGE', payload: { name } })
    setOwnerNameLength((inputOwner.current?.value() ?? '').length)
  }

  return (
    <FormArea
      label="카드 소유자 이름(선택)"
      maxLength={30}
      currentLength={ownerNameLength}
    >
      <FormInputBox>
        <FormInput
          numberOnly={false}
          ref={inputOwner}
          maxLength={30}
          textAlign="left"
          onChange={onChange('owner')}
        />
      </FormInputBox>
    </FormArea>
  )
})

export default React.memo(CardOwnerInput)
