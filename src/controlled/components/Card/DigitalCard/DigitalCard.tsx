import { SERIAL_NUMS, EXPIRED_DATE } from 'controlled/pages/CardAddPage/constants'
import { Card } from '../Card'
import * as S from './style'

interface Props {
  big?: boolean
  type: string
  serialNums: typeof SERIAL_NUMS
  ownerName: string
  expiredDate: typeof EXPIRED_DATE
}

export function DigitalCard({ big = false, type, serialNums, ownerName, expiredDate }: Props) {
  const [first, second, third, fourth] = Object.values(serialNums)
  const [mm, yy] = Object.values(expiredDate)
  return (
    <Card big={big}>
      <S.Box bgColor={type}>
        <S.Type>{type && `${type}카드`}</S.Type>
        <S.Chip />
        <S.SerialNums>
          <S.Wrapper>
            <S.Input value={first} readOnly />
            <S.Input value={second} readOnly />
            <S.Input type="password" value={third} readOnly />
            <S.Input type="password" value={fourth} readOnly />
          </S.Wrapper>
        </S.SerialNums>
        <S.Info>
          <S.OwnerName>{ownerName ? ownerName : 'NAME'}</S.OwnerName>
          <S.ExpiredDate>{mm ? `${mm} / ${yy}` : 'MM/YY'}</S.ExpiredDate>
        </S.Info>
      </S.Box>
    </Card>
  )
}
