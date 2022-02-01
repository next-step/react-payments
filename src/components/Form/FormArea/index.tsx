import { ReactNode } from 'react'
import Styled from './index.style'

interface FormAreaProps {
  children: ReactNode
  label: string
  errorMessage?: string
  maxLength?: number
  rightLabel?: ReactNode
}

const FormArea = ({
  label,
  children,
  errorMessage,
  maxLength,
  rightLabel,
}: FormAreaProps) => {
  return (
    <Styled.Container>
      {maxLength ? (
        <Styled.LabelContainer>
          <Styled.Label>{label}</Styled.Label>
          {rightLabel && rightLabel}
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
