import { Card } from 'components/Card'
import { PageProps } from 'type'
import * as S from './style'
export default function CardListPage({ setPage }: PageProps) {
  return (
    <S.CardListPage>
      <S.Header>
        <h1>보유카드</h1>
      </S.Header>
      <main>
        <section>
          <Card onClick={() => setPage('CardAddPage')}>+</Card>
        </section>
      </main>
    </S.CardListPage>
  )
}
