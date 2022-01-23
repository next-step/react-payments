import { SerialNums } from 'pages/CardAddPage/constants'
import FieldSet from '../FieldSet'
import * as S from './style'

interface Props {
  serialNums: SerialNums
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CardSerialNumsFieldSet({ serialNums, onChange }: Props) {
  const [first, second, third, fourth] = Object.keys(serialNums)
  const [firstVal, secondVal, thirdVal, fourthVal] = Object.values(serialNums)

  return (
    <S.Box>
      <FieldSet legend="카드번호">
        <S.Container>
          <S.Input type="number" name={first} value={firstVal} onChange={onChange} required />
          <S.Divider> - </S.Divider>
          <S.Input type="number" name={second} value={secondVal} onChange={onChange} required />
          <S.Divider> - </S.Divider>
          <S.Input type="password" name={third} value={thirdVal} onChange={onChange} required />
          <S.Divider> - </S.Divider>
          <S.Input type="password" name={fourth} value={fourthVal} onChange={onChange} required />
        </S.Container>
      </FieldSet>
    </S.Box>
  )
}
