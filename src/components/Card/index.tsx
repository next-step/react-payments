import styles from './index.module.css'

const CardTypeAccordingToStartsWith = {
  1: '포코',
  2: '준',
  3: '공원',
  4: '브랜',
  5: '로이드',
  6: '도비',
  7: '콜린',
  8: '썬',
} as const

type CardType =
  typeof CardTypeAccordingToStartsWith[keyof typeof CardTypeAccordingToStartsWith]

export interface CardProps {
  type: CardType | ''
  number: string
  validDate: string
  owner: string
  cvc: string
  password: string
}

const Card = ({
  type,
  number,
  owner,
  validDate,
}: Omit<CardProps, 'password' | 'cvc'>) => {
  return (
    <div className={styles['card-box']}>
      <div className={styles['small-card']}>
        <div className={styles['card-top']}>
          <span className={styles['card-text']}>{type && `${type}카드`}</span>
        </div>
        <div className={styles['card-middle']}>
          <div className={styles['small-card__chip']}></div>
        </div>
        <div className={styles['card-bottom']}>
          <div className={styles['card-bottom__number']}>
            <span className={styles['card-text']}>
              {number && '1111 - 2222 - oooo - oooo'}
            </span>
          </div>
          <div className={styles['card-bottom__info']}>
            <span className={styles['card-text']}>{owner || 'NAME'}</span>
            <span className={styles['card-text']}>
              {validDate || 'MM / YY'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
