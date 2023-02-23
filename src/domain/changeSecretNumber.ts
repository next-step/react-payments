export const changeSecretNumber = (number: string) => {
  const secretNumber = number
    .split('')
    .map((data) => data.replace(data, '*'))
    .join('')

  return secretNumber
}
