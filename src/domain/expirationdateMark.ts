export const expirationDateMark = (NumberData: CardExpirationDate) => {
  return NumberData.MM.length === 0 ? '' : `${NumberData.MM}/${NumberData.YY}`
}
