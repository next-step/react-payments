import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { CardExpiry, CardNumber } from './types'

export type SmallCardProps = ComponentPropsWithoutRef<'div'> & {
  number: CardNumber
  expiry: CardExpiry
  owner: string
  name: string
}

export const SmallCard = forwardRef<ElementRef<'input'>, SmallCardProps>(
  ({ className = '', number, expiry, name, owner, ...props }, forwardedRef) => {
    const [first, second] = number.split(' ')
    const [month, year] = expiry.split('/')

    return (
      <div className="card-box">
        <div
          className={`small-card ${className}`}
          ref={forwardedRef}
          {...props}>
          <div className="card-top">
            <span className="card-text">{name}</span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">
                {first} {second} •••• ••••
              </span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">{owner}</span>
              <span className="card-text">
                {month} / {year}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
SmallCard.displayName = 'SmallCard'
