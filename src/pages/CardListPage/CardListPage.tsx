import { Fragment } from 'react'
import { Card, DigitalCard } from 'components/Card'
import { PageProps } from 'type'
import * as S from './style'

export default function CardListPage({ cards, setPage }: PageProps) {
  return (
    <S.Box>
      <S.Header>보유카드</S.Header>
      <S.Main>
        {cards.map(({ nickName, ...card }, i) => (
          <Fragment key={`card-${i}`}>
            <DigitalCard {...card} />
            <span>{nickName}</span>
          </Fragment>
        ))}
        <Card onClick={() => setPage('CardAddPage')}>
          <S.AddCard>+</S.AddCard>
        </Card>
      </S.Main>
    </S.Box>
  )
}
