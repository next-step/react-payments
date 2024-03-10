import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export type EmptyCardProps = ComponentPropsWithoutRef<'div'>

export const EmptyCard = forwardRef<ElementRef<'input'>, EmptyCardProps>(
  ({ className = '', ...props }, forwardedRef) => {
    return (
      <div className="card-box">
        <div
          className={`empty-card ${className}`}
          {...props}
          ref={forwardedRef}>
          <div className="card-top"></div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__info">
              <span className="card-text">NAME</span>
              <span className="card-text">MM / YY</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
EmptyCard.displayName = 'EmptyCard'
