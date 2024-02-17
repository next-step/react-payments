export const isYearValid = (year: number): boolean => {
  const currentYear = Number(String(new Date().getFullYear()).slice(-2))
  return year >= currentYear
}
