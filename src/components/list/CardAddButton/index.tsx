import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom'

import ROUTES from '$constants/routes'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

function CardAddButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(ROUTES.ADD)
  }

  return (
    <div className={cx('card-box')} onClick={handleClick}>
      <div className={cx('empty-card')}>+</div>
    </div>
  )
}

export default CardAddButton
