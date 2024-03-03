export const checkExpirationDate = (month: string, year: string) => {
  const parsedMonth = parseInt(month)

  if (parsedMonth < 1 || parsedMonth > 12) {
    return false
  }

  return true
}
