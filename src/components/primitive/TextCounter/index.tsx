import './index.css'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

interface TextCounterProps extends ComponentPropsWithoutRef<'div'> {
  currentLength: number
  maxLength: number
  gap?: number
}

export const TextCounter = forwardRef<HTMLDivElement, TextCounterProps>(
  ({ currentLength, maxLength, className, gap, style, ...props }, ref) => {
    const parsedStyle = style ? Object.assign(style, { gap }) : { gap }

    return (
      <div ref={ref} className={['container', className].join(' ')} style={parsedStyle} {...props}>
        <span>{currentLength}</span>
        <span>/</span>
        <span>{maxLength}</span>
      </div>
    )
  }
)
