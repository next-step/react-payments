export interface CreateCardNumberParams {
  value: string
  maskedLastDigit: number
  maskChar?: string
  separator?: string
  separateDigit?: number
  maxDigit?: number
}

export const createDisplayCardCode = ({
  value,
  maskedLastDigit,
  separator = ' - ',
  maskChar = '•',
  separateDigit = 4,
  maxDigit = 16,
}: CreateCardNumberParams) => {
  const splits = []
  for (let i = 0; i < value.length; i += separateDigit) {
    const slices = Array.from(value.slice(i, i + separateDigit))
    for (let s = i; s < i + slices.length; s++) {
      if (s >= maxDigit - maskedLastDigit) {
        slices[s - i] = maskChar
      }
    }
    splits.push(slices.join(''))
  }
  return splits.join(separator)
}
