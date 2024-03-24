import {
  CardCompanyProps,
  CardExpirationDateProps,
  CardHolderNameProps,
  CardNumberProps,
  CardProps,
} from './Card.type'

export const Card = ({ children, backgroundColor, style, ...rest }: CardProps) => {
  return (
    <section className="big-card card-box" style={{ backgroundColor, ...style }} {...rest}>
      {children}
    </section>
  )
}

Card.CarNumber = ({ creditCardNumber, revealCount }: CardNumberProps) => {
  const cardNumber = creditCardNumber.split(' ').join('')
  const restCount = cardNumber.length - revealCount

  const parsedCardNumber =
    cardNumber.slice(0, revealCount) + Array.from({ length: restCount }, () => 'o').join('')

  const chunk = (str: string, size: number = 4) => {
    const chunks: string[] = []

    for (let i = 0; i < str.length; i += size) {
      chunks.push(str.slice(i, i + size))
    }

    return chunks
  }

  return (
    <div className="card-bottom__number">
      <span className="card-text__big">{chunk(parsedCardNumber).join(' - ')}</span>
    </div>
  )
}

Card.CardHolderName = (props: CardHolderNameProps) => {
  return <span className="card-text__big">{props.name}</span>
}

Card.CardExpirationDate = (props: CardExpirationDateProps) => {
  return <span className="card-text__big">{props.expirationDate}</span>
}

Card.CardCompany = (props: CardCompanyProps) => {
  return (
    <span className="card-text__big" style={{ margin: 0 }}>
      {props.name}
    </span>
  )
}

Card.CardChip = () => {
  return <div className="big-card__chip" />
}
