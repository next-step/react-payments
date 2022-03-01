import { EXPIRED_DATE } from 'controlled/pages/CardAddPage/constants'
import FieldSet from '../FieldSet'
import * as S from './style'

interface Props {
  expiredDate: typeof EXPIRED_DATE
  errorMessage?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CardExpiredDateFieldSet({ expiredDate, errorMessage, onChange }: Props) {
  const [mm, yy] = Object.keys(expiredDate)
  const [mmValue, yyValue] = Object.values(expiredDate)
  return (
    <FieldSet legend="만료일" errorMessage={errorMessage}>
      <S.Wrapper>
        <S.Input
          type="number"
          name={mm}
          value={mmValue}
          onChange={onChange}
          pattern="[0-9]{2}"
          placeholder="MM"
        />
        <S.Divider color={mmValue}>/</S.Divider>
        <S.Input
          type="number"
          name={yy}
          value={yyValue}
          onChange={onChange}
          pattern="[0-9]{2}"
          placeholder="YY"
        />
      </S.Wrapper>
    </FieldSet>
  )
}
