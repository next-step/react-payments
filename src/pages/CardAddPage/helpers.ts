export const limitRangeOfMonthAndYear = (name: string, value: string): string => {
  const num = Number(value)
  if (name === 'mm' && num > 12) return '12'
  if (name === 'mm' && num < 0) return '0'
  if (name === 'yy' && num > 99) return '99'
  if (name === 'yy' && num < 0) return '0'
  return value
}

export const limitRangeOfSerialNums = (name: string, value: string): string => {
  const num = Number(value)
  if (name === 'first' || name === 'second') {
    if (num > 9999) return '9999'
    if (num < 0) return '0'
  }
  return value
}
