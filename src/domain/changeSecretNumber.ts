export const changeSerectNumber = (number: string) => {
  const serectNumber = number
    .split('')
    .map((data) => data.replace(data, '*'))
    .join('')

  return serectNumber
}
