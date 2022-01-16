import React, { forwardRef, KeyboardEvent } from 'react'
import { useImperativeHandle } from 'react'
import { ReactNode } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import { ChangeEvent, MutableRefObject } from 'react'
import Styled from './index.style'

interface FormInputProps {
  ref?: MutableRefObject<HTMLInputElement | null>
  placeholder?: string
  type: 'number' | 'password'
  maxLength?: number
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

type FormInputHandle = {
  value: () => string
}

export type FormInputElementRef = React.ElementRef<typeof FormInput>

const FormInput = forwardRef<FormInputHandle, FormInputProps>(
  ({ maxLength, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const onKeyPress = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        if (isNaN(+event.key)) {
          event.preventDefault()
        }

        if (!maxLength) {
          return
        }

        if (maxLength <= event.currentTarget.value.length) {
          event.preventDefault()
        }
      },
      [maxLength]
    )

    useImperativeHandle(ref, () => ({
      value() {
        return inputRef.current?.value ?? ''
      },
    }))

    return <Styled.Input ref={inputRef} {...rest} onKeyPress={onKeyPress} />
  }
)

const FormInputBox = ({ children }: { children: ReactNode }) => (
  <Styled.InputBox>{children}</Styled.InputBox>
)

const InputDividerText = ({
  color,
  children,
}: {
  color: 'black' | 'green'
  children: ReactNode
}) => <Styled.InputDivider color={color}>{children}</Styled.InputDivider>

export { FormInputBox, InputDividerText }

export default FormInput
