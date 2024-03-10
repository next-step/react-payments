import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { CardExpiry, CardNumber } from './index'

export type BigCardProps = ComponentPropsWithoutRef<'div'> & {
  number: CardNumber
  expiry: CardExpiry
  owner: string
  name: string
}

export const BigCard = forwardRef<ElementRef<'input'>, BigCardProps>(
  ({ className = '', number, expiry, name, owner, ...props }, forwardedRef) => {
    const [first, second] = number.split(' ')
    const [month, year] = expiry.split('/')

    return (
      <div className="card-box">
        <div className={`big-card ${className}`} ref={forwardedRef} {...props}>
          <div className="card-top">
            <span className="card-text__big">{name}</span>
          </div>
          <div className="card-middle">
            <div className="big-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text__big">
                {first} {second} •••• ••••
              </span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text__big">{owner}</span>
              <span className="card-text__big">
                {month} / {year}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
BigCard.displayName = 'BigCard'
