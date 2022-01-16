import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
} from '../../../../components/Form/FormInput'
import Styled from './index.style'
import { ReactComponent as Icon } from '../../../../assets/target.svg'
import { CREATE_CARD_CVC, CREATE_CARD_PASSWORD1 } from '../constants/id'

type CardCvcHandle = {
  cvc: () => string
}

const CardCvcInput = forwardRef<CardCvcHandle, {}>((props, ref) => {
  const inputCvc = useRef<FormInputElementRef | null>(null)

  useImperativeHandle(ref, () => ({
    cvc() {
      return inputCvc.current?.value() ?? ''
    },
  }))

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length !== 3) {
      return
    }
    document.getElementById(CREATE_CARD_PASSWORD1)?.focus()
  }

  return (
    <Styled.CvcContainer>
      <Styled.CvcInputContainer>
        <FormArea label="보안코드(CVC/CVV)">
          <FormInputBox>
            <FormInput
              id={CREATE_CARD_CVC}
              type="password"
              ref={inputCvc}
              maxLength={3}
              onChange={onChange}
            />
          </FormInputBox>
        </FormArea>
      </Styled.CvcInputContainer>
      <Icon />
    </Styled.CvcContainer>
  )
})

export default React.memo(CardCvcInput)
