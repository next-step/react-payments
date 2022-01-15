import { Card } from '../Card'
import * as S from './style'

interface Props {
  big?: boolean
  name: string
  serialNums: string
  userName: string
  expiredDate: string
}

export function DigitalCard({ big = false, name, serialNums, userName, expiredDate }: Props) {
  return (
    <Card big={big}>
      <S.Box>
        <S.Name>{name}</S.Name>
        <S.Chip />
        <S.SerialNums>{serialNums}</S.SerialNums>
        <S.Info>
          <S.UserName>{userName}</S.UserName>
          <S.ExpiredDate>{expiredDate}</S.ExpiredDate>
        </S.Info>
      </S.Box>
    </Card>
  )
}
