import classNames from 'classnames/bind'
import { forwardRef, PropsWithChildren } from 'react'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

export const Input = ({ children }: PropsWithChildren<{}>) => <div className={cx('input-container')}>{children}</div>
export const InputTitle = ({ children }: PropsWithChildren<{}>) => <div className={cx('input-title')}>{children}</div>
export const InputBox = ({ className, children }: PropsWithChildren<{ className?: string }>) => (
  <div className={cx('input-box', className)}>{children}</div>
)

export const BasicInput = forwardRef<HTMLInputElement, PropsWithChildren<{ className?: string }>>(
  ({ className, ...props }, ref) => <input className={cx('input-basic', className)} ref={ref} {...props} />,
)

export const UnderlineInput = forwardRef<HTMLInputElement, PropsWithChildren<{ className?: string }>>(
  ({ className, ...props }, ref) => <input className={cx('input-underline', className)} ref={ref} {...props} />,
)
