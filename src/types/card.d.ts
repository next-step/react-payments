interface CardNumberProps {
  cardNumber: { num1: string; num2: string; num3: string; num4: string }
  cardNumberHandler: (e: ChangeEvent<HTMLInputElement>) => void
}
