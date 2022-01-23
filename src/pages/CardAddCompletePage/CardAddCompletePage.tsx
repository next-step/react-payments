import { useState } from 'react'
import { Button } from 'components/Button'
import { DigitalCard } from 'components/Card'
import { Label } from 'components/Form/Input'
import { PageProps, Card } from '../../type'
import { PAGES } from '../../constants'
import * as S from './style'

export default function CardAddCompletePage({ cards, setCards, setPage }: PageProps) {
  const [nickName, setNickName] = useState<string>('')
  const { type, serialNums, ownerName, expiredDate } = cards[cards.length - 1]

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(PAGES.CARD_LIST)
    setCards(updateCardNickName(cards))
  }

  const updateCardNickName = (cards: Card[]): Card[] => {
    return cards.map((card, i) => {
      if (cards.length - 1 === i)
        return { type, serialNums: { ...serialNums }, ownerName, expiredDate, nickName }
      return card
    })
  }
  return (
    <S.Main>
      <S.Section>
        <S.Title>카드 등록이 완료되었습니다</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <DigitalCard
            big
            type={type}
            serialNums={serialNums}
            ownerName={ownerName}
            expiredDate={expiredDate}
          />
          <Label id="nickName">
            <S.Input
              id="nickName"
              name="nickName"
              type="text"
              value={nickName}
              onChange={handleChange}
              maxLength={30}
              required
            />
          </Label>
          <S.ButtonWrapper>
            <Button type="submit">확인</Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.Section>
    </S.Main>
  )
}
