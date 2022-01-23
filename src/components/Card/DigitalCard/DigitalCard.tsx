import { SerialNums } from 'pages/CardAddPage/constants'
import { Card } from '../Card'
import * as S from './style'

interface Props {
  big?: boolean
  type: string
  serialNums: SerialNums
  userName: string
  expiredDate: string
}

export function DigitalCard({ big = false, type, serialNums, userName, expiredDate }: Props) {
  const [first, second, third, fourth] = Object.values(serialNums)
  return (
    <Card big={big} type={type}>
      <S.Box>
        <S.Type>{type && `${type}카드`}</S.Type>
        <S.Chip />
        <S.SerialNums>
          <S.InputWrapper>
            <S.Input value={first} readOnly />
            <S.Input value={second} readOnly />
            <S.Input type="password" value={third} readOnly />
            <S.Input type="password" value={fourth} readOnly />
          </S.InputWrapper>
        </S.SerialNums>
        <S.Info>
          <S.UserName>{userName ? userName : 'NAME'}</S.UserName>
          <S.ExpiredDate>{expiredDate ? expiredDate : 'MM/YY'}</S.ExpiredDate>
        </S.Info>
      </S.Box>
    </Card>
  )
}
