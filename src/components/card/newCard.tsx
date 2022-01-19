import { SetRoute } from '@/common/constants'

const NewCard = ({ setRoute }: { setRoute?: SetRoute }) => {
  const toAddPage = () => {
    setRoute && setRoute({ route: 'ADD' })
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
