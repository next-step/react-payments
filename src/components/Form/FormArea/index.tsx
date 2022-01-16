import { ReactNode } from 'react'
import Styled from './index.style'

interface FormAreaProps {
  children: ReactNode
  label: string
  errorMessage?: string
  maxLength?: number
}

const FormArea = ({
  label,
  children,
  errorMessage,
  maxLength,
}: FormAreaProps) => {
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
      <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
    </Styled.Container>
  )
}

export default FormArea
