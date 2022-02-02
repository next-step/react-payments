import { Button } from 'components/Button'
import { DigitalCard } from 'components/Card'
import { Label } from 'components/Form/Input'
import { useInput } from 'hooks/useInput'
import { PageProps } from '../../type'
import { PAGES } from '../../constants'
import { updateCardNickName } from './helpers'
import * as S from './style'

export default function CardAddCompletePage({
  cards,
  editCardIndex,
  setCards,
  setPage,
}: PageProps) {
  const [nickName, setNickName] = useInput(cards[editCardIndex].nickName)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(PAGES.CARD_LIST)
    setCards(updateCardNickName(cards, nickName))
  }

  return (
    <S.Main>
      <S.Section>
        <S.Title>카드 등록이 완료되었습니다</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <DigitalCard big {...cards[editCardIndex]} />
          <Label id="nickName">
            <S.Input {...NICKNAME_PROPERTYS} value={nickName} onChange={setNickName} />
          </Label>
          <S.ButtonBlock>
            <Button type="submit">확인</Button>
          </S.ButtonBlock>
        </S.Form>
      </S.Section>
    </S.Main>
  )
}

const NICKNAME_PROPERTYS = {
  id: 'nickName',
  name: 'nickName',
  type: 'text',
  maxLength: 10,
}
