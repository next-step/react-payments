import { SetRoute } from '@common/constants'

const NewCard = ({ setRoute }: { setRoute: SetRoute }) => {
  const toAddPage = () => {
    setRoute({ route: 'ADD' })
  }

  return (
    <div className="card-box" onClick={toAddPage}>
      <div className="empty-card">+</div>
    </div>
  )
}

export default NewCard
