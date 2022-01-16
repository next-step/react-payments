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
  number1: string
  number2: string
  number3: string
  number4: string
  validDate: string
  owner: string
  cvc: string
  password: string
}

const Card = ({
  type,
  number1,
  number2,
  number3,
  number4,
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
              {number1.padEnd(4, '')} - {number2.padEnd(4, '')} -
              {number3.padEnd(4, '')} - {number4.padEnd(4, '')}
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
