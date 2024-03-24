import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export type NewCardProps = ComponentPropsWithoutRef<'div'>

export const NewCard = forwardRef<ElementRef<'input'>, NewCardProps>(
  ({ className = '', ...props }, forwardedRef) => {
    return (
      <div className="card-box">
        <div
          className={`empty-card ${className}`}
          {...props}
          ref={forwardedRef}>
          +
        </div>
      </div>
    )
  }
)
NewCard.displayName = 'NewCard'
