export const fetchedTwoLettersData = (numberData: string) => {
  let result
  if (numberData !== '0') {
    result = Number(numberData) < 10 ? `0${Number(numberData)}` : numberData
  }
  return result
}
