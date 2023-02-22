interface NumberData {
  num1: string
  num2: string
  num3: string
  num4: string
}

interface CardExpirationDate extends Pick<NumberData, 'num1' | 'num2'> {}

interface CardNumberProps {
  cardNumberData: NumberData
  cardNumberDataHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

interface CardDesignProps {
  cardNumber: NumberData
  cardExpirationDate: CardExpirationDate
}

interface CardExpirationDateProps {
  cardExpirationDate: CardExpirationDate
  cardExpirationDateHandler: (e: ChangeEvent<HTMLInputElement>) => void
  fetchedTwoLettersDataHanlder: (e: FocusEvent<HTMLInputElement>) => void
}

interface CardSecurityCodeProps {
  cardSecurityCode: NumberData
  cardSecurityCodeandler: (e: ChangeEvent<HTMLInputElement>) => void
}

interface CardPasswordProps {
  cardPassword: NumberData
  cardPasswordHandler: (e: ChangeEvent<HTMLInputElement>) => void
}
