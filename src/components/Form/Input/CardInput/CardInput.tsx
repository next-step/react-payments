import styled from 'styled-components'
import Label from '../Label'
import * as S from './style'
import { LabelProps } from '../Label'

interface Props extends LabelProps {
  errorMessage?: string
}

export default function CardInput({ labelName, errorMessage, labelRight, ...props }: Props) {
  return (
    <S.Box>
      <Label labelName={labelName} labelRight={labelRight}>
        <S.Input id={labelName} {...props} />
        {errorMessage && <Error>{errorMessage}</Error>}
      </Label>
    </S.Box>
  )
}

const Error = styled.span`
  display: inline-block;
  padding: 4px 0;
  color: red;
`
