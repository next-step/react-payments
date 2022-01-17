import classNames from 'classnames/bind'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

interface CardProps {
  type: 'small' | 'big'
  holderName: string
  cardNumber: [string, string, string, string]
  expireMonth: string
  expireYear: string
  company: { name: string; color: string }
}

function Card({ type = 'small', holderName, cardNumber, expireMonth, expireYear, company }: CardProps) {
  const hasCardNumber = cardNumber?.join('').length > 0

  return (
    <div className={cx('card-box')}>
      <div className={cx(`${type}-card`)} style={{ background: company.color || '#e5e5e5' }}>
        <div className={cx('card-top')}>
          {company.name && <span className={cx(`${type}-card__text`)}>{company.name}</span>}
        </div>
        <div className={cx('card-middle')}>
          <div className={cx(`${type}-card__chip`)} />
        </div>
        <div className={cx('card-bottom')}>
          {hasCardNumber && (
            <div className={cx('card-bottom__number')}>
              <span className={cx(`${type}-card__text`)}>
                {cardNumber.map((section, index) => {
                  if (index < 2) return section
                  return '*'.repeat(section.length)
                })}
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
