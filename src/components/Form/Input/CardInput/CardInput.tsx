import Label from '../Label'
import * as S from './style'
import { LabelProps } from '../Label'

interface Props extends LabelProps {
  errMessages?: string
}

export default function CardInput({ labelName, errMessages, labelRight, ...props }: Props) {
  return (
    <S.Box>
      <Label labelName={labelName} labelRight={labelRight}>
        <S.Input {...props} />
        {errMessages && <span>{errMessages}</span>}
      </Label>
    </S.Box>
  )
}
