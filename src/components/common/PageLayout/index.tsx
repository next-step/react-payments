import classNames from 'classnames/bind'
import { ReactNode } from 'react'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

interface PageLayoutProps {
  className?: string
  children: ReactNode
}

function PageLayout({ className, children }: PageLayoutProps) {
  return <div className={cx('container', className)}>{children}</div>
}

export default PageLayout
