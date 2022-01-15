import { Card } from '../Card'
import * as S from './style'

export function BlankCard() {
  return (
    <Card>
      <S.Box>
        <S.Name />
        <S.Chip />
        <S.SerialNums />
        <S.Info>
          <S.UserName>NAME</S.UserName>
          <S.ExpiredDate>MM/YY</S.ExpiredDate>
        </S.Info>
      </S.Box>
    </Card>
  )
}
