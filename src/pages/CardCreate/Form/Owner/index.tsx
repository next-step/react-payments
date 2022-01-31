import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
} from '../../../../components/Form/FormInput'
import { useCardFormDispatch } from '../../../../context/Form/hooks'
import { CREATE_CARD_CVC, CREATE_OWNER_NAME } from '../constants/id'

type CardOwnerHandle = {
  owner: () => string
}

const CardOwnerInput = forwardRef<CardOwnerHandle, {}>((props, ref) => {
  const inputOwner = useRef<FormInputElementRef | null>(null)
  const [ownerNameLength, setOwnerNameLength] = useState(0)
  const dispatch = useCardFormDispatch()

  useImperativeHandle(ref, () => ({
    owner() {
      return inputOwner.current?.value() ?? ''
    },
  }))

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'RERENDER' })
    setOwnerNameLength((inputOwner.current?.value() ?? '').length)

    if (event.currentTarget.value.length !== 30) {
      return
    }

    document.getElementById(CREATE_CARD_CVC)?.focus()
  }

  return (
    <FormArea
      label="카드 소유자 이름(선택)"
      maxLength={30}
      currentLength={ownerNameLength}
    >
      <FormInputBox>
        <FormInput
          id={CREATE_OWNER_NAME}
          numberOnly={false}
          ref={inputOwner}
          maxLength={30}
          textAlign="left"
          onChange={onChange}
        />
      </FormInputBox>
    </FormArea>
  )
})

export default React.memo(CardOwnerInput)
