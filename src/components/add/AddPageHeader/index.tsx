import classNames from 'classnames/bind'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

function AddPageHeader() {
  return (
    <h2 className={cx('container')}>
      <Link to="/">
        <button type="button" className={cx('nav-button')}>
          {'<'}
        </button>
      </Link>
      카드 추가
    </h2>
  )
}

export default memo(AddPageHeader)
