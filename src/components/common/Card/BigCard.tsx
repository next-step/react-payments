import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { CardNumber, MM, YY } from './types'

export type BigCardProps = ComponentPropsWithoutRef<'div'> & {
  number: CardNumber[]
  expiry: [MM, YY]
  owner: string
  name: string
}

export const BigCard = forwardRef<ElementRef<'input'>, BigCardProps>(
  ({ className = '', number, expiry, name, owner, ...props }, forwardedRef) => {
    const [first, second, third, fourth] = number
    const [month, year] = expiry

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
                {first} {second} {'•'.repeat(third.length)}{' '}
                {'•'.repeat(fourth.length)}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text__big">{owner}</span>
              <span className="card-text__big">
                {month ? `${month} / ${year}` : ''}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
BigCard.displayName = 'BigCard'
