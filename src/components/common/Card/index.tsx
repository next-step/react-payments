import classNames from 'classnames/bind'
import { MouseEventHandler } from 'react'
import { Card as CardType } from 'src/types/card'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

interface CardProps {
  type: 'small' | 'big'
  alias?: string
  holderName: string
  cardNumber: CardType['number']
  expireMonth: string
  expireYear: string
  company: { name: string; color: string }
  onClick?: MouseEventHandler
}

function Card({
  type = 'small',
  alias,
  holderName,
  cardNumber,
  expireMonth,
  expireYear,
  company,
  onClick = () => {},
}: CardProps) {
  const hasCardNumber = cardNumber?.join('').length > 0

  return (
    <div className={cx('card-box')} onClick={onClick}>
      <div className={cx(`${type}-card`)} style={{ background: company.color || '#e5e5e5' }}>
        <div className={cx('card-top')}>
          {company.name && (
            <span className={cx(`${type}-card__text`)}>
              {company.name} {alias && `(${alias})`}
            </span>
          )}
        </div>
        <div className={cx('card-middle')}>
          <div className={cx(`${type}-card__chip`)} />
        </div>
        <div className={cx('card-bottom')}>
          {hasCardNumber && (
            <div className={cx('card-bottom__number')}>
              <span className={cx(`${type}-card__text`)}>
                {cardNumber
                  .map((section, index) => {
                    if (index < 2) return section
                    return '*'.repeat(section.length)
                  })
                  .join(' - ')}
              </span>
            </div>
          )}
          <div className={cx('card-bottom__info')}>
            <span className={cx(`${type}-card__text`)}>{holderName || 'NAME'}</span>
            <span className={cx(`${type}-card__text`)}>
              {expireMonth ? (expireMonth.length >= 2 ? expireMonth : `0${expireMonth}`) : 'MM'} /{' '}
              {expireYear ? (expireYear.length >= 2 ? expireYear : `0${expireYear}`) : 'YY'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
