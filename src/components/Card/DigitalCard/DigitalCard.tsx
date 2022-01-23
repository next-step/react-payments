import { SerialNums } from 'pages/CardAddPage/constants'
import { Card } from '../Card'
import * as S from './style'

interface Props {
  big?: boolean
  type: string
  serialNums: SerialNums
  ownerName: string
  expiredDate: string
}

export function DigitalCard({ big = false, type, serialNums, ownerName, expiredDate }: Props) {
  const [first, second, third, fourth] = Object.values(serialNums)
  return (
    <Card big={big}>
      <S.Box type={type}>
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
          <S.OwnerName>{ownerName ? ownerName : 'NAME'}</S.OwnerName>
          <S.ExpiredDate>{expiredDate ? expiredDate : 'MM/YY'}</S.ExpiredDate>
        </S.Info>
      </S.Box>
    </Card>
  )
}
