import classNames from 'classnames/bind'
import { MouseEventHandler, PropsWithChildren } from 'react'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

type BottomButtonProps = PropsWithChildren<{
  disabled?: boolean
  onClick?: MouseEventHandler
}>

function BottomButton({ onClick = () => {}, disabled = false, children }: BottomButtonProps) {
  return (
    <div className={cx('button-box', { 'button-disabled': disabled })} onClick={onClick}>
      <span className={cx('button-text')}>{children}</span>
    </div>
  )
}

export default BottomButton
