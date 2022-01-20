import Card from '@/components/card'
import CardForm from '@/components/cardForm'
import { useCardList } from '@/contexts/cardList'
import { useRouter } from '@/contexts/route'

const AddPage = () => {
  const { setRoute } = useRouter()
  const { editingCard } = useCardList()

  const handleBack = () => {
    setRoute('LIST')
  }

  return (
    <>
      <div className="page-container">
        <h2 className="page-title">
          <button className="button" onClick={handleBack}>
            &lt;
          </button>{' '}
          카드 추가
        </h2>
        <Card type="small" cardData={editingCard} />
        <CardForm />
      </div>
    </>
  )
}
export default AddPage
