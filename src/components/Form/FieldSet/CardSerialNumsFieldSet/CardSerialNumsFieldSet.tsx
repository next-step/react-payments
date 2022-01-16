import FieldSet from '../FieldSet'
import * as S from './style'

export default function CardSerialNumsFieldSet() {
  return (
    <S.Box>
      <FieldSet legend="카드번호">
        <S.Container>
          <S.Input required />
          <S.Divider>-</S.Divider>
          <S.Input required />
          <S.Divider>-</S.Divider>
          <S.Input required />
          <S.Divider>-</S.Divider>
          <S.Input required />
        </S.Container>
      </FieldSet>
    </S.Box>
  )
}

// <legend>카드 번호</legend>
// <label htmlFor="cardNums2" />
// <input
//   id="cardNums2"
//   name="cardNums2"
//   type="number"
//   minLength={4}
//   maxLength={4}
//   required
// />
// <label htmlFor="cardNums3" />
// <input
//   id="cardNums3"
//   name="cardNums3"
//   type="password"
//   minLength={4}
//   maxLength={4}
//   required
// />
