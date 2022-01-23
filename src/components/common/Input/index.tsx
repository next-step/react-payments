import classNames from 'classnames/bind'
import { forwardRef, PropsWithChildren } from 'react'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

export const Input = ({ children }: PropsWithChildren<{}>) => <div className={cx('input-container')}>{children}</div>
export const InputTitle = ({ children }: PropsWithChildren<{}>) => <div className={cx('input-title')}>{children}</div>
export const InputWarning = ({ children }: PropsWithChildren<{}>) => (
  <div className={cx('input-warning')}>{children}</div>
)
export const InputBox = ({ className, children }: PropsWithChildren<{ className?: string }>) => (
  <div className={cx('input-box', className)}>{children}</div>
)

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string
}

export const BasicInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input className={cx('input-basic', className)} ref={ref} {...props} />
))

export const UnderlineInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input className={cx('input-underline', className)} ref={ref} {...props} />
))
