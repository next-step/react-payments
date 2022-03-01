import { SERIAL_NUMS } from 'controlled/pages/CardAddPage/constants'
import FieldSet from '../FieldSet'
import * as S from './style'

interface Props {
  serialNums: typeof SERIAL_NUMS
  errorMessage?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CardSerialNumsFieldSet({ serialNums, errorMessage, onChange }: Props) {
  const [first, second, third, fourth] = Object.keys(serialNums)
  const [firstVal, secondVal, thirdVal, fourthVal] = Object.values(serialNums)

  return (
    <S.Box>
      <FieldSet legend="카드번호" errorMessage={errorMessage}>
        <S.Wrapper>
          <S.Input type="number" name={first} value={firstVal} onChange={onChange} required />
          <S.Divider> - </S.Divider>
          <S.Input type="number" name={second} value={secondVal} onChange={onChange} required />
          <S.Divider> - </S.Divider>
          <S.Input
            type="password"
            name={third}
            value={thirdVal}
            onChange={onChange}
            maxLength={4}
            required
          />
          <S.Divider> - </S.Divider>
          <S.Input
            type="password"
            name={fourth}
            value={fourthVal}
            onChange={onChange}
            maxLength={4}
            required
          />
        </S.Wrapper>
      </FieldSet>
    </S.Box>
  )
}
