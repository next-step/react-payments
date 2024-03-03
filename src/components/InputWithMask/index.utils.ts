export const getOnlyNumbers = (value: string) => {
  const numbersOnly = value.replace(/\D/g, '')

  return numbersOnly
}

export const applyMask = (mask: string, inputValue: string) => {
  let maskedValue = ''
  let i = 0
  let j = 0

  while (i < mask.length && j < inputValue.length) {
    if (mask[i] === '0') {
      maskedValue += inputValue[j]
      j++
    } else {
      maskedValue += mask[i]
    }

    i++
  }

  return maskedValue
}
