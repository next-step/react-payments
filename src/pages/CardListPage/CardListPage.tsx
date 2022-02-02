import { Fragment } from 'react'
import { Card, DigitalCard } from 'components/Card'
import { PageProps } from 'type'
import * as S from './style'
import { PAGES } from '../../constants'

export default function CardListPage({ cards, setCards, setPage, setEditCardIndex }: PageProps) {
  const handleClick = (index: number) => () => {
    setEditCardIndex(index)
    setPage(PAGES.CARD_ADD_COMPLETE)
  }
  const handleDeleteClick = (index: number) => () => {
    setCards(cards.filter((card, i) => cards.length - 1 - i !== index))
  }
  return (
    <S.Box>
      <S.Header>보유카드</S.Header>
      <S.Main>
        {[...cards].reverse().map(({ nickName, ...card }, i) => (
          <Fragment key={`card-${i}`}>
            <S.Wrapper>
              <S.DigitalCardBlock onClick={handleClick(cards.length - 1 - i)}>
                <DigitalCard {...card} />
                <S.Name>{nickName}</S.Name>
              </S.DigitalCardBlock>
              <S.Delete onClick={handleDeleteClick(i)}>-</S.Delete>
            </S.Wrapper>
          </Fragment>
        ))}
        <Card onClick={() => setPage(PAGES.CARD_ADD)}>
          <S.AddCard>+</S.AddCard>
        </Card>
      </S.Main>
    </S.Box>
  )
}
