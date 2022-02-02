import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
} from '../../../../components/Form/FormInput'
import { useCardFormDispatch } from '../../../../context/Form/hooks'
import { CREATE_CARD_CVC, CREATE_OWNER_NAME } from '../constants/id'
import Styled from './index.style'

const MAX_OWNER_NAME_LENGTH = 30

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

  const MaxLengthLabel = (
    <Styled.Label>
      {ownerNameLength} / {MAX_OWNER_NAME_LENGTH}
    </Styled.Label>
  )

  return (
    <FormArea
      label="카드 소유자 이름(선택)"
      maxLength={MAX_OWNER_NAME_LENGTH}
      rightLabel={MaxLengthLabel}
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
