import { Button } from 'components/Button'
import { DigitalCard } from 'components/Card'
import { Label } from 'components/Form/Input'
import { useInput } from 'hooks/useInput'
import { PageProps, Card } from '../../type'
import { PAGES } from '../../constants'
import * as S from './style'

export default function CardAddCompletePage({ cards, setCards, setPage }: PageProps) {
  const [nickName, setNickName] = useInput()
  const lastCard = cards[cards.length - 1]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(PAGES.CARD_LIST)
    setCards(updateCardNickName(cards))
  }
  const updateCardNickName = (cards: Card[]): Card[] => {
    const { serialNums } = lastCard
    return cards.map((card, i) => {
      if (cards.length - 1 === i) return { ...lastCard, serialNums: { ...serialNums }, nickName }
      return card
    })
  }

  return (
    <S.Main>
      <S.Section>
        <S.Title>카드 등록이 완료되었습니다</S.Title>

        <S.Form onSubmit={handleSubmit}>
          <DigitalCard big {...lastCard} />
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
  maxLength: 30,
  required: true,
}
