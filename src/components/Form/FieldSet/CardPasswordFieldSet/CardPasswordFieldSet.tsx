import FieldSet from '../FieldSet'
import { CircleDot } from 'components/Icons/Dot'
import { MINT } from 'style/colors'
import * as S from './style'

export default function CardPasswordFieldSet() {
  return (
    <FieldSet legend="카드 비밀번호">
      <S.Container>
        <S.Input type="password" />
        <S.Input type="password" />
        <CircleDot bgColor={MINT} />
        <CircleDot bgColor={MINT} />
      </S.Container>
    </FieldSet>
  )
}

// {/* <fieldset>
// <legend>카드 비밀번호</legend>
// <label htmlFor="secretNum1" />
// <input id="secretNum1" name="secretNum1" type="password" maxLength={1} required />
// <label htmlFor="secretNum2" />
// <input id="secretNum2" name="secretNum2" type="password" maxLength={1} required />
// </fieldset> */}
