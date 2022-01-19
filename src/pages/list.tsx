import { PageProps } from '@/common/constants'
import Card from '@/components/card'

const ListPage = ({ cards, setRoute }: PageProps) => {
  return (
    <div className="page-container flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      {[...cards].map((card, i) => (
        <Card type="small" cardData={card} key={i} />
      ))}
      <Card type="new" cardData={null} setRoute={setRoute} />
    </div>
  )
}

export default ListPage
