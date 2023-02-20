const cardNumberFormat = (value: string) => {
  const rawString = value.replace(/\D/g, '')
  let output = ''

  if (rawString.length > 0) {
    output += rawString.substring(0, 4)
  }

  if (rawString.length > 4) {
    output += '-'
    output += rawString.substring(4, 8)
  }

  if (rawString.length > 8) {
    output += '-'
    output += rawString.substring(8, 12)
  }

  if (rawString.length > 12) {
    output += '-'
    output += rawString.substring(12, 16)
  }

  return output
}

const expireDateFormat = (value: string) => {
  const rawString = value.replace(/\D/g, '')
  let output = ''
  if (rawString.length > 0) {
    const [first] = rawString.split('')
    if (Number(first) > 1) {
      output += '0'
    }
    output += rawString.substring(0, 1)
  }

  if (rawString.length > 1) {
    const [first, second] = rawString.split('')
    if (Number(first + second) < 13) {
      output += rawString.substring(1, 2)
    }
  }

  if (rawString.length > 2) {
    output += '/'
    output += rawString.substring(2, 4)
  }

  return output
}

const cardOwnerFormat = (value: string) => {
  return value.replace(/\^[A-Za-z]/g, '')
}

const onlyNumberFormat = (value: string) => {
  return value.replace(/\D/g, '')
}

export { cardNumberFormat, expireDateFormat, cardOwnerFormat, onlyNumberFormat }
