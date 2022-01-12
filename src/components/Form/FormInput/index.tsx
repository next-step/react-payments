import { ReactNode } from 'react'
import { CardProps } from '../../Card'
import Styled from './index.style'

interface FormInputProps {
  card: CardProps
  children: ReactNode
  label: string
  errorMessage?: string
  maxLength?: number
}

const FormInput = ({
  label,
  children,
  errorMessage,
  maxLength,
}: FormInputProps) => {
  return (
    <Styled.Container>
      {maxLength ? (
        <Styled.LabelContainer>
          <Styled.Label>{label}</Styled.Label>
          <Styled.Label>
            {maxLength} / {maxLength}
          </Styled.Label>
        </Styled.LabelContainer>
      ) : (
        <Styled.Label>{label}</Styled.Label>
      )}
      {children}
      {errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}
    </Styled.Container>
  )
}

export { FormInput }
