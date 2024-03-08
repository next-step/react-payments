export const getOnlyNumbers = (value: string) => {
  const numbersOnly = value.replace(/\D/g, '')

  return numbersOnly
}

export const applyMask = (mask: string, inputValue: string) => {
  let maskedValue = ''

  let maskIndex = 0
  let InputIndex = 0

  while (maskIndex < mask.length && InputIndex < inputValue.length) {
    if (mask[maskIndex] === '0') {
      maskedValue += inputValue[InputIndex]
      InputIndex++
    } else {
      maskedValue += mask[maskIndex]
    }

    maskIndex++
  }

  return maskedValue
}
