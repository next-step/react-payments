import { Card } from 'components/Card'
import { PageProps } from 'type'
import * as S from './style'
export default function CardListPage({ setPage }: PageProps) {
  return (
    <S.Box>
      <S.Header>
        <h1>보유카드</h1>
      </S.Header>
      <main>
        <S.Section>
          <Card onClick={() => setPage('CardAddPage')}>
            <S.AlignCenter>+</S.AlignCenter>
          </Card>
        </S.Section>
      </main>
    </S.Box>
  )
}
