import classNames from 'classnames/bind'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

type PageTitleProps = {
  title: string
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className={cx('flex-center')}>
      <h2 className={cx('page-title', 'mb-10')}>{title}</h2>
    </div>
  )
}

export default PageTitle
