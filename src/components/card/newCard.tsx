import { useRouter } from '@/contexts/route'

const NewCard = () => {
  const { setRoute } = useRouter()
  const toAddPage = () => {
    setRoute('ADD')
  }

  return (
    <div className="card-box" onClick={toAddPage}>
      <div className="empty-card" data-testid="card">
        +
      </div>
    </div>
  )
}

export default NewCard
