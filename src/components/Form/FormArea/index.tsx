import { ReactNode } from 'react'
import Styled from './index.style'

interface FormAreaProps {
  children: ReactNode
  label: string
  errorMessage?: string
  currentLength?: number
  maxLength?: number
}

const FormArea = ({
  label,
  children,
  errorMessage,
  maxLength,
  currentLength = 0,
}: FormAreaProps) => {
  return (
    <Styled.Container>
      {maxLength ? (
        <Styled.LabelContainer>
          <Styled.Label>{label}</Styled.Label>
          <Styled.Label>
            {currentLength} / {maxLength}
          </Styled.Label>
        </Styled.LabelContainer>
      ) : (
        <Styled.Label>{label}</Styled.Label>
      )}
      {children}
      <Styled.ErrorBox>
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      </Styled.ErrorBox>
    </Styled.Container>
  )
}

export default FormArea
