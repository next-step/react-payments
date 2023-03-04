import { REGEX } from 'constants/regex'

const getConvertAddStrFormat = (
  value: string,
  regex: RegExp,
  options?: { addIndexs: number[]; addstr: string },
) => {
  const rawString = value.replace(regex, '')
  if (!options) return rawString

  const { addIndexs, addstr } = options
  return rawString.split('').reduce((acc, cur, i) => {
    if (addIndexs.includes(i)) {
      acc += addstr
    }

    acc += rawString[i]
    return acc
  }, '')
}

const getConvertDateFormat = (value: string) => {
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

export { getConvertDateFormat, getConvertAddStrFormat }
