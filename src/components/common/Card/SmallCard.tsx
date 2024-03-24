import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { CardNumber, MM, YY } from './types'
import { css } from '@emotion/css'

export type SmallCardProps = ComponentPropsWithoutRef<'div'> & {
  number: CardNumber[]
  expiry: [MM, YY]
  owner: string
  name: string
}

export const SmallCard = forwardRef<ElementRef<'input'>, SmallCardProps>(
  ({ className = '', number, expiry, name, owner, ...props }, forwardedRef) => {
    const [first, second, third, fourth] = number
    const [month, year] = expiry

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
                {first} {second} {'•'.repeat(third.length)}{' '}
                {'•'.repeat(fourth.length)}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className={css(['card-text', cardOwnerStyle])}>
                {owner}
              </span>
              <span className="card-text">
                {month ? `${month} / ${year}` : ''}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
SmallCard.displayName = 'SmallCard'

const cardOwnerStyle = css`
  margin-left: 10px;
  width: 115px;
  overflow: hidden;
  text-overflow: ellipsis;
`
