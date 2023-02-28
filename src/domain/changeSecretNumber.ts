export const changeSecretNumber = (numberData: string) => {
  return numberData
    .split('')
    .map((data) => data.replace(data, '*'))
    .join('')
}
