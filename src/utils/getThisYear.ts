export const getThisYear = () => {
  const thisYear = new Date().getFullYear().toString().split('')
  const currentYearFirstDigit = Number(thisYear[2])
  const currentYearToDigit = Number(thisYear[2] + thisYear[3])

  return { currentYearFirstDigit, currentYearToDigit }
}
