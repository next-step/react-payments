import { Link } from 'react-router-dom'

const CardList = () => {
  return (
    <div>
      <div className='root'>
        <div className='app flex-column-center'>
          <div className='flex-center'>
            <h2 className='page-title mb-10'>보유 카드</h2>
          </div>
          <div className='card-box'>
            <Link className='empty-card' to='/card-add'>
              +
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardList
