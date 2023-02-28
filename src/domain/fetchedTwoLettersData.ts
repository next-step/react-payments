export const fetchedTwoLettersData = (numberData: string) => {
  return (Number(numberData) && numberData !== '0') < 10 ? `0${Number(numberData)}` : numberData
}
