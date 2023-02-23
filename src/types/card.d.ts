interface NumberData {
  num1: string
  num2: string
  num3: string
  num4: string
}

interface CardExpirationDate {
  MM: string
  YY: string
}

interface CardDesignProps {
  cardDesignNameHandler: (e: MouseEvent<HTMLButtonElement>) => void
}

interface CardNumberProps {
  cardNumberData: NumberData
  cardNumberDataHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

interface CardShapeProps {
  cardNumber: NumberData
  cardExpirationDate: CardExpirationDate
  cardDesign: string
}

interface CardExpirationDateProps {
  cardExpirationDate: CardExpirationDate
  cardExpirationDateHandler: (e: ChangeEvent<HTMLInputElement>) => void
  fetchedTwoLettersDataHandler: (e: FocusEvent<HTMLInputElement>) => void
}

interface CardOwnerNameProps {
  ownerName: string
  ownerNameValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

interface CardSecurityCodeProps {
  cardSecurityCode: NumberData
  cardSecurityCodeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

interface CardPasswordProps {
  cardPassword: NumberData
  cardPasswordHandler: (e: ChangeEvent<HTMLInputElement>) => void
}
