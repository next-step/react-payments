import { Button } from 'components/Button'
import { BlankCard } from 'components/Card'
import { CardPasswordFieldSet, CardSerialNumsFieldSet } from 'components/Form/FieldSet'
import { CardInput } from 'components/Form/Input'
import { CardModal } from 'components/Modal'
import { IconCircleQuestion, IconLeftArrow } from 'components/svgs'
import * as S from './style'

interface Props {
  setPage: React.Dispatch<React.SetStateAction<string>>
}

export default function CardAddPage({ setPage }: Props) {
  return (
    <div>
      <S.Header>
        <Button onClick={() => setPage('CardListPage')}>
          <IconLeftArrow />
        </Button>
        <S.H1>카드 추가</S.H1>
      </S.Header>

      <S.FlexRowCenter>
        <BlankCard />
      </S.FlexRowCenter>

      <S.Form>
        <CardSerialNumsFieldSet />
        <S.FlexColumn width="40%">
          <CardInput
            labelName="만료일"
            id="expiredDate"
            name="expiredDate"
            type="text"
            placeholder="MM/YY"
            minLength={5}
            maxLength={5}
            required
          />
        </S.FlexColumn>
        <S.FlexColumn>
          <CardInput
            labelName="카드 소유자 이름(선택)"
            id="userName"
            name="userName"
            type="text"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            required
          />
        </S.FlexColumn>

        <S.FlexRowAlignCenter>
          <S.FlexColumn width="30%">
            <CardInput
              labelName="보안 코드(CVC/CVV)"
              id="cvc"
              name="cvc"
              type="password"
              minLength={3}
              maxLength={3}
              required
            />
          </S.FlexColumn>
          <S.IconWrapper>
            <IconCircleQuestion />
          </S.IconWrapper>
        </S.FlexRowAlignCenter>
        <CardPasswordFieldSet />

        <S.ButtonWrapper>
          <Button type="submit">다음</Button>
        </S.ButtonWrapper>
      </S.Form>
      <CardModal close={true} />
    </div>
  )
}
