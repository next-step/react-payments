interface NumberData {
  num1: string
  num2: string
  num3: string
  num4: string
}

interface CardNumberProps {
  cardNumberData: NumberData
  cardNumberDataHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

interface CardDesignProps {
  cardNumber: NumberData
  cardExpirationDate: NumberData
}

interface CardExpirationDateProps {
  cardExpirationDate: NumberData
  cardExpirationDateHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

interface CardSecurityCodeProps {
  cardSecurityCode: NumberData
  cardSecurityCodeandler: (e: ChangeEvent<HTMLInputElement>) => void
}

interface CardPasswordProps {
  cardPassword: NumberData
  cardPasswordHandler: (e: ChangeEvent<HTMLInputElement>) => void
}
