import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
} from '../../../../components/Form/FormInput'
import Styled from './index.style'
import { ReactComponent as Icon } from '../../../../assets/target.svg'

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

  return (
    <Styled.CvcContainer>
      <Styled.CvcInputContainer>
        <FormArea label="보안코드(CVC/CVV)">
          <FormInputBox>
            <FormInput type="password" ref={inputCvc} maxLength={3} />
          </FormInputBox>
        </FormArea>
      </Styled.CvcInputContainer>
      <Icon />
    </Styled.CvcContainer>
  )
})

export default React.memo(CardCvcInput)
