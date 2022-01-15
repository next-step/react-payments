import { Card } from 'components/Card'
import { PageProps } from 'type'

export default function CardListPage(props: PageProps) {
  return (
    <>
      <header>
        <h1>보유카드</h1>
      </header>
      <main>
        <section>
          <Card>+</Card>
        </section>
      </main>
    </>
  )
}
