import { Fragment } from 'react'
import { Card, DigitalCard } from 'components/Card'
import { PageProps } from 'type'
import * as S from './style'
export default function CardListPage({ cards, setPage }: PageProps) {
  return (
    <S.Box>
      <S.Header>
        <h1>보유카드</h1>
      </S.Header>
      <main>
        <S.Section>
          {cards.map(({ nickName, ...card }, i) => (
            <Fragment key={`card-${i}`}>
              <DigitalCard {...card} />
              <span>{nickName}</span>
            </Fragment>
          ))}
          <Card onClick={() => setPage('CardAddPage')}>
            <S.AlignCenter>+</S.AlignCenter>
          </Card>
        </S.Section>
      </main>
    </S.Box>
  )
}
