import FieldSet from '../FieldSet'
import { CircleDot } from 'components/Icons/Dot'
import { MINT } from 'styles/colors'
import { PASSWORD } from 'pages/CardAddPage/constants'
import * as S from './style'

interface Props {
  password: typeof PASSWORD
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CardPasswordFieldSet({ password, onChange }: Props) {
  const [first, second] = Object.keys(password)
  const [firstVal, secondVal] = Object.values(password)
  return (
    <FieldSet legend="카드 비밀번호">
      <S.Box>
        <S.Input
          type="password"
          name={first}
          value={firstVal}
          onChange={onChange}
          maxLength={1}
          required
        />
        <S.Input
          type="password"
          name={second}
          value={secondVal}
          onChange={onChange}
          maxLength={1}
          required
        />
        <CircleDot bgColor={MINT} />
        <CircleDot bgColor={MINT} />
      </S.Box>
    </FieldSet>
  )
}
